import { useState } from "react";
import Card from "./card";
import { FixedSizeList  } from "react-window"; 

export default function SecondPage({dataList}){
  
return (
  <FixedSizeList
    height={window.innerHeight}
    width={window.innerWidth - 20}
    itemCount={dataList.length}
    itemSize={50}
  >
    {({index, style }) => {
      return <Card style = {style} item = {dataList[index]} />
    }
     }
  </FixedSizeList>
);      
    
}