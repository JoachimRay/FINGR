export async function POST(request: Request) {
	return Response.json({
		opener: "some friendly opener text",
		source: "fallback",
	});
}
