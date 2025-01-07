import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import axios from "axios";
import { styles, width } from "../utils/styles";
import { SecondaryColor } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import TermsAndConditions from "../components/tnc/TermsAndConditions";
import PrimaryTextInput from "../components/buttons/PrimaryTextInput";


export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const handleCreateAccount = async () => {
    try {
      // Send a POST request to the signup API
      const response = await axios.post(
        "http://192.168.1.67:4000/auth/signup",
        {
          email,
          password,
          username,
        }
      );

      // Handle success
      if (response.data.success) {
        Alert.alert(
          "Account Created",
          "Your account has been created successfully. Please log in.",
          [{ text: "OK", onPress: () => navigation.navigate("SignIn") }]
        );
      } else {
        // Handle errors from the backend
        Alert.alert("Error", response.data.message || "Something went wrong.");
      }
    } catch (error) {
      // Handle network or server errors
      console.error("Error during account creation:", error);
      Alert.alert(
        "Error",
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingHorizontal: 0,
          marginHorizontal: 0,
          justifyContent: "space-between",
        },
      ]}
    >
      <Image
        source={require("../assets/hero.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.phone}>
        <Text style={styles.signintitle}>Create Account</Text>

        <Text style={styles.inputLabel}>Enter your username</Text>
        <PrimaryTextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          keyboardType="default"
          isIconInput={true}
          iconName="person-outline"
        />
        <Text style={styles.inputLabel}>Enter your Email ID</Text>
        <PrimaryTextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          isIconInput={true}
          iconName="mail-outline"
        />

        <Text style={styles.inputLabel}>Create Password</Text>
        <PrimaryTextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          isIconInput={true}
          iconName="lock-closed-outline"
        />

        <PrimaryButton
          style={{ width: width - 38 }}
          onClick={handleCreateAccount}
          title="Create Account"
        />
      </View>
      <View style={styles.bottomContainer}>
        <TermsAndConditions text="By signing up, you agree to our" />
      </View>
    </View>
  );
}
