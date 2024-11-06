import appColors from "@/constants/Colors";
import { Product } from "@/core/types/product";
import * as React from "react";
import { StyleSheet, Dimensions, Image, View, Text, Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import fonts from "@/constants/Fonts";
import { router } from "expo-router";
import { ROUTES } from "@/constants/Routes";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { AppLoader } from "../Loader";

const PAGE_WIDTH = Dimensions.get("window").width;
const defaultBorderRadius = 16;

type Props = {
  products: Product[];
  onAddToCart: (product: Product) => void;
  isLoading: boolean;
}

export function CarouselComponent({ products, onAddToCart, isLoading }: Props) {
  const progress = useSharedValue<number>(0);
  const ref = React.useRef<ICarouselInstance>(null);



  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.6,
  };

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        ref={ref}
        style={{ width: PAGE_WIDTH }}
        onProgressChange={progress}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={products}
        loop
        {...baseOptions}
        renderItem={({ index }) => (
          <View style={styles.container}>
            <Image
              source={{ uri: products[index].image }}
              style={{
                width: PAGE_WIDTH,
                height: PAGE_WIDTH * 0.6,
                borderRadius: defaultBorderRadius,
                justifyContent: "center",
              }}
            />
            < LinearGradient
              start={{ x: 0, y: 0.05 }}
              end={{ x: 0, y: 1 }}
              locations={[.5, .95]}
              colors={['#00000000', appColors.dark]}
              style={styles.gradient}
            />
            <View style={styles.row}>
              <Text style={styles.text}>{products[index].name}</Text>
              <Text style={styles.price}>{products[index].bestPrice}</Text>
              <TouchableOpacity
                onPress={() => {
                  router.push({
                    pathname: ROUTES.PRODUCT_DETAILS,
                    params: { productId: products[index].id }
                  })
                }}>
                <Text style={styles.buyText}>Ver mais</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buyButton}>
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => {
                  onAddToCart(products[index]);
                }}>
                {
                  !isLoading && <Ionicons name="cart-outline"
                    size={24}
                    color={appColors.success}
                  />
                }
                {
                  isLoading && <AppLoader size="small" color={appColors.success} />
                }
              </TouchableOpacity>
            </View>
          </View>

        )}
      />

      <Pagination.Basic<{ color: string }>
        progress={progress}
        data={products.map((_) => ({ color: appColors.primary }))}
        size={8}
        dotStyle={{
          borderRadius: 100,
          backgroundColor: appColors.gray,
          marginTop: PAGE_WIDTH * 0.6,
          marginHorizontal: 2,
        }}
        activeDotStyle={{
          backgroundColor: appColors.primary,
        }}
        onPress={onPressPagination}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: defaultBorderRadius,
  },
  buyText: {
    color: appColors.secondary,
    fontSize: 14,
    fontFamily: fonts.bold,
  },
  buyButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  touchable: {
    backgroundColor: appColors.light,
    borderRadius: 8,
    padding: 6,
  },
  row: {
    flexDirection: 'row',
    position: 'relative',
    paddingHorizontal: 16,
    bottom: 34,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: appColors.light,
    fontSize: 18,
    fontFamily: fonts.bold,
  },
  price: {
    color: appColors.success,
    fontSize: 18,
    fontFamily: fonts.bold,
  },
});