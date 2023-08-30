import React from "react";
import { TextInput } from "react-native";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ShowGalary from "../Component/ShowGalary";
import { useSelector } from "react-redux";

const MyComponent = () => {
  const Images = useSelector((state) => state.task); //initial state

  const numColumns = 3;

  const renderItem = ({ item }) => <ShowGalary item={item} />;

  return (
    <View>
      <TextInput style={styles.input} placeholder="Enter text..." />
      {Images.length !== 0 ? (
        <FlatList
          data={Images}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      ) : (
        <Text>No Image Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  input: {
    width: "90%",
    height: 60,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: "center",
    margin: 10,
  },
});

export default MyComponent;
