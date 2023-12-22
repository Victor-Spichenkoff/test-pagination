// components/CodeEditor.tsx
import React from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/ace';

interface CodeEditorProps {
  code: string
  onChange: (newCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="dracula"
      value={code}
      onChange={onChange}
      name="code-editor"
      className='code-editor'
      // editorProps={{ $blockScrolling: true }}
    />
  );
};


// function CodeEditor() {
//   return <div>nhe</div>
// }
export default CodeEditor
