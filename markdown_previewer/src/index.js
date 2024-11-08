import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import * as marked from 'marked';
// import Prism from 'prismjs';
import './index.css';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript')
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
}

const Editor = ({text, changeHandler}) => {
  return (
    <div id="editor-container">
      <h2>Editor</h2>
      <textarea value={text} id="editor" onChange={changeHandler}/>
    </div>
  )
}

const Preview = ({content}) => {
  return (
    <div id="preview-container">
        <h2>Preview</h2>
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(content, { renderer: renderer })
        }} />
    </div>
  )
}


const App = () => {
  
  const [text, setText] = useState(`# Heading\n## Sub-heading\n[Link](https://example.com)\n\`Inline code\`\n\`\`\`\nCode block\n\`\`\`\n- List item\n> Blockquote\n![Image](https://via.placeholder.com/150)\n**Bold text**`);
  
  const changeHandler = (event) => {
    setText(event.target.value);
  }
  
  return (
    <div id="container">
      <h1>Markdown Previewer</h1>
      <Editor text={text} changeHandler={changeHandler} />
      <Preview content={text} />
    </div>
  )
};
      
      
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);