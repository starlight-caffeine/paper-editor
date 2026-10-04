import {
	headingsPlugin,
	MDXEditor,
	toolbarPlugin,
	UndoRedo,
	BoldItalicUnderlineToggles,
	BlockTypeSelect,
	codeMirrorPlugin,
	codeBlockPlugin,
	markdownShortcutPlugin,
	tablePlugin,
	InsertTable,
	linkPlugin,
	CreateLink,
	imagePlugin,
	InsertCodeBlock,
	quotePlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { Dispatch, StateUpdater, useCallback } from "preact/hooks";
import "./preview-style.css";

export default function DocumentEditor(props: {
	contents: string;
	setContents: Dispatch<StateUpdater<string>>;
}) {
	const onChange = useCallback((val: string, _: any) => {
		console.log("Updated val to ", val);
		props.setContents(val);
	}, []);

	return (
		<div className="flex w-full max-h-[90dvh] overflow-scroll px-2">
			<MDXEditor
				markdown={props.contents}
				onChange={onChange}
				contentEditableClassName="prose"
				className="w-full"
				plugins={[
					headingsPlugin(),
					codeBlockPlugin({ defaultCodeBlockLanguage: "typst" }),
					codeMirrorPlugin(),
					markdownShortcutPlugin(),
					tablePlugin(),
					quotePlugin(),
					imagePlugin(),
					linkPlugin({ disableAutoLink: false }),
					toolbarPlugin({
						toolbarClassName: "toolbar",
						toolbarContents: () => (
							<>
								<UndoRedo />
								<BoldItalicUnderlineToggles />
								<BlockTypeSelect />
								<InsertCodeBlock />
								<InsertTable />
								<CreateLink />
							</>
						),
					}),
				]}
			></MDXEditor>
		</div>
	);
}
