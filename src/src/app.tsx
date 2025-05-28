import { useAtom } from "jotai"
import { useRef } from "react"
import MainEditor from "./MainEditor"
import { selectedLanguageAtom } from "./atoms"

export default function App() {
  const vimSectionRef = useRef<HTMLParagraphElement>(null)
  const [language, setLanguage] = useAtom(selectedLanguageAtom)

  return (
    <div className="app">
      <div className="top-bar">
        <strong>CodePad</strong>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="plaintext">Plain Text</option>
          <option value="aspnetcorerazor">ASP NET Razor</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
          <option value="css">CSS</option>
          <option value="html">HTML</option>
          <option value="http">HTTP</option>
          <option value="javascript">JS</option>
          <option value="javascriptreact">JSX</option>
          <option value="json">JSON</option>
          <option value="markdown">Markdown</option>
          <option value="python">Python</option>
          <option value="razor">Razor</option>
          <option value="ruby">Ruby</option>
          <option value="rust">Rust</option>
          <option value="scss">SCSS</option>
          <option value="shellscript">Shell Script</option>
          <option value="typescript">TS</option>
          <option value="typescriptreact">TSX</option>
          <option value="xml">XML</option>
          <option value="yaml">YAML</option>
        </select>
      </div>

      <MainEditor vimSectionRef={vimSectionRef} language={language} />

      <p className="vim-section" ref={vimSectionRef} />
    </div>
  )
}
