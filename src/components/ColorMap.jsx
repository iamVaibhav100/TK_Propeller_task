import React from 'react'
import USAMap from "react-usa-map";

const ColorMap = ({selectedOption}) => {

    //   Mandatory function to display the map
  const mapHandler = (event) => {
    console.log(event.target.dataset.name);
  };

  //   Highlighting the selected state on the map
  const statesCustomConfig = () => {
    return {
      [selectedOption]: {
        fill: "#CC0000",
      },
    };
  };

  return (
    <div>
        <USAMap customize={statesCustomConfig()} onClick={mapHandler} />
    </div>
  )
}

export default ColorMap