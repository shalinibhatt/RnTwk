import React, { useEffect, useState } from "react";
import Flatlistcomponent from "../FirstScreenComponents/Flatlistcomponent";
import {
  View,
  StyleSheet,
  TextInput,
  Modal,
  Alert,
  Text,
  Pressable,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {useQuery} from "@tanstack/react-query";
import ModalView from "./ModalView";

const fetchContacts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

const FirstScreen = () => {
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const { data: contacts } = useQuery(["contacts"], fetchContacts, {
    onSuccess: (data) => {
      setFilteredContacts(data);
    },
  });

  const searchfilterfunction = (text: string) => {
    if (text) {
      const newData = contacts?.filter(
        (item: { name: string; email: string; phone: number }) => {
          const itemData = item.name
            ? item.name.toUpperCase()
            : "".toUpperCase();
          const textData = text.toUpperCase();

          return itemData.indexOf(textData) > -1;
        }
      );
      setFilteredContacts(newData);
    } else {
      setFilteredContacts(contacts);
    }
  };
  const sortedContacts = (props:string): void => {
    if (!contacts) return;
    const sortedArray:any = [...contacts].sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (props === "ascending") {
      if (nameA < nameB) {
        return -1;
      } else {
        return 1;
      }}
      else{
        if (nameA > nameB) {
          return -1;
        } else {
          return 1;
        }
      }
    });
    setFilteredContacts(sortedArray);
  };
  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <ModalView modalVisible={modalVisible} setModalVisible={setModalVisible} sortedContacts={sortedContacts}/>
      <View style={styles.searchBoxContainer}>
        <AntDesign
          name="search1"
          size={20}
          color="#999"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          cursorColor={"#333"}
          style={styles.searchInput}
          onChangeText={(text) => {
            searchfilterfunction(text);
          }}
        />
        <MaterialIcons
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={{ justifyContent: "flex-end" }}
          name="sort"
          size={24}
          color="black"
        />
      </View>
      <Flatlistcomponent filteredContacts={filteredContacts} />
    </View>
  );
};

export default FirstScreen;

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
    margin:10
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
  searchInputo: {
    backgroundColor: "pink",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: "red",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
});
