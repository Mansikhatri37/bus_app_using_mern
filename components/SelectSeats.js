import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { styles } from "../utils/styles";
import SeatLayout from "./SeatLayout/SeatLayout";
import { SeatMaps } from "../faker/busmap";
// import RBSheet from "react-native-raw-bottom-sheet";
import PrimaryButton from "./buttons/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { SecondaryColor } from "../utils/colors";

const knowYourSeat = [
  {
    id: 1,
    seat_type: 1,
    seater_description: "Some random information",
    sleeper_description: "Some random text information",
  },
  {
    id: 2,
    seat_type: 2,
    seater_description: "lorem ipsum",
    sleeper_description: "sit dolor amet",
  },
  {
    id: 3,
    seat_type: 3,
    seater_description: "Some random information",
    sleeper_description: "lorem ipsum sit dolor amet",
  },
  {
    id: 4,
    seat_type: 4,
    seater_description: "Some random information",
    sleeper_description: "Some random text information",
  },
];

const SEAT_PRICE = 300; // Define the price for each seat

export default function SelectSeats({ route }) {
  const { bus_id } = route.params;
  const [lowerSeatMap, setLowerSeatMap] = useState([]);
  const [upperSeatMap, setUpperSeatMap] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0); // State for total price

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      const seatId = seat.id; // or another format if necessary
      const newSelectedSeats = prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter((s) => s !== seatId)
        : [...prevSelectedSeats, seatId];

      // Update the total price based on the number of selected seats
      setTotalPrice(newSelectedSeats.length * SEAT_PRICE);

      return newSelectedSeats;
    });
  };

  // const refBottomSheet = useRef();
  const navigation = useNavigation();

  useEffect(() => {
    fetchSeatLayout(bus_id);
  }, [bus_id]);

  // useEffect(() => {
  //   refBottomSheet.current.open();
  // }, []);

  const fetchSeatLayout = (bus_id) => {
    const seatMap = SeatMaps.find((map) => map.bus_id === 1);

    if (seatMap) {
      const { lowerDeck, upperDeck } = seatMap;
      setLowerSeatMap(lowerDeck || []); // Set empty array if undefined
      setUpperSeatMap(upperDeck || []); // Set empty array if undefined
    } else {
      console.error(`Seat map not found for bus_id: ${bus_id}`);
      setLowerSeatMap([]); // Set empty array if no seat map is found
      setUpperSeatMap([]); // Set empty array if no seat map is found
    }
  };

  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: 0 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal showsVerticalScrollIndicator={false}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <SeatLayout
              isDoubleDecker={true}
              driverPosition="right"
              seatMap={lowerSeatMap}
              isSleeper={true}
              onSeatSelect={handleSeatSelect}
              selectedSeats={selectedSeats}
            />
            <SeatLayout
              isDoubleDecker={true}
              deckPosition={1}
              driverPosition="right"
              seatMap={upperSeatMap}
              isSleeper={true}
              onSeatSelect={handleSeatSelect}
              selectedSeats={selectedSeats}
            />
          </View>
        </ScrollView>

        {/* <View style={{ paddingHorizontal: 16, marginVertical: 12 }}>
          <Text style={styles.headerTitleText}>Know your seat type</Text>
          <View style={styles.roundedTable}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableHeading, { width: "20%" }]}>Type</Text>
              <Text
                style={[
                  styles.tableDivision,
                  { width: "40%", fontWeight: "600", textAlign: "center" },
                ]}
              >
                Seater
              </Text>
              <Text
                style={[
                  styles.tableDivision,
                  { width: "40%", fontWeight: "600", textAlign: "center" },
                ]}
              >
                Sleeper
              </Text>
            </View>
            {knowYourSeat.map((seat, index) => (
              <View
                style={[styles.tableRow, { paddingVertical: 8 }]}
                key={index}
              >
                <Text style={[styles.tableHeading, { marginRight: 55 }]}>
                  {seat.seat_type}
                </Text>
                <Text
                  style={[
                    styles.tableDivision,
                    { width: "40%", fontWeight: "400", textAlign: "center" },
                  ]}
                >
                  {seat.seater_description}
                </Text>
                <Text
                  style={[
                    styles.tableDivision,
                    { width: "40%", fontWeight: "400", textAlign: "right" },
                  ]}
                >
                  {seat.sleeper_description}
                </Text>
              </View>
            ))}
          </View>
        </View> */}
      </ScrollView>

      {/* <RBSheet
        ref={refBottomSheet}
        useNativeDriver={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          container: {
            backgroundColor: "#fff",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            elevation: 2,
            padding: 20,
          },
          draggableIcon: {
            backgroundColor: "#777",
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        draggable={true}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View>
          <Text>Bottom Sheet Content</Text>
          <PrimaryButton
            style={{ backgroundColor: SecondaryColor }}
            onClick={() => {
              
            }}
            title="Action"
          />
        </View>
      </RBSheet> */}

      <View
        style={[
          styles.tableRow,
          { backgroundColor: "#fff", height: 80, alignItems: "center" },
        ]}
      >
        <View style={{ flexDirection: "column", alignItems: "flex-start" }}>
          <Text style={{ fontWeight: "bold" }}>
            Selected Seats ({selectedSeats.length})
          </Text>
          <Text style={{ fontWeight: "bold", marginTop: 4 }}>
            Price: {totalPrice} {/* Display total price */}
          </Text>
        </View>
        <PrimaryButton
          style={{ backgroundColor: SecondaryColor }}
          onClick={() => navigation.navigate("AddPassenger")}
          title="Continue"
        />
      </View>
    </SafeAreaView>
  );
}
