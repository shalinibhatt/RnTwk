import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import {useNavigation} from "@react-navigation/native";


const Flatlistcomponent = (props: any) => {
  const navigation :any= useNavigation();
  return (
    <FlatList
      data={props.filteredContacts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: { item:any })  => (
        <Pressable
          onPress={() =>  
            navigation.navigate("SecondScreen", item)
          }

          style={styles.container}
        >
          <View
            style={styles.view1}
          >
            <Image
              source={{ uri: "https://picsum.photos/200/300" }}
              style={styles.image}
            />
            <View style={styles.view2}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.phone}>{item.phone}</Text>
            </View>
          </View>
          <Text style={styles.email}>{item.email}</Text>
        </Pressable>
      )}
    />
  );
};

export default Flatlistcomponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  view1: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  view2:{
    alignSelf: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  phone: {
    fontSize: 16,
  },
  email: {
    fontSize: 10,
    marginBottom: 3,
  },
});
