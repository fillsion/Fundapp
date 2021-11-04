import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getUser } from "../api";
import UserList from "../components/UserList";

import Layout from "../components/Layout";
const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUser();
    setUsers(data);
    console.log(data)
  };

  useEffect(() => {
    console.log("here")
    loadUsers();
  }, []);
  return (
    <Layout>
      <UserList users={users} />
    </Layout>
  );
};

export default HomeScreen;
