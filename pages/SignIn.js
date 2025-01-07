import React, { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import axios from "axios";
import { styles, width } from "../utils/styles";
import { SecondaryColor } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import GUselessOr from "../components/GUselessOr";
import TermsAndConditions from "../components/tnc/TermsAndConditions";
import PrimaryTextInput from "../components/buttons/PrimaryTextInput";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../actions/userActions"; // Import the setUserDetails action

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch(); // Get dispatch function from Redux

  const handleSignIn = async () => {
    // try {
    //   // Make an HTTP POST request to your backend's SignIn API
    //   const response = await axios.post(
    //     "http://192.168.1.67:4000/auth/signin",
    //     {
    //       email,
    //       password,
    //     }
    //   );

    //   // If sign-in is successful
    //   if (response.data.success) {
    //     console.log("Sign-in successful:", response.data.user);

    //     // Dispatch the action to store user details in the Redux store
    //     dispatch(setUserDetails(response.data.user));

    //     // Navigate to the main page
    //     navigation.navigate("Main");
    //   } else {
    //     // Show error message from the backend
    //     Alert.alert(
    //       "Sign-In Failed",
    //       response.data.message || "Invalid credentials."
    //     );
    //   }
    // } catch (error) {
    //   // Handle network or server errors
    //   console.error("Error during sign-in:", error);
    //   Alert.alert(
    //     "Sign-In Error",
    //     error.response?.data?.message ||
    //       "An error occurred during sign-in. Please try again."
    //   );
    // }
    navigation.navigate("Main");
  };

  const handleCreateAccount = () => {
    navigation.navigate("createAccount");
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
        <Text style={styles.signintitle}>Sign In</Text>

        <Text style={styles.inputLabel}>Enter your Email ID</Text>
        <PrimaryTextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          isIconInput={true}
          iconName="mail-outline"
        />

        <Text style={styles.inputLabel}>Enter your Password</Text>
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
          onClick={handleSignIn}
          title="SIGN IN"
        />
        <GUselessOr />
        <PrimaryButton
          style={{ backgroundColor: SecondaryColor, width: width - 38 }}
          title="Create Account"
          onClick={handleCreateAccount}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TermsAndConditions text="By logging in, you agree to our" />
      </View>
    </View>
  );
}
