import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { database } from "../config/firebaseConfig"; // Import Firebase Database
import { ref, push, set } from "firebase/database";


const FormScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone1: "",
    phone2: "",
    birthday: "",
    email: "",
    address: "",
    rating: 0,
  });

  // Handle Input Changes
  const handleChange = (key: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  // Handle Star Rating
  const handleRating = (stars: number) => {
    setFormData((prevData) => ({ ...prevData, rating: stars }));
  };

  // Submit Form Data to Firebase
  const handleSubmit = () => {
    const usersRef = ref(database, "users"); // Reference to "users" in Firebase
    const newUserRef = push(usersRef); // Auto-generate ID
    set(newUserRef, formData)
      .then(() => Alert.alert("Success", "Data Submitted Successfully!"))
      .catch((error) => Alert.alert("Error", error.message));
  };

  return (
    <View className="flex-1 bg-gray-100 p-6">
      <View className="bg-blue-500 rounded-lg p-4">
        <Text className="text-white text-2xl font-bold">
          Welcome,{"\n"}You Are Valuable to Us
        </Text>
        <Text className="text-white text-sm mt-1">
          We’d like to ask you for some additional information
        </Text>
        <FontAwesome
          name="paypal"
          size={32}
          color="white"
          style={{ position: "absolute", top: 10, right: 10 }}
        />
      </View>

      <View className="mt-6">
        {/* Name Input */}
        <Text className="text-gray-700 mb-1">Name</Text>
        <TextInput
          placeholder="Type here"
          value={formData.name}
          onChangeText={(text) => handleChange("name", text)}
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />

        {/* Phone Numbers */}
        <Text className="text-gray-700 mb-1">Phone Numbers</Text>
        <TextInput
          placeholder="Type mobile number"
          value={formData.phone1}
          onChangeText={(text) => handleChange("phone1", text)}
          keyboardType="phone-pad"
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />
        <TextInput
          placeholder="Type another number"
          value={formData.phone2}
          onChangeText={(text) => handleChange("phone2", text)}
          keyboardType="phone-pad"
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />

        {/* Birthday */}
        <Text className="text-gray-700 mb-1">Birthday</Text>
        <TextInput
          placeholder="YYYY-MM-DD"
          value={formData.birthday}
          onChangeText={(text) => handleChange("birthday", text)}
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />

        {/* Email */}
        <Text className="text-gray-700 mb-1">E-mail</Text>
        <TextInput
          placeholder="ex: myemail@example.com"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
          keyboardType="email-address"
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />

        {/* Address */}
        <Text className="text-gray-700 mb-1">Address</Text>
        <TextInput
          placeholder="Type here"
          value={formData.address}
          onChangeText={(text) => handleChange("address", text)}
          className="border border-gray-300 rounded-lg p-2 mb-4"
        />

        {/* Star Rating */}
        <Text className="text-gray-700 mb-2">
          How would you rate our service?
        </Text>
        <View className="flex-row mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleRating(star)}>
              <FontAwesome
                name={formData.rating >= star ? "star" : "star-o"}
                size={24}
                color={formData.rating >= star ? "gold" : "gray"}
                style={{ marginRight: 8 }}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg items-center"
          onPress={handleSubmit}
        >
          <Text className="text-white text-lg font-bold">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormScreen;
