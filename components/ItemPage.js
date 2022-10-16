import { ScrollView, Image } from "react-native";
import { FormControl, Divider, Select, VStack, Stack, Text, Heading, Button, HStack, Checkbox, AspectRatio } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AirbnbRating } from "react-native-ratings";
// custom components
import OrderNotifyModal from "./OrderNotifyModal";

export default function ItemPage(props) {

  const navigation = useNavigation();
  const product = props.route.params

  const [orderFrequency, setOrderFrequency] = useState(0);
  
  const updateItem = () => {
    // axios PUT request to server goes here
    // updates order frequency, toNotify, etc
  }

  return (
    <ScrollView style={{flex: 1}}>
      <VStack space={2.5} w="100%" h="100%" marginTop={50} justifyContent="center" alignItems="center">
        <VStack w="90%" h="100%" marginTop={50} justifyContent="center" alignItems="center">
          <HStack>
            <AspectRatio marginBottom={10} marginTop={-10} ratio={{
                base: 11 / 12,
                md: 12 / 13
              }} height={{
                base: 200,
                md: 400
              }}>
              <Image source={{ uri: `${product.img}` }} style={{width: 300, height: 200}} alt="picture of product" borderRadius={12}/>
            </AspectRatio>
          </HStack>
          <Heading marginBottom={2} textAlign="center">
            {product.name}
          </Heading>
          <HStack>
              <AirbnbRating
              type="custom"
              count={5}
              defaultRating={Math.round(product.rating)}
              readonly={true}
              showRating={false}
              ratingContainerStyle={{ backgroundColor: "#003049", color: "#669bbc" }}
              size={30}
              />
            </HStack>
          <Text fontSize={20}>
            ${product.price}
          </Text>
          <Divider my="2" />
          <Text>Last Ordered on 9/2/2022</Text>
          <Text>Order Again on 10/2/22 </Text>
          <Divider my="2" />
          <FormControl w="3/4" maxW="300" marginTop={10}>
            <Stack mx="2" space={2}>
              <FormControl.Label>Order Frequency</FormControl.Label>
              <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" defaultSelectedValue={4} onValueChange={ val => setOrderFrequency(val) }>
                <Select.Item label="1 week" value={1} />
                <Select.Item label="2 Weeks" value={2} />
                <Select.Item label="3 Weeks" value={3} />
                <Select.Item label="1 Month" value={4} />
                <Select.Item label="2 Months" value={8} />
              </Select>
              <Checkbox defaultIsChecked={true} marginTop={10} ><Text>Notify Me</Text></Checkbox>
              <OrderNotifyModal />
            </Stack>
          </FormControl>
        </VStack>
      <HStack space={12}>
        <Button onPress={() => navigation.navigate("ItemsList")} marginBottom={0} bg="#52B69A">Save</Button>
        <Button onPress={() => navigation.navigate("ItemsList")} marginBottom={0} colorScheme="danger">Cancel</Button>
      </HStack>
      </VStack>
    </ScrollView>
  )
}