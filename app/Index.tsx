import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For icons
import { useRouter } from "expo-router"; // Hook for navigation

const Index = () => {
  const router = useRouter(); // Get the router instance

  return (
    <View className="flex-1 bg-blue-500 items-center justify-center px-6">
      {/* Logo / Icon */}
      <View className="bg-gray-100 rounded-3xl shadow-2xl mb-8">
        <Image
          className="w-36 h-36 rounded- mt-4"
          source={require("../assets/images/logo.png")}
        />
      </View>

      {/* Title */}
      <Text className="text-5xl font-bold text-white text-center mb-4">
        Welcome to Data Collector
      </Text>

      {/* Subtitle */}
      <Text className="text-xl text-gray-900 text-center px-4 mb-6">
      Go and enjoy our features for free and make your life easy with us.
      </Text>

      {/* Button */}
      <TouchableOpacity
        onPress={() => router.push("/FormScreen")}
        className="bg-[#B8FB00] rounded-full px-6 py-4 shadow-lg flex flex-row items-center"
      >
        <Text className="text-black text-lg font-semibold mr-3">
          Get Started
        </Text>
        <FontAwesome name="arrow-right" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Index;
