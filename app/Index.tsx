import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For icons
import { useRouter } from "expo-router"; // Hook for navigation

const Index = () => {
  const router = useRouter(); // Get the router instance

  return (
    <View className="flex-1 bg-gradient-to-b from-blue-600 to-blue-400 items-center justify-center px-6">
      {/* Icon container */}
      <View className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <Text className="text-6xl text-gray-800">📷</Text>
      </View>

      {/* Title and description */}
      <Text className="text-3xl font-semibold text-black text-center mb-2">
        Welcome to Our App
      </Text>
      <Text className="text-black text-center mb-8">
        Experience the best features, designed to make your life easier and more enjoyable. 
        Join us and get started today!
      </Text>

      {/* Button */}
      <TouchableOpacity
        onPress={() => router.push("/FormScreen")} // Navigate to the FormScreen page
        className="bg-lime-500 hover:bg-lime-600 rounded-full p-4 shadow-lg flex justify-center items-center"
      >
        <FontAwesome name="arrow-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Index;
