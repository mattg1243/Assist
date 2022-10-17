import { Pressable } from "react-native";
import { Center, Flex, ScrollView, VStack, Heading, Box, Icon } from 'native-base';
import { useNavigation } from "@react-navigation/native";
// custom components
import ItemListRow from './ItemListRow';

export default function ItemsList(props) {

  // make an array out of the json file to map over
  const products = require('../items.json');
  const navigation = useNavigation();

  return (
    <ScrollView h="80">
      <VStack space={2.5} w="100%" h="100%" marginTop={50} justifyContent="center" alignItems="center">
        <Flex>
          <Center>
            <Heading>
              Products
            </Heading>
            <Box>
              <VStack space={5} marginTop={10} alignItems="center" width="100%">
                {products.map(product => {
                  return <ItemListRow key={product.asin} name={product.title} rating={product.rating} ratingsTotal={product.ratings_total} price={product.price.value} img={product.image} onPress={() => { navigation.navigate("ItemPage") }} />
                })}
                <Pressable position="fixed" bg="#52B69A"><Icon size="xl" name="plus" color="#000000" onPress={() => { navigation.navigate("Splash") }}/></Pressable>
              </VStack>
            </Box>
          </Center>
        </Flex>
      </VStack>
    </ScrollView>
  )
}