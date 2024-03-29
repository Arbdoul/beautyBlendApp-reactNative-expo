import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import FeedDetails from "./FeedDetails";

const Feeds = ({ feeds }) => {
  return (
    <View className="flex-row flex-wrap items-center justify-center">
      {feeds?.length > 0 ? (
        <>
          {feeds.map((item, i) => (
            <FeedDetails key={i} data={item} />
          ))}
        </>
      ) : (
        <View className="w-full h-64 items-center justify-center">
          <ActivityIndicator size={"large"} color={"teal"} />
          <Text> no Data</Text>
        </View>
      )}
    </View>
  );
};

export default Feeds;

const styles = StyleSheet.create({});
