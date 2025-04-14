import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextEditorMenuBar from "./text-editor-menu-bar";

type TextEditorProps = {
  onChange: (content: string) => void;
  initialContent?: string;
};

const ReachTextEditor = ({ onChange, initialContent }: TextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-5",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-5",
          },
        },
      }),
      Underline,
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "min-h-[150px] cursor-text text-white border p-5 prose prose-invert focus:outline-none",
      },
    },
    immediatelyRender: false,
  });
  return (
    <div>
      <div className="flex items-center pl-2 pt-2 border">
        <TextEditorMenuBar editor={editor} />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default ReachTextEditor;
