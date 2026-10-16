function fallback() {
	return Response.json({
		opener: "Hi! What's something you're excited about lately?",
		source: "fallback",
	});
}

export async function POST(request: Request) {
	let body;

	try {
		body = await request.json();
	} catch {
		return fallback();
	}

	if (typeof body !== "object" || body === null) {
		return fallback();
	}

	const name = typeof body.name === "string" ? body.name.slice(0, 40) : "";
	const bio = typeof body.bio === "string" ? body.bio.slice(0, 200) : "";
	const interests = Array.isArray(body.interests)
		? body.interests
				.slice(0, 5)
				.map((item: unknown) =>
					typeof item === "string" ? item.slice(0, 30) : "",
				)
				.filter(Boolean)
		: [];

	const apiKey = process.env.OPENROUTER_API_KEY;
	if (!apiKey) {
		console.log("[opener] no API key");
		return fallback();
	}

	try {
		const response = await fetch(
			"https://openrouter.ai/api/v1/chat/completions",
			{
				method: "POST",
				headers: {
					Authorization: `Bearer ${apiKey}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					models: (process.env.OPENROUTER_MODELS ?? "")
						.split(",")
						.map((model) => model.trim())
						.filter(Boolean),
					max_tokens: 60,
					messages: [
						{
							role: "user",
							content: `Write one short, friendly first message to ${name}, who likes ${interests.join(", ")} and says: "${bio}". Reply with only the message.`,
						},
					],
				}),
				signal: AbortSignal.timeout(8000),
			},
		);

		if (!response.ok) {
			console.log(
				"[opener] OpenRouter error",
				response.status,
				await response.text(),
			);
			return fallback();
		}

		const data = await response.json();
		const opener = data?.choices?.[0]?.message?.content;

		if (typeof opener !== "string" || opener.trim() === "") {
			console.log("[opener] empty reply", JSON.stringify(data));
			return fallback();
		}

		return Response.json({opener: opener.trim(), source: "ai"});
	} catch (error) {
		console.log("[opener] request failed", error);
		return fallback();
	}
}
