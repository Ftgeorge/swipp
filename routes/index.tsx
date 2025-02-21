import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./authstack";

const RootStack = createStackNavigator<RootStackParamList>();

export const RootRouter = () => {
return (
    <>
    <NavigationContainer>
        <RootStack.Navigator screenOptions={{
            headerShown:false
        }}>
            <RootStack.Screen name="auth-stack" component={AuthStack}/>
        </RootStack.Navigator>
    </NavigationContainer>
    </>
)
}