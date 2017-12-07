
import React, { Component } from 'react';
import ImageIcon from '../../components/ImageIcon';

//do the arrays need to live inside the const declarations? reset for each round?

const Optionset = (array) => {
  const ImageOptionsArray = props.values.map((value, i) => {
    return (
      <ImageIcon
        src={String}
        id={String}
        monthWord={String} 
        dayWord={String} 
        baseYearWord={String}
        endYearWord={String}  
        orderPlacement={Number} 
      />
    )
  });
  let ImageIconCollection = <div className="optionset">{ImageOptionsArray}</div>
  return ImageIconCollection;
};

export default ImageIconCollection;