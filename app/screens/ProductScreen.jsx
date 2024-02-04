import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProductScreen = ({ route }) => {
  const { _id } = route.params;

  const feeds = useSelector((state) => state.feeds);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (feeds) {
      setData(feeds?.feeds.filter((item) => item._id === _id)[0]);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, []);
  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
