import { ProductCard } from "@/components/ProductCard"
import Header from "@/components/Shared/Header";
import appColors from "@/constants/Colors"
import { Product } from "@/core/types/product";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet, FlatList, View, Image, Dimensions } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get('window');
const numColumns = 2;
const itemWidth = (width / numColumns);

export default function SearchScreen() {
  const { searchTerm } = useLocalSearchParams() as { searchTerm: string };
  // const {
  //   productsFound,
  // } = searchStore();

  // const {
  //   cart,
  //   cartId,
  //   productIdOnCart,
  //   loading: cartLoading,
  //   addToCart,
  //   removeToCart,
  //   verifyProductInCart
  // } = cartStore();

  //if (productsFound === null || productsFound.length === 0) {
  router.back();
  //}

  // const renderItem = (item: Product) => (
  //   <View style={{ width: itemWidth, paddingHorizontal: 16 }}>
  //     <ProductCard
  //       product={item}
  //       width={itemWidth - 40}
  //       disabled={cartLoading && productIdOnCart === item.id}
  //       cartCount={verifyProductInCart(item.id, cart)}
  //       onDecrement={() => {
  //         if (cart && cartId)
  //           removeToCart(
  //             cartId, cart, item,
  //             { removeAllProductItems: false }
  //           )
  //       }}
  //       onIcrement={() => {
  //         if (cart && cartId)
  //           addToCart(cartId, cart, item)

  //       }}
  //     />
  //   </View>
  // );

  // return (
  //   <SafeAreaView edges={['top']} style={styles.container} >
  //     <Header title={searchTerm} backButton />
  //     <FlatList
  //       data={productsFound}
  //       renderItem={({ item }) => (renderItem(item))}
  //       keyExtractor={(item) => item.id.toString()}
  //       numColumns={numColumns}
  //     />
  //     <View>
  //       <Image
  //         source={require('@/assets/images/contactus.png')}
  //         style={{
  //           width: width,
  //           height: 180,
  //           objectFit: 'fill',
  //         }}
  //       />
  //     </View>
  //   </SafeAreaView>
  // )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.light,
  },
})