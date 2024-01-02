import { Prism } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface PropsCodeHighlighter {
  code: string
}


const CodeHighlighter =  (obj: PropsCodeHighlighter) => {
  return (
    <Prism language="javascript" style={dracula}>
      {obj.code}
    </Prism>
  )
}

function ColoredObject(props: {code:string}) {
  
  return (
    <div>
      <h2 id='final-code'>Final Code</h2>
      <CodeHighlighter code={props.code} />
    </div>
  )
}

export default ColoredObject