import { View } from "@react-three/drei";
import React from "react";

export default function ModelView({
  index,
  gsapType,
  groupRef,
  controlRef,
  setRotaionSize,
  size,
  item,
}) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-500 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    ></View>
  );
}
