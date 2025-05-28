import { Editor } from "@monaco-editor/react"
import { useAtom, useAtomValue } from "jotai"
import { initVimMode } from "monaco-vim"
import { type ComponentProps, type RefObject, useEffect, useRef } from "react"
import { selectedLanguageAtom, writtenStuffAtom } from "./atoms"

interface MainEditorProps {
  vimSectionRef: RefObject<HTMLParagraphElement | null>
}

export default function MainEditor({
  vimSectionRef,
}: MainEditorProps) {
  const [value, setValue] = useAtom(writtenStuffAtom)
  const language = useAtomValue(selectedLanguageAtom)
  const editorRef = useRef<unknown>(null)
  const vimModeRef = useRef<{ dispose: () => void }>(null)

  const handleEditorDidMount: ComponentProps<typeof Editor>["onMount"] = editor => {
    editorRef.current = editor

    if (vimSectionRef.current) {
      editor.getDomNode()?.appendChild(vimSectionRef.current)
    }

    vimModeRef.current = initVimMode(editor, vimSectionRef.current)
  }

  useEffect(() => {
    return () => vimModeRef.current?.dispose()
  }, [])

  return (
    <>
      <Editor
        className="editor"
        language={language}
        defaultLanguage={language}
        defaultValue={value}
        theme="vs-dark"
        value={value}
        onChange={e => setValue(e ?? "")}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontFamily: "JetBrains Mono, sans-serif",
          cursorStyle: "line",
          "semanticHighlighting.enabled": "configuredByTheme",
        }}
      />
    </>
  )
}
