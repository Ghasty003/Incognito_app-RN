import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, TouchableOpacity } from "react-native";
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

            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.loginBtnContainer}>
                    <Text style={styles.loginBtn}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerBtnContainer}>
                    <Text style={styles.registerBtn}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sendParent}>
                <TouchableOpacity style={styles.sendContainer}>
                    <Text style={styles.send}>Send message</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default SplashScreen;


const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 100
    },
    container: {
        flex: 1,
        padding: 8
    },
    headerText: {
        color: "white",
        fontSize: 35,
        marginTop: 100,
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
    loginBtn: {
        color: "white",
    },
    loginBtnContainer: {
        backgroundColor: "dodgerblue",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5
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
    },
    registerBtn: {
        color: "white"
    },
    registerBtnContainer: {
        backgroundColor: "tomato",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5
    },
    send: {
        color: "white"
    },
    sendContainer: {
        backgroundColor: "tomato",
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    sendParent: {
        alignItems: "center",
        marginTop: 25
    }
})