import Header from "@/components/Shared/Header";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from '@/constants/Colors';
import strings from '@/constants/Strings';
import { router, useFocusEffect } from "expo-router";
import { ROUTES } from '@/constants/Routes';
import { useCallback, useEffect } from "react";
import { AppLoader } from "@/components/Loader";
import AppStatus from "@/components/AppStatus";
import AppStateEnum from "@/constants/AppState";
import { CartItemList } from "@/components/CartItemList";


export default function CartScreen() {
  //const { cart, loading, error, cartId, getCart, setupCart } = cartStore();


  // Chama o carrinho sempre que a Tab Cart é tocada
  // useFocusEffect(
  //   useCallback(() => {
  //     console.log(cart)
  //     cartId != undefined ? getCart(cartId) : setupCart();
  //   }, [cartId, getCart, setupCart])
  // );

  // let hasProducts = cart.products && cart.products.length > 0;
  // let isSuccessful = !loading && !error;

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Header title={strings.cart} backButton={false} />
  //     {loading && <AppLoader />}
  //     {
  //       error &&
  //       <AppStatus state={AppStateEnum.error}
  //         message="Erro ao carregar produtos"
  //       />
  //     }
  //     {
  //       isSuccessful && !hasProducts &&
  //       <AppStatus state={AppStateEnum.empty}
  //         message="Seu carrinho está vazio"
  //         buttonTitle="Voltar para a loja"
  //         showButton
  //         onButtonPress={() => router.push(ROUTES.HOME)}
  //       />
  //     }
  //     {
  //       isSuccessful && hasProducts &&
  //       <CartItemList products={cart.products!} />
  //     }
  //   </SafeAreaView>
  // );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});