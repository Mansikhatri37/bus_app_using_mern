import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Alert } from "react-native";
import { styles } from "../utils/styles";
import LocationSelector from "../components/LocationSelector";
import { Modal, Portal } from "react-native-paper";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs";
import { PrimaryColor } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Offers from "../components/Offers";
import RateUs from "../components/RateUs";
import Card from "../components/Card";
import PrimaryButton from "../components/buttons/PrimaryButton";
import axios from "axios"; // Import axios for HTTP requests
import { useDispatch } from "react-redux";
import { getBuses } from "../actions/busActions";

export default function Home() {
  const [date, setDate] = useState(dayjs());
  const [visible, setVisible] = useState(false);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Function to toggle the date picker modal visibility
  const toggleDatePicker = (isFocused) => {
    setVisible(isFocused);
  };

  // Function to hide the date picker modal
  const hideModal = () => {
    setVisible(false);
  };

  // Function to handle date change in the date picker modal
  const toggleVisibility = (selectedDate) => {
    setVisible(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  // Function to search for buses based on pickup and destination
  const searchBus = async () => {
    const trimmedPickup = pickup.trim().toLowerCase();
    const trimmedDestination = destination.trim().toLowerCase();

    console.log(`Pickup: '${trimmedPickup}'`);
    console.log(`Destination: '${trimmedDestination}'`);

    if (trimmedPickup !== "" && trimmedDestination !== "") {
      console.log(
        `Searching for route: ${trimmedPickup} to ${trimmedDestination}`
      );

      try {
        const response = await axios.get(
          "http://192.168.1.67:4000/buses/search",
          {
            params: {
              from: trimmedPickup,
              to: trimmedDestination,
            },
          }
        );

        console.log("response", response);

        if (response.data.success && response.data.buses.length > 0) {
          // Dispatch found buses to the store
          dispatch(getBuses(response.data.buses));
          // Navigate to the SearchBus screen with the buses data
          navigation.navigate("SearchBus", {
            busesOnRoute: response.data.buses,
          });
        } else {
          Alert.alert("No Buses Available on This Route");
        }
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
        Alert.alert("An error occurred while searching for buses.");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Bus tickets</Text>
        </View>

        <LocationSelector
          handleDatePicker={toggleDatePicker}
          selectedDate={date}
          setPickupLocation={setPickup}
          setDestinationLocation={setDestination}
        />

        <PrimaryButton
          onClick={searchBus}
          isIconButton={true}
          iconName="search"
          title="Search Buses"
        />

        <Offers />
        <Card />
        <RateUs />

        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainerStyle}
          >
            <Text style={[styles.headerTitleText, { textAlign: "center" }]}>
              Pick a date to travel
            </Text>
            <DateTimePicker
              mode="single"
              date={date}
              onChange={(params) => toggleVisibility(params.date)}
              selectedItemColor={PrimaryColor}
            />
          </Modal>
        </Portal>
      </ScrollView>
    </SafeAreaView>
  );
}
