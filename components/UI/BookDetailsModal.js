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

            <View>
              <Text style={styles.textStyle}>Author:</Text>
              <Text>Gabriel García Márquez</Text>
            </View>

            <Text>Original title: Cien años de soledad</Text>
            <Text>Translator: Gregory Rabassa</Text>
            <Text>Country: Argentina</Text>
            <Text>Language: Spanish </Text>
            <Text>Genre: Magic realism</Text>

            <View>
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
    padding: 35,
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 14,
    fontWeight: 700,
  },

  bookStyle: {
    height: 100,
    width: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
