import compiler from "./typst-compiler";
// @ts-ignore
import { convert, query } from "pandoc-wasm";

export default async function (buffer: string) {
	const result = await convert({
		from: "markdown",
		to: "typst",
		standalone: true,
	  "extract-media": "media",    // Extract media files (available in result.mediaFiles)
	  "embed-resources": true,     // Embed resources in output
	}, buffer, {});

	compiler.clearFiles()
	compiler.addSource("main.typ", result.stdout)
	return await compiler.compile({main: "main.typ", format: "svg"})
}
