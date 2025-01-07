import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { width } from "../../utils/styles";

export default function PrimaryTextInput({
  style,
  inputStyle,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  iconName,
  isIconInput,
}) {
  return (
    <View style={[styles.inputContainer, style]}>
      {isIconInput && (
        <Icon name={iconName} size={24} color="#ccc" style={styles.icon} />
      )}
      <TextInput
        style={[styles.textInput, inputStyle]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholderTextColor="#aaa"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: width - 38,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
