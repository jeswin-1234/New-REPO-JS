import { StyleSheet, Text, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import CommonService from "../../service/index";
import React, { useEffect, useState } from "react";

const Demo = () => {
  const [value, setValue] = useState("")
  useEffect(() => {
    mutate();
  }, []);

  const {data, mutate } = useMutation({
    mutationFn: CommonService.getName,
    onSuccess: (data) => {
      setValue(data?.data);
    },
    onError:(error)=>{
        console.log("error",error);
    }
  });
  // console.log("from api response",data);
  
  return (
    <View>
      <Text>{value}</Text>
    </View>
  );
};

export default Demo;

const styles = StyleSheet.create({});
