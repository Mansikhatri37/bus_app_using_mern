import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../../utils/styles";
import { PureWhite, WhiteColor } from "../../utils/colors";

export default function BusCard({ bus, onClick }) {
  return (
    <TouchableOpacity onPress={onClick} style={styles.tickets}>
      <View style={styles.row}>
        <View>
          <Text style={styles.departureTime}>{bus.departureTime}</Text>
          <Text style={styles.labelStyle}>{bus.journeyDuration}</Text>
        </View>
        <View>
          <Text style={styles.arrivalTime}>{bus.arrivalTime}</Text>
          <Text style={styles.labelStyle}>{bus.seats} seats</Text>
        </View>
        <View>
          <Text style={styles.startingFrom}>From ₹100</Text>
          <View style={styles.iconDiv}>
            <Icon name="star" color={WhiteColor} />
            <Text style={styles.ratings}>{bus.ratings}</Text>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View>
          <Text style={styles.busProvider}>{bus.busProvider}</Text> 
          <Text style={styles.busType}>{bus.busType}</Text>
        </View>
      </View>

      <View style={styles.busOfferContainer}>
        <Text>Return trip deal: Min 10% off on return ticket</Text>
      </View>
    </TouchableOpacity>
  );
}
