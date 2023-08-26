import { View, Text, StyleSheet, ImageBackground } from "react-native";

function BookItem({ name }) {
  return (
    <ImageBackground
      source={require("../assets/images/profile.jpeg")}
      style={styles.item}
      resizeMode="cover"
      imageStyle={styles.backgroundIage}
    >
      <View style={styles.bookContainer}>
        <View style={styles.bookInner}>
          <Text style={styles.bookTitle}>salim</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default BookItem;

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 16,

    borderRadius: 8,
    shadowColor: "#ededed00",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 5,
    height: 180,
    width: 160,
  },
  backgroundIage: {},
  bookContainer: {
    backgroundColor: "#e0e0e0",
    width: 160,
    /*   width: 130,
    height: 300,
   
    borderRadius: 8,  */
    /*  transform: [{ rotateX: "-37deg" }, { skewX: "5deg" }],
    shadowColor: "#fffdfd00",
    shadowOffset: { width: 3, height: 4 }, */
    /*   shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5, */
  },
  bookInner: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 700,
    textTransform: "capitalize",
  },
  bookCover: {},
});
