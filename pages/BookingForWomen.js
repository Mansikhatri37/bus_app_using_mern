import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../utils/styles";

const items = [
  {
    id: 1,
    imageUri:
      "https://media.istockphoto.com/id/1185646511/vector/business-ladies-team.jpg?s=612x612&w=0&k=20&c=GcA-DCKAq3Nh-Lns2o0R8LkKHGHzTfYEV4n_IqQoE9A=",
    title: "Travel with Your Squad",
    description: "Invite your friends and earn exciting rewards on every trip!",
  },
  {
    id: 2,
    imageUri:
      "https://t4.ftcdn.net/jpg/00/39/14/41/360_F_39144111_Ljy5kgk4I6THqpKJeN5RW50NLsIvfHZq.jpg",
    title: "Special Offers Just for You",
    description:
      "Unlock exclusive deals tailored for women travelers. Save more on your journeys!",
  },
  {
    id: 3,
    imageUri:
      "https://i.pinimg.com/736x/a5/80/9e/a5809ef81d24ec1457ecfaa4414194b3.jpg",
    title: "24/7 Support for Women",
    description:
      "Our priority helpline ensures you have support whenever you need it. ",
  },
  // Add more items as needed
];

export default function BookingForWomen() {
  return (
    <ScrollView
      contentContainerStyle={{ backgroundColor: "lightgrey", flex: 1 }}
    >
      <View style={[styles.header, { height: 200 }]}></View>
      <View style={[styles.header2]}>
        <View style={styles.row1}>
          <Icon
            name="woman"
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
            BOOKING FOR WOMEN
          </Text>
          <View style={{ padding: 15, height: 110 }}>
            <Text>
              At Ghumantoo, we understand the unique needs of women travelers.
              Our "Booking for Women" feature is crafted to offer a safe,
              reliable, and enjoyable travel experience.
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
                  BOOK NOW
                </Text>
              </View>
            </View>
          ))}

          <Text style={{ fontWeight: "bold", padding: 10 }}>
            RECENT ACTIVITY
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
