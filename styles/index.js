import { StyleSheet } from "react-native";

export const Colors = {
  white: '#FFFFFF',
  lightblue: '#7481C6'
}

export const FontSize = {
  size10: 10,
  size12: 12,
  size12_5: 12.5,
  size13: 13,
  size14: 14,
  size15: 15,
  size16: 16,
  size17: 17,
  size18: 18,
  size20: 20,
  size25: 25,
  size30: 30,
  size35: 35,
};

export const FontStyle = {
  font: { fontFamily: "Arial" },
  bold: { fontWeight: "bold" },
  bold300: { fontWeight: "300" },
  bold400: { fontWeight: "400" },
  bold500: { fontWeight: "500" },
  normal: { fontStyle: "normal" },
  italic: { fontStyle: "italic" },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default styles;
