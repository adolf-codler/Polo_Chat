import BUT from "@/components/buttton";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const nig=()=>{
    console.log("tu")
    console.log("chakka")
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
        <TouchableOpacity onPress={nig} activeOpacity={0.7} style={{backgroundColor:"blue"}}><Text>BHodsd</Text></TouchableOpacity>
      <BUT content="nigga"></BUT>
      <BUT content="niggas"></BUT>
      <BUT content="niggass"></BUT>
      <BUT content="niggasssssss"></BUT>
      <BUT content="niggasss"></BUT>
      <BUT content="niggassssssss"></BUT>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
