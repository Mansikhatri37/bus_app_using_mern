import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { styles, width } from "../utils/styles";
import { SecondaryColor } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { authFromMobile } from "../actions/userActions";
import GPhoneInput from "../components/GPhoneInput";
import GUselessOr from "../components/GUselessOr";
import TermsAndConditions from "../components/tnc/TermsAndConditions";

export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  // const otpSent = useSelector((state) => state.user.otpSent);

  // const sendOTP = () => {
  //   dispatch(authFromMobile(phoneNumber));
  // };

  // useEffect(() => {
  //   if (otpSent) {
  //     navigation.navigate("verification");
  //   }
  // }, [otpSent, navigation]);

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
        <Text style={styles.titleSignIn}>Create Account or Sign in</Text>
        <GPhoneInput onChangeText={setPhoneNumber} />
        <PrimaryButton
          style={{ width: width - 38 }}
          onClick={()=> navigation.navigate("verification")}
          title="GET OTP"
        />
        <GUselessOr />
        <PrimaryButton
          style={{ backgroundColor: SecondaryColor, width: width - 38 }}
          title="CONTINUE WITH GOOGLE"
          onClick={() => navigation.navigate("verification")}
          isIconButton={true}
          iconName="logo-google"
        />
      </View>
      <View style={styles.bottomContainer}>
        <TermsAndConditions text="By logging in, you agree to our" />
      </View>
    </View>
  );
}
