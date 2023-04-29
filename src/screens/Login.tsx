import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { LoginProp } from '../utils/types';
import colors from '../utils/colors';

function Login({ navigation, route }: LoginProp) {
    
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
        backgroundColor: colors.primary
    }
})