import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackParamsList } from "./types";
import Splashscreen from "screens/auth/splashscreen";

const Stack = createStackNavigator<AuthStackParamsList>();

export const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="splash-screen" component={Splashscreen} />
        </Stack.Navigator>
    );
};
