import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const SecondScreen = (props: any) => {
  const { name, email, phone } = props.route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          style={styles.image}
        />
           <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
      <Text style={styles.email}>{email}</Text>
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    backgroundColor: "#CDC9C9",
    marginBottom:100,
    opacity: 1,
  },

  imagecontainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"white",
    borderRadius: 8,
    padding: 10,
    marginTop: 70,
    marginBottom: 50,
    marginLeft:10,
    marginRight:10,
  },

  image: {
    marginTop:-50,
    margin: 10,
    width: 150,
    height: 150,
    borderRadius: 125,
  },
  name: {
    fontSize: 30,
    padding: 10,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 24,
    marginTop: 4,
  },
  email: {
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default SecondScreen;
