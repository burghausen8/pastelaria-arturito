import { CarouselComponent } from "@/components/Carousel";
import Input from "@/components/Input/input";
import { ProductCard } from "@/components/ProductCard";
import appColors from "@/constants/Colors";
import { Image, StyleSheet, View, Text, FlatList, Dimensions, Alert } from "react-native";
import strings from "@/constants/Strings";
import { ScrollView } from "react-native-gesture-handler";
import fonts from "@/constants/Fonts";
import AppStatus from "@/components/AppStatus";
import AppStateEnum from "@/constants/AppState";
import { useEffect, useState } from "react";
import { AppLoader } from "@/components/Loader";
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from "expo-router";
import { ROUTES } from "@/constants/Routes";
import { useProducts } from "@/state/hooks/products.hook";

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {

    const { products, categories, groupedProducts, loading, error, fetchProducts } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, []);

    // const handleSubmit = () => {
    //     const result = search(searchTerm, products);

    //     if (result?.length === 0) {
    //         Alert.alert(strings.ops, strings.noFoundProducts);
    //     }
    //     if (result && result.length > 0) {
    //         setSearchTerm('');

    //         router.push({
    //             pathname: ROUTES.SEARCH,
    //             params: {
    //                 searchTerm: searchTerm,
    //             }
    //         });
    //     }
    //     if (searchIsError) {
    //         Alert.alert(strings.ops, strings.searchError);
    //     }

    // };

    return (
        <SafeAreaView style={styles.container}>
            {loading && <AppLoader />}
            {error &&
                <AppStatus
                    state={AppStateEnum.error}
                    message="Erro ao carregar produtos"
                />}

            {!loading && !error && <>
                <View style={styles.input}>
                    <Input
                        placeholder={strings.search}
                        iconName="search-outline"
                        returnKeyType="done"
                    //value={searchTerm}
                    //onChangeText={setSearchTerm}
                    //onSubmitEditing={handleSubmit}
                    />
                </View>
                {
                    products.length === 0 &&
                    <AppStatus
                        state={AppStateEnum.empty}
                        message="Nenhum produto encontrado"
                    />
                }
                {/* {products && <CarouselComponent
                    products={products}
                    isLoading={cartLoading}
                    onAddToCart={(product) => {
                        if (cart && cartId) {
                            addToCart(cartId, cart, product)
                        }
                    }}
                />
                } */}
                <ScrollView style={styles.scrollview} >
                    {
                        products.length > 0 &&
                        categories.map(
                            (category) => (
                                <View key={category} >
                                    < View
                                        style={styles.wrapperTitle}>
                                        <Text style={styles.title}>{category}</Text>
                                    </View>
                                    < View style={styles.gap} />
                                    <FlatList
                                        data={groupedProducts[category]}
                                        keyExtractor={(item) => item.id}
                                        horizontal showsHorizontalScrollIndicator={false}
                                        style={{ paddingHorizontal: 16 }}
                                        renderItem={
                                            ({ item }) =>
                                                <ProductCard
                                                    product={item}
                                                    //disabled={cartLoading && productIdOnCart === item.id}
                                                    disabled={false}
                                                    cartCount={0}
                                                    //cartCount={verifyProductInCart(item.id, cart)}
                                                    onDecrement={() => {
                                                        // if (cart && cartId) {
                                                        //     removeToCart(
                                                        //         cartId, cart, item,
                                                        //         { removeAllProductItems: false }
                                                        //     )
                                                        // }
                                                    }}
                                                    onIcrement={() => {
                                                        // if (cart && cartId) {
                                                        //     addToCart(cartId, cart, item)
                                                        // }
                                                    }}
                                                />
                                        }
                                    />
                                </View>
                            )
                        )
                    }
                    <>
                        < View style={{ height: 50 }} />
                        <Image
                            source={require('@/assets/images/banner.png')}
                            style={{
                                width: width,
                                height: 200,
                                objectFit: 'fill',
                            }}
                        />
                    </>
                </ScrollView>
            </>}
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.light,
        alignContent: 'center',
        justifyContent: 'center',
    },
    gap: {
        height: 8,
    },
    scrollview: {
        marginTop: 32,
    },
    input: {
        marginHorizontal: 8,
    },

    title: {
        fontFamily: fonts.bold,
        fontWeight: 'bold',
        fontSize: 14
    },
    subtitle: {
        fontFamily: fonts.bold,
        fontWeight: 'bold',
        fontSize: 14,
        color: appColors.primary,
    },
    wrapperTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginTop: 2,
    },
})