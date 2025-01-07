// RazorpayPaymentScreen.js
import React from "react";
import { WebView } from "react-native-webview";
import { ActivityIndicator } from "react-native";

const RazorpayPaymentScreen = ({ paymentUrl }) => {
  return (
    <WebView
      source={{ uri: paymentUrl }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
      onNavigationStateChange={(event) => {
        if (event.url.includes("success")) {
          // Handle success
          console.log("Payment Success");
        } else if (event.url.includes("failure")) {
          // Handle failure
          console.log("Payment Failure");
        }
      }}
    />
  );
};

export default RazorpayPaymentScreen;
