import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios"; // Import axios
import { styles } from "../utils/styles";
import Icon from "react-native-vector-icons/Ionicons";
import dayjs from "dayjs";
import GCityTextInput from "./customs/GCityTextInput";

export default function LocationSelector({
  handleDatePicker,
  selectedDate,
  setDestinationLocation,
  setPickupLocation,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [selection, setSelection] = useState(
    dayjs(selectedDate).format("ddd,D MMM")
  );
  const [quickDates] = useState(["Today", "Tomorrow"]);
  const [pickupText, setPickupText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  const [filteredPickupLocations, setFilteredPickupLocations] = useState([]);
  const [filteredDestinationLocations, setFilteredDestinationLocations] =
    useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    handleDatePicker(isFocused);
  }, [isFocused, selectedDate]);

  useEffect(() => {
    setSelection(dayjs(selectedDate).format("ddd,D MMM"));
  }, [selectedDate]);

  useEffect(() => {
    // Fetch locations from backend
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.67:4000/location/get-all-locations"
        );
        console.log("Fetched data:", response.data);
        setLocations(response.data.locations || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  // Filter cities based on pickup text
  useEffect(() => {
    if (pickupText) {
      const results = locations.filter((location) =>
        location.nameLocation.toLowerCase().includes(pickupText.toLowerCase())
      );
      setFilteredPickupLocations(results);
    } else {
      setFilteredPickupLocations([]);
    }
  }, [pickupText, locations]);

  // Filter cities based on destination text
  useEffect(() => {
    if (destinationText) {
      const results = locations.filter((location) =>
        location.nameLocation
          .toLowerCase()
          .includes(destinationText.toLowerCase())
      );
      setFilteredDestinationLocations(results);
    } else {
      setFilteredDestinationLocations([]);
    }
  }, [destinationText, locations]);

  const handleCitySelect = (city, isPickup) => {
    if (isPickup) {
      setPickupText(city); // Set input field with selected city
      setPickupLocation(city); // Update parent component state
      setTimeout(() => setFilteredPickupLocations([]), 0);
    } else {
      setDestinationText(city); // Set input field with selected city
      setDestinationLocation(city); // Update parent component state
      setTimeout(() => setFilteredDestinationLocations([]), 0);
    }
  };

  return (
    <View style={[styles.locationContainer]}>
      {/* Pickup Location Input */}
      <GCityTextInput
        label="From"
        icon="bus"
        placeholder="Delhi"
        value={pickupText} // Pass value prop
        onChangeText={(text) => {
          setPickupText(text);
        }}
      />
      {/* Show list of filtered pickup locations */}
      {filteredPickupLocations.length > 0 && (
        <ScrollView style={styles.cityList}>
          {filteredPickupLocations.map((item, index) => (
            <TouchableOpacity
              key={item.id || index} // Fallback to index if id is missing
              onPress={() => handleCitySelect(item.nameLocation, true)}
            >
              <Text style={styles.cityItem}>{item.nameLocation}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* Destination Location Input */}
      <GCityTextInput
        label="To"
        icon="bus"
        placeholder="Pune"
        value={destinationText} // Pass value prop
        onChangeText={(text) => {
          setDestinationText(text);
        }}
      />
      {/* Show list of filtered destination locations */}
      {filteredDestinationLocations.length > 0 && (
        <ScrollView style={styles.cityList}>
          {filteredDestinationLocations.map((item, index) => (
            <TouchableOpacity
              key={item.id || index} // Fallback to index if id is missing
              onPress={() => handleCitySelect(item.nameLocation, false)}
            >
              <Text style={styles.cityItem}>{item.nameLocation}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      <View style={[styles.pickDropSelector, { borderBottomWidth: 0 }]}>
        <Icon name="calendar-number" size={28} color="#777" />
        <View style={{ marginHorizontal: 10 }}>
          <Text style={styles.labelStyle}>Date of Journey</Text>
          <Text style={[styles.title]} onPress={() => setIsFocused(!isFocused)}>
            {selection}
          </Text>
        </View>
        {/* Quick Date Selection */}
        {quickDates.map((quickDate, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.buttonPrimary, styles.smallButtonPrimary]}
          >
            <Text style={[styles.buttonTextPrimary, { fontSize: 12 }]}>
              {quickDate}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
