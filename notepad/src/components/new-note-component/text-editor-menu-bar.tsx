import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiCodeSSlashLine,
  RiListOrdered2,
} from "react-icons/ri";
import { Editor, isActive } from "@tiptap/react";
import { AiOutlineRedo, AiOutlineUndo } from "react-icons/ai";
import { BsTypeUnderline } from "react-icons/bs";
import { IoListOutline } from "react-icons/io5";

const Button = ({
  onClick,
  isActive,
  disabled,
  children,
}: {
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`p-2 cursor-pointer ${
      isActive ? "bg-violet-500 text-white rounded-md" : ""
    }`}
  >
    {children}
  </button>
);

const TextEditorMenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  const buttons = [
    {
      icon: <RiBold className="size-5" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive("bold"),
    },
    {
      icon: <BsTypeUnderline className="size-5" />,
      onClick: () => editor.chain().focus().toggleUnderline().run(),
      isActive: editor.isActive("underline"),
    },
    {
      icon: <RiItalic className="size-5" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive("italic"),
      disabled: !editor.can().chain().focus().toggleItalic().run(),
    },
    {
      icon: <RiStrikethrough className="size-5" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive("strike"),
      disabled: !editor.can().chain().focus().toggleStrike().run(),
    },
    {
      icon: <RiCodeSSlashLine className="size-5" />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive("code"),
      disabled: !editor.can().chain().focus().toggleCode().run(),
    },
    {
      icon: <IoListOutline className="size-5" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive("bulletList"),
    },
    {
      icon: <RiListOrdered2 className="size-5" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive("orderedList"),
      disabled: !editor.can().chain().focus().toggleOrderedList().run(),
    },
    {
      icon: <AiOutlineUndo className="size-5" />,
      onClick: () => editor.chain().focus().undo().run(),
      isActive: editor.isActive("undo"),
      disabled: !editor.can().chain().focus().undo().run(),
    },
    {
      icon: <AiOutlineRedo className="size-5" />,
      onClick: () => editor.chain().focus().redo().run(),
      isActive: editor.isActive("redo"),
      disabled: !editor.can().chain().focus().redo().run(),
    },
  ];

  return (
    <div className="mb-2 flex space-x-2 text-white">
      <select
        className="h-9 px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-md shadow-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors hover:bg-gray-700"
        onChange={(event) => {
          const heading = event.target.value;
          if (heading === "paragraph") {
            editor.chain().focus().setParagraph().run();
          } else if (heading === "h1") {
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          } else if (heading === "h2") {
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          } else if (heading === "h3") {
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }
        }}
        value={
          editor.isActive("heading", { level: 1 })
            ? "h1"
            : editor.isActive("heading", { level: 2 })
            ? "h2"
            : editor.isActive("heading", { level: 3 })
            ? "h3"
            : "paragraph"
        }
      >
        <option value="paragraph" className="bg-gray-800 text-gray-200">
          Normal text
        </option>
        <option value="h1" className="bg-gray-800 text-gray-200">
          Heading 1
        </option>
        <option value="h2" className="bg-gray-800 text-gray-200">
          Heading 2
        </option>
        <option value="h3" className="bg-gray-800 text-gray-200">
          Heading 3
        </option>
      </select>
      {buttons.map(({ icon, onClick, isActive, disabled }, index) => (
        <Button
          key={index}
          onClick={onClick}
          isActive={isActive}
          disabled={disabled}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
};

export default TextEditorMenuBar;
