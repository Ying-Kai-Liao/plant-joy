import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Link } from "expo-router";
import { View } from "../Themed";

interface StartButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const PlantButton = ({ onPress, style }: StartButtonProps) => {
  const combinedStyle = StyleSheet.flatten([styles.button, style]);
  return (
        <TouchableOpacity style={combinedStyle} onPress={onPress}>
          <Text style={styles.text}>我的植物</Text>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#727071", // Use the appropriate background color
    paddingHorizontal: 28, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 30, // Adjust the border radius to match your design
    borderWidth: 1, // Set border width
    borderColor: "#ddd", // Set border color
    alignItems: "center", // Center the text inside the button
    justifyContent: "center", // Center the text inside the button
    shadowColor: "#000",
    shadowOffset: {
      width: -2, // Shadow to the left
      height: 4, // Shadow to the bottom
    },
    shadowOpacity: 0.2, // Opacity of shadow
    shadowRadius: 2, // Radius of shadow
    elevation: 5, // Elevation for Android (applies uniform shadow)
  },
  text: {
    color: "#fefefe", // Text color
    fontWeight: "400", // Font weight
    fontSize: 20, // Font size
    letterSpacing: 1, // Adjust the letter spacing
  },
});

export default PlantButton;
