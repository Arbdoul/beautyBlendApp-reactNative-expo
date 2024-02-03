import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Screen3 } from "../assets";
import { FontAwesome } from "@expo/vector-icons";
import { fetchFeeds } from "../sanity";
import { useDispatch, useSelector } from "react-redux";
import { SET_FEEDS } from "../context/actions/feedsAction";
import { Feeds } from "../components";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const feeds = useSelector((state) => state.feeds);

  const handleSearch = (text) => {
    setSearchTerm(text);
  };

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchFeeds().then((res) => {
        // console.log(res);
        dispatch(SET_FEEDS(res));
        setInterval(() => {
          setIsLoading(false);
        }, 2000);
      });
      console.log("Feeds from store: ", feeds);
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  }, []);
  return (
    <SafeAreaView className="flex-1 items-center justify-start bg-[#ebeaef]">
      <View className="w-full flex-row items-center justify-between px-4 py-2">
        <MaterialIcons name="chevron-left" size={24} color="black" />

        <Image
          source={Screen3}
          className="w-12 h-12 rounded-xl"
          resizeMode="cover"
        />
      </View>

      <View className="flex-row items-center justify-between px-4 py-2 w-full space-x-6">
        <View className="px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
          <MaterialIcons name="search" size={24} color="#7f7f7f" />
          <TextInput
            className="text-base font-semibold text-[#555] flex-1 py-1 mt-1"
            placeholder="search here"
            value={searchTerm}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
          <FontAwesome name="filter" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>

      {/* scrollable container */}
      <ScrollView className="flex-11 w-full">
        {isLoading ? (
          <View className="flex-1 h-80 items-center justify-center">
            <ActivityIndicator size={"large"} color={"teal"} />
          </View>
        ) : (
          <>
            <Feeds feeds={feeds.feeds} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
