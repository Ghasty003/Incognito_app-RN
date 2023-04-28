import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground } from "react-native";
import { SplashScreenProp } from '../utils/types';

function Logo() {
    return (
        <View style={styles.logoContainer}>
            <Image style={styles.img} source={require("../../assets/anonymous-message.png")} />
            <Text style={styles.logoText}>Incognito</Text>
        </View>
    )
}

function SplashScreen({ navigation }: SplashScreenProp) {

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <Logo />
        })
    }, []);

    return (
        <ImageBackground resizeMode='cover' source={require("../../assets/background.jpg")} style={styles.container}>
            <Text style={styles.headerText}>Stay Incognito and send secret messages.</Text>
            <Text style={styles.headerSmallText}>Send and receive compliments from friends. You can never know who sent you messages!</Text>
        </ImageBackground>
    );
}

export default SplashScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
    headerText: {
        color: "white",
        fontSize: 35,
        marginTop: 80,
        marginBottom: 15
    },
    headerSmallText: {
        color: "white",
        fontSize: 20
    },
    img: {
        width: 40,
        height: 40
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        gap: 5
    },
    logoText: {
        color: "white",
        fontSize: 20
    }
})