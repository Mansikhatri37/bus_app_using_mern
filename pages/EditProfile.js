import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RadioButton } from "react-native-paper";
import { Black1Color } from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../actions/userActions";
import { styles } from "../utils/styles";
import PrimaryButton from "../components/buttons/PrimaryButton";
import GPhoneInput from "../components/GPhoneInput";

export default function EditProfile() {
  // Initialize state based on user data
  const { mobile_number, name, email, gender } = useSelector((state) => state.user);
  const [checked, setChecked] = useState(gender === "Male" ? "first" : "second");
  const [editable, setEditable] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(mobile_number);
  const [uname, setUname] = useState(name);
  const [email_id, setEmail] = useState(email);

  const dispatch = useDispatch();

  const saveDetails = () => {
    setEditable(false);
    dispatch(editProfile({ mobile_number: phoneNumber, name: uname, email: email_id, gender: checked === "first" ? "Male" : "Female" }));
  };

  useEffect(() => {
    setEmail(email_id);
    setChecked(gender === "Male" ? "first" : "second");
  }, [email_id, gender]);

  if (!editable) {
    return (
      <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
        <View style={styles.main1}>
          <View style={styles.row}>
            <Text style={[styles.stdText, { color: Black1Color }]}>
              PERSONAL DETAILS
            </Text>
            <PrimaryButton
              style={{ backgroundColor: "transparent" }}
              textStyle={{
                color: "dodgerblue",
                fontSize: 16,
                fontWeight: "bold",
              }}
              title="Edit"
              onClick={() => setEditable(true)}
            />
          </View>
          <View
            style={[
              styles.row,
              { justifyContent: "flex-start", marginTop: -20 },
            ]}
          >
            <Icon name="account-circle" size={90} />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.text1}>NAME:</Text>
              <Text style={styles.text1}>{name}</Text>
              <Text style={styles.text1}>GENDER:</Text>
              <View style={[styles.row, { padding: 0 }]}>
                <Text style={styles.male}>Male</Text>
                <RadioButton
                  value="first"
                  status={checked === "first" ? "checked" : "unchecked"}
                  onPress={() => setChecked("first")}
                  disabled
                />
                <Text style={styles.male}>Female</Text>
                <RadioButton
                  value="second"
                  status={checked === "second" ? "checked" : "unchecked"}
                  onPress={() => setChecked("second")}
                  disabled
                />
              </View>
              <Text style={styles.text1}>MOBILE NUMBER:</Text>
              <Text style={styles.text1}>{mobile_number}</Text>
              <Text style={styles.text1}>EMAIL:</Text>
              <Text style={styles.text1}>{email_id}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "lightgrey" }}>
        <View style={[styles.main1, { height: 460 }]}>
          <Text style={[styles.stdText, { color: "black" }]}>
            PERSONAL DETAILS
          </Text>
          <View style={[styles.row, { paddingTop: 20 }]}>
            <View>
              <TextInput
                placeholder="Name"
                style={styles.input}
                value={uname}
                onChangeText={setUname}
              />
              <Text style={[styles.stdText, { fontSize: 18, color: "#555" }]}>
                Gender
              </Text>
              <View style={[styles.row, { marginBottom: 8 }]}>
                <View style={styles.radioButton}>
                  <Text style={{ fontSize: 14.8 }}>Male</Text>
                  <RadioButton
                    value="first"
                    status={checked === "first" ? "checked" : "unchecked"}
                    onPress={() => setChecked("first")}
                  />
                </View>
                <View style={styles.radioButton}>
                  <Text style={{ fontSize: 14.5 }}>Female</Text>
                  <RadioButton
                    value="second"
                    status={checked === "second" ? "checked" : "unchecked"}
                    onPress={() => setChecked("second")}
                  />
                </View>
              </View>
              <Text style={styles.text1}>Mobile Number</Text>
              <GPhoneInput value={phoneNumber} onChangeText={setPhoneNumber} />
              <Text style={styles.text1}>Email</Text>
              <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={[styles.row, { justifyContent: "flex-end" }]}>
            <PrimaryButton
              style={{ backgroundColor: "transparent", marginTop: -6 }}
              textStyle={{
                color: "dodgerblue",
                fontSize: 16,
                fontWeight: "bold",
              }}
              title="DONE"
              onClick={saveDetails}
            />
            <PrimaryButton
              style={{ backgroundColor: "transparent", marginTop: -6 }}
              textStyle={{
                color: "dodgerblue",
                fontSize: 16,
                fontWeight: "bold",
              }}
              title="CANCEL"
              onClick={() => setEditable(false)}
            />
          </View>
        </View>
      </View>
    );
  }
}
