import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { Brand, Screen1, Screen2, Screen3 } from "../assets";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const OnBordingScreen = () => {
  const navigation = useNavigation();
  const handleOnBordingComplete = async (e) => {
    console.log("Triggered: ", e);
    if (e === 2) {
      try {
        await AsyncStorage.setItem("@onbording_complete", true);
        navigation.navigate("Home");
      } catch (error) {
        console.log("something went wrong", error);
      }
    }
  };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Swiper onIndexChanged={handleOnBordingComplete}>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </Swiper>
    </View>
  );
};

export const ScreenOne = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white relative">
      <Image source={Screen1} className="w-full h-full" resizeMode="cover" />
      <View className="w-56 h-auto flex items-center justify-center p-2 absolute left-4 top-36">
        <Image source={Brand} className="w-32 h-32" resizeMode="contain" />
        <Text className="text-sl font-semibold text-[#555]">
          Enhance your beauty
        </Text>
      </View>
    </View>
  );
};

export const ScreenTwo = () => {
  return (
    <View className="flex-1 space-y-6 items-center justify-start ">
      <Image source={Screen2} className="w-full h-[65%]" resizeMode="cover" />
      <View className="flex items-center justify-center px-4 space-y-6">
        <Text className="text-2xl tracking-wider text-[#555]">
          Find your Beauty Products
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Beauty begins the moment you try to be yourself
        </Text>
      </View>
    </View>
  );
};

export const ScreenThree = () => {
  return (
    <View className="flex-1 space-y-6 items-center justify-start ">
      <Image source={Screen3} className="w-full h-[65%]" resizeMode="cover" />
      <View className="flex items-center justify-center px-4 space-y-6">
        <Text className="text-2xl tracking-wider text-[#555]">
          Find your Beauty Products
        </Text>
        <Text className="text-xl tracking-wider text-[#777] text-center">
          Beauty begins the moment you try to be yourself
        </Text>
      </View>
    </View>
  );
};

export default OnBordingScreen;
