

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import ImageUploader from '../Component/ImageUploader';
const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;
const App = (props) => {
    const currentDate = new Date().toLocaleDateString();

    return (
        <View style={{}}>
            <View style={styles.TOPcontainer}>

                <View style={styles.header}>
                    <Text style={styles.title}>Date:{currentDate}</Text>
                    <Text style={styles.subtitle}>Tilte:- Demo</Text>
                </View>
            </View>

            <View style={{ height: DeviceHeight / 1.3, justifyContent: "center", }}>
                <ImageUploader />
                <TouchableOpacity style={styles.uploadButton} onPress={() => props.navigation.navigate("SecondPage")}>
                    <Text style={styles.uploadButtonText}>Second Page</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    TOPcontainer: {
        height: DeviceHeight / 8,
        justifyContent: "center",

    },
    header: {
        alignItems: 'center',


    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 6
    },
    subtitle: {
        fontSize: 20,
        // color: 'blue',

    },
    uploadButtonContainer: {
        alignItems: 'center',
    },
    uploadButton: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        alignSelf: "center"
    },
    uploadButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default App;

