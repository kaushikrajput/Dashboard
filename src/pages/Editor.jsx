import React, { useState } from "react";
import { Header } from "../components";
import { Editor } from "@tinymce/tinymce-react";

const Editors = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Editor" />
      <Editor textareaName='content'/>
    </div>
  );
};

export default Editors;
