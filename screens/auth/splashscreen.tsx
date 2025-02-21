import { Image, View } from "react-native";

export default function Splashscreen () {
    return(
        <>
        <View className="bg-black w-full h-full flex-1 justify-center items-center">
            <Image source={require("../../assets/logo.png")}/>
        </View>
        </>
    )
}