import { FlatList } from "react-native-gesture-handler";
import { ItemCard } from "../Shared/ItemCard";
import SummaryPayment from "../SummaryPayment";
import { Button } from "@/components/Button";
import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import appColors from "@/constants/Colors";
import strings from "@/constants/Strings";
import { ROUTES } from "@/constants/Routes";
import { Product } from "@/core/types/product";
import { useEffect } from "react";
import { cartStore } from "@/state/hooks/cart.hook";
import testIds from "@/constants/AppTestIds";

type CartItemProps = {
  products: Product[]
}

export function CartItemList({ products }: CartItemProps) {

  const { cart, cartId, cartInfo, handleCartProducts, removeToCart } = cartStore();

  useEffect(() => {
    handleCartProducts(products);
  }, [handleCartProducts]);

  if (cartInfo) {
    return (

      <FlatList
        testID={testIds.cartItemList}
        data={cartInfo!.products}
        renderItem={({ item, index }) => (
          <>
            <ItemCard
              image={item.image}
              id={item.id}
              title={item.name}
              price={item.bestPrice}
              quantity={item.quantity}
              handleRemove={() => {
                if (cart && cartId) {
                  removeToCart(
                    cartId, cart, item,
                    { removeAllProductItems: true }
                  );
                }
              }}
            />
            {index == cartInfo!.products.length - 1 && (
              <SummaryPayment total={cartInfo!.totalPriceFormatted} />
            )}
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={() => (
          <View style={styles.buttonContainer}>
            <Button label={strings.checkout} handleSubmit={() => {
              router.push(ROUTES.SHIPPING)
            }} />
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({

  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    paddingHorizontal: 16,
    backgroundColor: appColors.background,
  },
});