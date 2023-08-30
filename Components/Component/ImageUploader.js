import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { useDispatch } from "react-redux";
import { AddImage } from "../Redux/Slices";
const ImageUploader = () => {
  const currentDate = new Date().toLocaleDateString();
  const dispatch = useDispatch();

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.cancelled) {
      const image = result.uri;

      dispatch(AddImage({ image: image, date: currentDate }));
    }
  };
  return (
    <View style={{}}>
      <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
        <Text style={styles.uploadButtonText}>Upload Image</Text>
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadButtonContainer: {
    alignItems: "center",
  },
  uploadButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
  },
  uploadButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ImageUploader;
