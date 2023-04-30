import React, { useRef } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import { LoginProp } from '../utils/types';
import colors from '../utils/colors';
import { Image } from 'react-native';
import useToggle from '../hooks/useToggle';

function Login({ navigation, route }: LoginProp) {

    const usernameRef = useRef<any>(null!);
    const passwordRef = useRef<any>(null!);

    const [value, toggleValue] = useToggle(true);

    React.useEffect(() => {
        navigation.setOptions({
            headerTintColor: "white"
        })
    }, []);

    const handleContainerPress = () => {
        usernameRef.current.blur();
        passwordRef.current.blur();
    }

    
    return (
        <TouchableWithoutFeedback onPress={handleContainerPress}>
            <View style={styles.container}>
                <View style={styles.authContainer}>

                    <View style={styles.header}>
                        <Image style={styles.headerImg} source={require("../../assets/anonymous-message.png")} />
                        <Text style={styles.headerText}>Login</Text>
                    </View>

                    <TextInput style={styles.input} mode='flat' ref={usernameRef}
                    label="Username" right={<TextInput.Icon icon={() => <Icon name='person' size={20} />} />} />

                    <TextInput style={styles.input} mode='flat' secureTextEntry={value} ref={passwordRef}
                        label="Password" right={<TextInput.Icon
                        icon={() => <Icon onPress={toggleValue} name={value ? "eye" : "eye-off"} size={20} />} />} />

                    <TouchableOpacity style={styles.loginContainer}>
                        <Text style={styles.login}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.registerContainer}>
                        <Text style={{color: "white", fontSize: 16}}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={{color: colors.dodger, fontSize: 16}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Login;


const styles = StyleSheet.create({
    authContainer: {
        backgroundColor: colors.navbg,
        width: "85%",
        alignItems: "center",
        padding: 15,
        borderRadius: 8
    },
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
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
        marginVertical: 10,
    },
    loginContainer: {
        backgroundColor: "tomato",
        paddingHorizontal: 35,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 20
    },
    login: {
        color: "white"
    },
    registerContainer: {
        marginTop: 30,
        flexDirection: "row",
        gap: 8
    }
})