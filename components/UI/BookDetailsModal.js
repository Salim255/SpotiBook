import React, { useState } from "react";
import { Text, View, Modal, StyleSheet, Image } from "react-native";
import Button from "./Button";
function BookDetailsModal() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={styles.bookStyle}
              source={{
                uri: "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
              }}
            />
            <Text style={styles.modalText}>One Hundred Years of Solitude</Text>

            <View style={styles.detailsContainer}>
              <Text style={styles.textStyle}></Text>
              <View style={styles.textContainer}>
                <Text style={styles.textContainerTitle}>Author: </Text>
                <Text style={styles.textContainerDetails}>
                  Gabriel García Márquez
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textContainerTitle}>Original title:</Text>
                <Text style={styles.textContainerDetails}>
                  Cien años de soledad
                </Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textContainerTitle}>Translator:</Text>
                <Text style={styles.textContainerDetails}>Gregory Rabassa</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textContainerTitle}>Country:</Text>
                <Text style={styles.textContainerDetails}>Argentina</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textContainerTitle}>Language:</Text>
                <Text style={styles.textContainerDetails}>Spanish</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.textContainerTitle}>Genre:</Text>
                <Text style={styles.textContainerDetails}>Magic realism</Text>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <Button
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                Cancel
              </Button>
              <Button
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                Add to booking
              </Button>
            </View>
          </View>
        </View>
      </Modal>

      <Button
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        Show Modal
      </Button>
    </View>
  );
}

export default BookDetailsModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: "12%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: -40,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  detailsContainer: {
    marginBottom: 8,
  },
  textContainer: {
    flexDirection: "row",
  },
  textContainerTitle: {
    fontSize: 18,
    fontWeight: 600,
    margin: 2,
  },
  textContainerDetails: {
    alignSelf: "center",
    marginTop: 2,
    fontSize: 14,
    marginLeft: 4,
  },
  modalText: {
    marginBottom: 1,
    marginTop: 15,
    textAlign: "center",
    fontWeight: 700,
    fontSize: 20,
  },

  bookStyle: {
    height: 100,
    width: 160,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
