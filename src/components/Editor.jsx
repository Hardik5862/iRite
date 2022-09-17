import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";

import { EDITOR_JS_TOOLS } from "../configs/editor_config";

import styles from "./Editor.module.css";

const Editor = () => {
  const holder = "editor";
  const editorInstance = useRef(null);

  const createEditor = (node) => {
    if (node) {
      let editor = new EditorJS({
        data: { blocks: [] },
        holder,
        tools: EDITOR_JS_TOOLS,
      });
      editorInstance.current = editor;
    }
  };

  useEffect(() => {
    return () => {
      if (editorInstance.current && editorInstance.current.destroy) {
        editorInstance.current.destroy();
      }
    };
  });

  const handleSave = async () => {
    if (editorInstance.current && editorInstance.current.save) {
      const data = await editorInstance.current.save();
      console.log(data);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <div className={styles.container} id={holder} ref={createEditor}></div>
    </>
  );
};
export default Editor;
