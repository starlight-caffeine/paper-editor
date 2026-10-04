import { useState } from "preact/hooks";
import DocumentEditor from "../../components/DocumentEditor";
import Renderer from "../../components/Renderer/Renderer";
import compiler from '../../typst-compiler'

export default function () {
	const [document, setDocument] = useState("# Hello, World!\nLorem Ipsum dolor sit amet\n\n$\\sqrt{256}$");

	return <div className="grid grid-cols-2">
		<DocumentEditor contents={document} setContents={setDocument}></DocumentEditor>
		<Renderer buffer={document} compiler={compiler}></Renderer>
	</div>
}
