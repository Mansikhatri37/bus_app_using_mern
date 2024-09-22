import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";
import LottieView from "lottie-react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../utils/styles";
import TicketComponent from "../components/TicketComponent";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    Traveldate: "29 March",
    Travelday: "Friday",
    Transportname: "ShivGanga Travels 2/2 AC,Sleeper",
    Departuretime: "3:00 pm",
    DepartureAddress: "Delhi",
    TimeDuration: "7hr:00",
    ArrivalTime: "10:00 pm",
    ArrivalAddress: "Pune",
    TicketNo: "TN6Q18603433",
    PNR: "PNR  64ZAJC6P",
    Fare: "₹ 300.00",
    BusProvider: "Prasanna Purple Grand",
    BusType: "A/C Sleeper(2+1)",
    PickUpPoint:
      "Dharampeeth-Prasanna Purple,Near Bhole petrol pump, New Delhi",
    DropPoint: "Prasanna Purple, Mahada Complex Nr. Baba Petrol Pump, Pune",
  },
];
export default function ConfirmationPage() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.checkDiv}>
          <Icon name="checkbox-marked-circle" size={30} style={styles.check} />
          <Text style={styles.confirmation}>Your booking is confirmed!</Text>
        </View>
        <View>
          <TicketComponent
            Traveldate={DATA[0].Traveldate}
            Travelday={DATA[0].Travelday}
            Transportname={DATA[0].Transportname}
            Departuretime={DATA[0].Departuretime}
            DepartureAddress={DATA[0].DepartureAddress}
            TimeDuration={DATA[0].TimeDuration}
            ArrivalTime={DATA[0].ArrivalTime}
            ArrivalAddress={DATA[0].ArrivalAddress}
            TicketNo={DATA[0].TicketNo}
            PNR={DATA[0].PNR}
            Fare={DATA[0].Fare}
            BusProvider={DATA[0].BusProvider}
            BusType={DATA[0].BusType}
            PickUpPoint={DATA[0].PickUpPoint}
            DropPoint={DATA[0].DropPoint}
          />
        </View>
      </View>
      <View style={styles.share}>
        <TouchableOpacity style={styles.down}>
          <Icon name="cancel" size={20} />
          <Text style={styles.cancel}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.down}>
          <Icon name="share-variant" size={20} />
          <Text style={styles.cancel}>SHARE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.down}
          onPress={() => navigation.navigate("Main")} 
        >
          <Icon name="check" size={20} />
          <Text style={styles.cancel}>DONE</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
