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
	} catch (error) {
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

	return Response.json({
		opener: `Hi ${name}`,
		source: "fallback",
	});
}
