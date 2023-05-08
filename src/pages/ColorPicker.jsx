import React, { useState } from "react";
import { Header } from "../components";
import { SketchPicker } from "react-color";
import { SwatchesPicker } from "react-color";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("#ff6");
  const handleColor = (color) => {
    setCurrentColor(color);
  };
  const change = (args) => {
    document.getElementById('preview').style.backgroundColor =
      args.currentValue.hex;
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="ColorPicker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4"> Inline Pallete</p>
            <SketchPicker id='inline-pallete' color={currentColor} onChangeComplete={change} />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4"> Inline Picker</p>
            <SwatchesPicker id='inline-pallete' color={"#fff"} onChangeComplete={change} />
          </div>  
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
