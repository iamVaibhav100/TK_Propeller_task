import React, { useState } from "react";
import Select from "react-select";
import ColorMap from "./ColorMap";

export default function DropDown() {
    // DropDown options with states code for color mapping
  var options = [
    {
      label: "1",
      code: "NJ",
    },
    {
      label: "2",
      code: "NY",
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (option) => {
    setSelectedOption(option.code);
  };

  return (
    <div>
      <Select options={options} onChange={handleChange} />
      <ColorMap selectedOption={selectedOption} />
    </div>
  );
}
