import { Editor } from '@monaco-editor/react'
import { useState } from 'react'

export default function App() {
  const [value, setValue] = useState<string>()

  return (
    <>
      <Editor
        className='editor'
        height="90vh"
        defaultLanguage="typescript"
        defaultValue="// some comment"
        theme='vs-dark'
        value={value}
        onChange={e => setValue(e)}
        options={{
          minimap: { enabled: false },
          fontFamily: "JetBrains Mono, sans-serif",
          cursorStyle: "block",
          "semanticHighlighting.enabled": "configuredByTheme",
        }}
      />
    </>
  )
}
