
import AppStatus from '@/components/AppStatus';
import { Button } from '@/components/Button';
import { AppLoader } from '@/components/Loader';
import { ProductCard } from '@/components/ProductCard';
import Header from '@/components/Shared/Header';
import AppStateEnum from '@/constants/AppState';
import appColors from '@/constants/Colors';
import fonts from '@/constants/Fonts';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export default function ProductDetails() {

    const { productId } = useLocalSearchParams() as { productId: string };

    //  const {
    //   loading: listLoading,
    //   error,
    //   groupedProducts,
    //   findProduct,
    //   findProductById,
    //  } = productsStore();

    //  const {
    //   cart,
    //   cartId,
    //   productIdOnCart,
    //   loading: cartLoading,
    //   setupCart,
    //   addToCart,
    //   removeToCart,
    //   verifyProductInCart
    //  } = cartStore();

    //  useEffect(() => {
    //   findProductById(productId);
    //  }, [findProductById, setupCart, addToCart]);

    //if (listLoading || !findProduct) {
    return (
        <SafeAreaView edges={['top']} style={styles.container} >
            <Header title={""} backButton />
            <AppLoader />
        </SafeAreaView>
    );
    //  } else if (error) {
    //   return (
    //    <SafeAreaView edges={['top']} style={styles.container} >
    //     <Header title={""} backButton />
    //     <AppStatus
    //      state={AppStateEnum.error}
    //      message="Erro ao carregar produtos"
    //     />
    //    </SafeAreaView>

    //   )
    //  } else {
    //   return (
    //    <SafeAreaView edges={['top']} style={styles.container} >
    //     <Header title={findProduct.name} backButton />
    //     <ScrollView  >
    //      <View style={styles.body}>
    //       <Image
    //        source={{ uri: findProduct.image }}
    //        style={{ width: width, height: 375 }}
    //       />
    //       <View style={styles.productDetails}>
    //        <View style={styles.rowDetails}>
    //         <Text style={styles.detailsText}>Detalhes</Text>
    //         <Text style={styles.priceText}>{findProduct.bestPrice}</Text>
    //        </View>
    //        <View style={{ height: 12 }} />
    //        <Text style={styles.text}>{findProduct.description}</Text>
    //        <View style={{ height: 32 }} />
    //        <Text style={styles.showcaseText}>Produtos relacionados</Text>
    //        <FlatList
    //         data={groupedProducts[findProduct.category]}
    //         keyExtractor={(item) => item.id}
    //         horizontal showsHorizontalScrollIndicator={false}
    //         renderItem={
    //          ({ item }) => <ProductCard
    //           product={item}
    //           disabled={cartLoading && productIdOnCart === item.id}
    //           cartCount={verifyProductInCart(item.id, cart)}
    //           onDecrement={() => {
    //            if (cart && cartId) {
    //             removeToCart(
    //              cartId, cart, item,
    //              { removeAllProductItems: false }
    //             )
    //            }
    //           }}
    //           onIcrement={() => {
    //            if (cart && cartId) {
    //             addToCart(cartId, cart, item)
    //            }
    //           }}
    //          />
    //         }
    //        />
    //        <View style={{ height: 32 }} />
    //        <View
    //         disabled={cartLoading}
    //        >
    //         <Button
    //          label="Adicionar ao carrinho"
    //          color={cartLoading ? appColors.gray : appColors.primary}
    //          handleSubmit={() => {
    //           if (cart && cartId) {
    //            addToCart(cartId, cart, findProduct)
    //           }
    //          }}
    //         />
    //        </View>
    //       </View>

    //       <Image
    //        source={require('@/assets/images/pdp.png')}
    //        style={{
    //         width: width,
    //         height: 200,
    //         objectFit: 'fill',
    //        }}
    //       />
    //      </View>
    //     </ScrollView>
    //    </SafeAreaView>
    //   );
    //  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.background,
    },
    productDetails: {
        padding: 16,
    },
    rowDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1
    },
    detailsText: {
        fontSize: 18,
        fontFamily: fonts.bold
    },
    priceText: {
        fontSize: 20,
        fontFamily: fonts.bold,
        color: appColors.success,
    },
    showcaseText: {
        fontSize: 16,
        fontFamily: fonts.bold,
        color: appColors.regularGray,
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.regular,
        color: appColors.regularGray
    },
    divider: {
        height: 1,
        backgroundColor: appColors.gray,
        width: '60%',
    },
    body: {

    }
})