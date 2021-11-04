import React from "react";
import { View, Text, FlatList } from "react-native";
import UserItem from "./UserItem";
const UserList = ({ users }) => {
  const renderItem = ({item}) => {
    return <UserItem user = {item}/>
  }
    
  return (
    <FlatList style = {{width: '80%'}}
      data={users}
      keyExtractor={(item) => item.cedula}
      renderItem={renderItem}
    />
  );
};

export default UserList;
