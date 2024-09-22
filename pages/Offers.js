import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "../utils/styles";
import Icon from "react-native-vector-icons/Ionicons";

export default function Offers() {
  const items = [
    {
      id: 1,
      imageUri:
        "https://www.emiratesislamic.ae/-/media/ei/images/promotion/careem_rides_600x500_eng.jpg?h=500&w=600&la=en&hash=1C5E8CD40199139D3B201A1E17A0C408",
      title: "Get 20% Off Your Next Ride",
      description:
        "Enjoy a 20% discount on your next bus journey.Use code RIDE20 at checkout.",
    },
    {
      id: 2,
      imageUri:
        "https://www.shutterstock.com/image-vector/buy-5-get-1-free-260nw-478012288.jpg",
      title: "Buy 5 Tickets, Get 1 Free",
      description:
        "Travel more and save! Purchase 5 tickets in advance and receive 1 ticket absolutely free.",
    },
    {
      id: 3,
      imageUri:
        "https://img.freepik.com/premium-psd/summer-sale-30-percent-off-3d-rendering-isolated-premium_478612-22.jpg",
      title: "Seasonal Sale: Up to 30% Off",
      description:
        "Take advantage of our seasonal sale with discounts up to 30% on selected routes.",
    },
    // Add more items as needed
  ];

  return (
    <View style={{ backgroundColor: "lightgrey", flex: 1 }}>
      <View style={[styles.header, { height: 200 }]}></View>
      <View style={[styles.header2]}>
        <View style={styles.row1}>
          <Icon
            name="ticket-outline"
            size={60}
            color="black"
            style={{ marginHorizontal: 10, marginVertical: 10, paddingTop: 10 }}
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 23,
              marginLeft: 70,
              marginTop: -55,
              marginBottom: 10,
            }}
          >
            OFFERS
          </Text>
          <View style={{ padding: 25, height: 100 }}>
            <Text>
              Discover unbeatable savings and exclusive benefits with our latest
              promotions.
            </Text>
          </View>

          {items.map((item) => (
            <View
              key={item.id}
              style={[
                styles.header2,
                {
                  marginTop: 30,
                  height: 150,
                  marginHorizontal: -2,
                  flexDirection: "row",
                  flexWrap: "wrap",
                },
              ]}
            >
              <Image
                source={{ uri: item.imageUri }}
                style={{
                  height: 100,
                  width: 150,
                  marginHorizontal: 8,
                  marginVertical: 14,
                  borderRadius: 8,
                }}
              />
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ fontWeight: "bold", padding: 10 }}>
                  {item.title}
                </Text>
                <Text style={{ width: "80%", marginLeft: 10, marginTop: -4 }}>
                  {item.description}
                </Text>
                <Text
                  style={{
                    color: "dodgerblue",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  COPY
                </Text>
              </View>
            </View>
          ))}

          <Text style={{ fontWeight: "bold", padding: 10 }}>
            RECENT ACTIVITY
          </Text>
        </View>
      </View>
    </View>
  );
}
