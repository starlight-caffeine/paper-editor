import { useEffect, useState } from "preact/hooks";
import { SvgCompileResult, TypstCompiler } from "typst-wasm";
import compile from "../../compile";

export default function Renderer(props: {
	buffer: string;
	compiler: TypstCompiler;
}) {
	const [svg, setSvg] = useState<SvgCompileResult>();
	const [error, setError] = useState<string>();

	useEffect(() => {
		const render = async () => {
			try {
				const result = await compile(props.buffer);
				setSvg(result);
			} catch(e) {
				console.log(e)
				setError("failed to compile")
			}
		};
		render();
	}, [props.buffer]);

	const pages = svg?.pages.map(p => <div dangerouslySetInnerHTML={{__html: p.output}}/>)

	return (
		<main className="max-h-[90dvh] border-gray-300 w-full">
			{error ? (
				<pre className="error">{error}</pre>
			) : svg ? (
				<div
					className="overflow-scroll w-full h-full"
					>
						{pages}
				</div>
			) : (
				<p>Compiling…</p>
			)}
		</main>
	);
}
