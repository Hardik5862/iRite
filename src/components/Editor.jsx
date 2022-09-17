import EditorJS from "@editorjs/editorjs";

import { EDITOR_JS_TOOLS } from "../configs/editor_config";

import styles from "./Editor.module.css";

const Editor = () => {
  const holder = "editor";

  const createEditor = (node) => {
    let editor;
    if (node) {
      editor = new EditorJS({
        data: { blocks: [] },
        holder,
        tools: EDITOR_JS_TOOLS,
      });
    }
  };

  return (
    <div className={styles.container} id={holder} ref={createEditor}></div>
  );
};
export default Editor;
