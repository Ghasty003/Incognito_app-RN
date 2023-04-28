import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { LoginProp } from '../utils/types';

function Login({ navigation, route }: LoginProp) {
    const { age } = route.params;
    console.log(age)
    return (
        <View style={styles.container}>
            <Text>Hello Login</Text>
        </View>
    );
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange"
    }
})