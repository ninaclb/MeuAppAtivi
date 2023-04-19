import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  containerFullWidth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
  box: {
    maxWidth: 300,
    widht: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      widht: 10,
      height: 10,
    },
  },
  card: {
    margin: 40,
    maxWidth: 300,
    widht: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      widht: 50,
      height: 50,
    },
  },
});
