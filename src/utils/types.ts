import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackParams = {
    SplashScreen: undefined;
    Login: undefined;
    Register: undefined;
}

export type SplashScreenProp = NativeStackScreenProps<StackParams, "SplashScreen">;

export type LoginProp = NativeStackScreenProps<StackParams, "Login">;

export type RegisterProp = NativeStackScreenProps<StackParams, "Register">;

export interface UseToggleProps {
    value: boolean;
    toggleValue: () => void;
}