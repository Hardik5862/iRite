import EditorJS from "@editorjs/editorjs";
import { useId } from "react";
import { EDITOR_JS_TOOLS } from "../configs/editor_config";

const Editor = () => {
  const holder = useId();

  return (
    <div
      id={holder}
      ref={(node) => {
        let editor;
        if (node) {
          editor = new EditorJS({
            data: { blocks: [] },
            holder,
            tools: EDITOR_JS_TOOLS,
          });
        } else {
          if (editor) {
            editor.destroy();
          }
        }
      }}
    ></div>
  );
};
export default Editor;
