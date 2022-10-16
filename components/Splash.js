import { Text } from "react-native";
import { Center } from "native-base";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Splash(props) {

  const navigation = useNavigation();

  return (
    // pressing anywhere on the screen brings you to the items list page
    <Pressable onPress={() => { navigation.navigate("ItemsList") }}>
      <Center height="100%" width="100%">
          <Text style={{ 
            // fontFamily: "OleoScriptSwashCaps_400Regular", 
            fontSize: "92px",  
            textShadowColor: 'white', 
            textShadowOffset: 'rgba(0, 0, 0, 0.75)', 
            textShadowRadius: 3, 
            color: "white", 
            padding: 10 }}>
              Assist
            </Text>
      </Center>
    </Pressable>
  )
}