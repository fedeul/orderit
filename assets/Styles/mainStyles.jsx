import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  containerText: {
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    marginTop: 50,
    backgroundColor: "#4b4a4937",
    padding: 10,
    marginBottom: 50,
    width: "100%",
  },
  eachItem: {
    width: "100%",
    marginVertical: 5,
    fontSize: 14,
    padding: 5,
    backgroundColor: "#f5efdf",
    borderLeftWidth: 2,
    borderLeftColor: "red",
    borderRadius: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  centeredButtons: {
    flexDirection: "row",
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
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#fdfdfd",
    borderColor: "#000000",
    marginHorizontal: 3,
    borderWidth: 1,
  },
  buttonDelete: {
    marginHorizontal: 3,
    backgroundColor: "#f32121",
  },
  buttonOK: {
    marginHorizontal: 3,
    backgroundColor: "#4cbd18",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Styles;
