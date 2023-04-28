import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParams = {
    SplashScreen: undefined;
    Login: { age: number };
}

export type SplashScreenProp = NativeStackScreenProps<StackParams, "SplashScreen">;

export type LoginProp = NativeStackScreenProps<StackParams, "Login">;