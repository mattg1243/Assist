import { Pressable } from "react-native";
import { Avatar, Text, HStack, VStack, Heading, Box } from 'native-base';
import { useNavigation } from "@react-navigation/native";

export default function ItemListRow(props) {
  // props interface for item:
  // "image"
  // "rating"
  // "ratings_total"
  // "title"
  // "prices" "value" = USD amount

  const navigation = useNavigation();

  return (
    <Pressable key={props.key} alignItems="center" justifyContent="center" width="100%" onPress={() => { navigation.navigate("ItemPage", { ...props }) }}>
      <HStack alignItems="center" width="100%">
        <Box width="100%" height="100px" maxW="80" padding={0} rounded="xl" overflow="hidden" borderColor="coolGray.200" shadow={3} borderWidth="2" justifyItems="space-between" 
        _dark={{
        borderColor: "#013a63",
        backgroundColor: '#1E6091'
        }} _web={{
        shadow: 2,
        borderWidth: 0
        }} _light={{
        backgroundColor: "gray.50"
        }}>
            <HStack space={5} justifyContent="space-between" alignItems="center">
            <Avatar size={'xl'} marginTop="5%" source={{ uri: props.img }}></Avatar>
            <VStack>
            <Heading isTruncated flexWrap="break-word" height="25px" maxW={"80%"} fontSize={14}>
              {props.name}
            </Heading>
            <Text overflow="no-wrap" height="25px" justifyItems={"flex-end"}>
              ${props.price}
            </Text>
            </VStack>
            </HStack>
          </Box>
        </HStack>
      </Pressable>
  )
}