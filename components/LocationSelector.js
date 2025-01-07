import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import axios from "axios"; // Import axios
import { styles } from "../utils/styles";
import Icon from "react-native-vector-icons/Ionicons";
// Remove dayjs import, now using native JS Date formatting
import GCityTextInput from "./customs/GCityTextInput";
import DateTimePicker from "@react-native-community/datetimepicker"; // Import DateTimePicker

export default function LocationSelector({
  handleDatePicker,
  selectedDate,
  setDestinationLocation,
  setPickupLocation,
}) {
  const [isFocused, setIsFocused] = useState(false); // To track if the calendar picker is open
  const [selection, setSelection] = useState(
    selectedDate ? new Date(selectedDate).toLocaleDateString() : "Select Date"
  );

  const [quickDates] = useState(["Today", "Tomorrow"]);
  const [pickupText, setPickupText] = useState("");
  const [destinationText, setDestinationText] = useState("");
  const [filteredPickupLocations, setFilteredPickupLocations] = useState([]);
  const [filteredDestinationLocations, setFilteredDestinationLocations] =
    useState([]);
  const [locations, setLocations] = useState([]);
  const [focusedField, setFocusedField] = useState(null); // Track which field is focused
  const [date, setDate] = useState(new Date()); // Initialize date state

  useEffect(() => {
    handleDatePicker(isFocused); // Notify parent if the date picker is focused
  }, [isFocused]);

  useEffect(() => {
    setSelection(
      selectedDate ? new Date(selectedDate).toLocaleDateString() : "Select Date"
    ); // Ensure that selection is a string
  }, [selectedDate]);

  useEffect(() => {
    // Fetch locations from backend
    const fetchLocations = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.67:4000/location/get-all-locations"
        );
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
    setFocusedField(null); // Close the dropdown after selection
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === "set") {
      const currentDate = selectedDate || date; // Use selected date or fallback to the current state
      setDate(currentDate); // Update the date state
      setSelection(currentDate.toLocaleDateString()); // Format the date to a string for display
    }
    setIsFocused(false); // Close the date picker regardless of user action
  };

  const handleQuickDateSelection = (quickDate) => {
    let newDate = new Date(date); // Create a copy of the current selected date

    if (quickDate === "Today") {
      newDate = new Date(); // Set to today's date
    } else if (quickDate === "Tomorrow") {
      newDate.setDate(newDate.getDate() + 1); // Set to tomorrow's date
    }

    const dateString = newDate.toLocaleDateString(); // Always convert to string
    setSelection(dateString); // Update the selection state
    setDate(newDate); // Update the date state
    setIsFocused(false); // Close the date picker after selection
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
          setFocusedField("pickup"); // Focus on the pickup input
        }}
      />
      {/* Show list of filtered pickup locations if "From" is focused */}
      {filteredPickupLocations.length > 0 && focusedField === "pickup" && (
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
          setFocusedField("destination"); // Focus on the destination input
        }}
      />
      {/* Show list of filtered destination locations if "To" is focused */}
      {filteredDestinationLocations.length > 0 &&
        focusedField === "destination" && (
          <ScrollView style={styles.cityList2}>
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
          <TouchableOpacity onPress={() => setIsFocused(true)}>
            <Text style={[styles.title]}>
              {selection} {/* Display the current selected date */}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Date Selection */}
        {quickDates.map((quickDate, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.buttonPrimary, styles.smallButtonPrimary]}
            onPress={() => handleQuickDateSelection(quickDate)}
          >
            <Text style={[styles.buttonTextPrimary, { fontSize: 12 }]}>
              {quickDate}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Date Picker - Only display when focused */}
      {isFocused && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}
