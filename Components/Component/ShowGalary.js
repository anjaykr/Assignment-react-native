import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

const ShowGalary = ({ item }) => {
  const itemWidth = 100;

  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <View
      style={[
        {
          width: itemWidth,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <TouchableOpacity onPress={() => toggleZoom}>
        <TouchableOpacity onPress={toggleZoom}>
          <Image
            source={{ uri: item.image }}
            style={isZoomed ? styles.zoomed : styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <Text>{item.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  zoomed: {
    width: 200,
    height: 200,
  },
});

export default ShowGalary;
