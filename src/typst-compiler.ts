import { createTypstCompiler } from "typst-wasm";
import { createWebWorker } from "typst-wasm/worker/browser";
import workerUrl from "typst-wasm/worker/web-worker?worker&url";
import coreUrl from "typst-wasm/engine/engine.core.wasm?url";
import core2Url from "typst-wasm/engine/engine.core2.wasm?url";
import core3Url from "typst-wasm/engine/engine.core3.wasm?url";
import regularFontUrl from "@typst-wasm/fonts/NewCMMath-Regular.otf?url";
import textFontUrl from "@typst-wasm/fonts/LibertinusSerif-Regular.otf?url";
import textBoldFontUrl from "@typst-wasm/fonts/LibertinusSerif-Bold.otf?url";
import textItalicFontUrl from "@typst-wasm/fonts/LibertinusSerif-Italic.otf?url";

const compiler = async () => {
	const c = await createTypstCompiler({
		backend: "auto",
		worker: () => createWebWorker(workerUrl),
		coreModules: {
			"engine.core.wasm": WebAssembly.compileStreaming(fetch(coreUrl)),
			"engine.core2.wasm": WebAssembly.compileStreaming(fetch(core2Url)),
			"engine.core3.wasm": WebAssembly.compileStreaming(fetch(core3Url)),
		},
	});

	await c.addFonts(
		fetch(regularFontUrl).then((res) =>
			res.arrayBuffer().then((res) => new Uint8Array(res)),
		),
		fetch(textFontUrl).then((res) =>
			res.arrayBuffer().then((res) => new Uint8Array(res)),
		),
		fetch(textItalicFontUrl).then((res) =>
			res.arrayBuffer().then((res) => new Uint8Array(res)),
		),
		fetch(textBoldFontUrl).then((res) =>
			res.arrayBuffer().then((res) => new Uint8Array(res)),
		),
	)

	return c;

};

export default await compiler()
