import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserItem = ({user}) => {
  return (
    <View style ={styles.itemContainer}>
      <Text style ={styles.itemTitle}>{user.name} {user.apellidos}</Text>
      <Text style = {styles.itemDescription}>{user.cedula}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#333333",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5
  },
  itemTitle: {
    color: "#ffffff"
  },
  itemDescription:{
    color: "red"
  }
})
export default UserItem;
