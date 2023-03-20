import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

/* eslint-disable  */

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [text, setText] = useState('');

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
    const { blocks } = convertToRaw(editorState.getCurrentContent());
    const text = blocks.reduce((acc, item) => {
      acc = acc + item.text;
      return acc;
    }, '');
    setText(text);
  };

  const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="editor-wrapper"
        editorClassName="px-12"
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
};

/* eslint-enable  */

export default MyEditor;
