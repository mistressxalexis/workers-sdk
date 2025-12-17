export default {
	async fetch() {
		return new Response(
			`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Pre-rendering</title>
</head>
<body>
	<h1>Pre-rendered HTML</h1>
</body>
</html>`,
			{
				headers: { "Content-Type": "text/html" },
			}
		);
	},
} satisfies ExportedHandler;
