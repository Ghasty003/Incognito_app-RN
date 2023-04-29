import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { LoginProp } from '../utils/types';
import colors from '../utils/colors';
import { Image } from 'react-native';

function Login({ navigation, route }: LoginProp) {

    React.useEffect(() => {
        navigation.setOptions({
            headerTintColor: "white"
        })
    }, []);
    
    return (
        <View style={styles.container}>
            <View style={styles.authContainer}>

                <View style={styles.header}>
                    <Image style={styles.headerImg} source={require("../../assets/anonymous-message.png")} />
                    <Text style={styles.headerText}>Login</Text>
                </View>

                <TextInput style={styles.input} mode='flat'
                 label="Username" right={<TextInput.Icon icon={() => <Icon name='person' size={20} />} />} />

                <TextInput style={styles.input} mode='flat' secureTextEntry={true}
                 label="Password" right={<TextInput.Icon icon={() => <Icon name='lock-closed' size={20} />} />} />
            </View>
        </View>
    );
}

export default Login;


const styles = StyleSheet.create({
    authContainer: {
        backgroundColor: colors.navbg,
        width: "80%",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        marginBottom: 15
    },
    headerImg: {
        width: 50,
        height: 50
    },
    headerText: {
        color: "white",
        fontSize: 23
    },
    input: {
        width: "80%",
        marginVertical: 10
    }
})