import React, { useRef, useState } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

import { LoginProp, RegisterProp } from '../utils/types';
import colors from '../utils/colors';
import { Image } from 'react-native';
import useToggle from '../hooks/useToggle';
import API from '../utils/api';

function Login({ navigation, route }: RegisterProp) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameRef = useRef<any>(null!);
    const passwordRef = useRef<any>(null!);

    const [value, toggleValue] = useToggle(true);

    async function handleRegister() {
        const data = await API.post("auth/signup", { username, password });
        console.log(data)
    }

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
                        <Text style={styles.headerText}>Register</Text>
                    </View>

                    <TextInput value={username} onChangeText={setUsername} style={styles.input} mode='flat' ref={usernameRef}
                        label="Username" right={<TextInput.Icon icon={() => <Icon name='person' size={20} />} />} />

                    <TextInput value={password} onChangeText={setPassword} style={styles.input} mode='flat' secureTextEntry={value} ref={passwordRef}
                        label="Password" right={<TextInput.Icon
                        icon={() => <Icon onPress={toggleValue} name={value ? "eye" : "eye-off"} size={20} />} />} />

                    <TouchableOpacity onPress={handleRegister} style={styles.loginContainer}>
                        <Text style={styles.login}>Register</Text>
                    </TouchableOpacity>

                    <View style={styles.registerContainer}>
                        <Text style={{color: "white", fontSize: 16}}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{color: colors.dodger, fontSize: 16}}>Login</Text>
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