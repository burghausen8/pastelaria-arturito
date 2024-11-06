import { Image, Text, View, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from './styles'
import { Product } from "@/core/types/product";
import { AppLoader } from "../Loader";
import { ROUTES } from "@/constants/Routes";
import { router } from "expo-router";

type Props = {
    product: Product;
    cartCount: number;
    onIcrement: () => void;
    onDecrement: () => void;
    disabled: boolean;
    width?: number;

}
export function ProductCard({ product, disabled, onIcrement, onDecrement, cartCount, width }: Props) {

    const navigateToProductDetails = {
        pathname: ROUTES.PRODUCT_DETAILS,
        params: { productId: product.id }
    }

    return (
        <>
            <View style={[styles.wrapperProduct, { width: width ? width : 150 }]}>
                <Pressable
                    onPress={() => router.push(navigateToProductDetails)}
                >
                    <>
                        <Image
                            source={{
                                uri: product.image
                            }}
                            style={styles.image}
                        />
                        <Text style={styles.titleProduct} numberOfLines={2}>
                            {product.name}
                        </Text>
                        <Text style={styles.price}>
                            {product.bestPrice}
                        </Text>

                        <View style={styles.discount}>
                            <Text style={styles.discountText}>
                                {product.listPrice}
                            </Text>
                            <Text style={styles.discountTextRight}>
                                {product.discountPercentage + ' off'}
                            </Text>
                        </View>

                    </>
                </Pressable>
                <View style={styles.wrapperButton}>
                    <TouchableOpacity style={styles.minus}
                        onPress={() => {

                            onDecrement()
                        }}
                        disabled={cartCount === 0 || disabled}>
                        <Text style={styles.minusText}> - </Text>
                    </TouchableOpacity>

                    <View style={styles.quantity}>
                        {
                            disabled ?
                                <AppLoader size={'small'} /> :
                                <Text style={styles.quantityText}> {cartCount} </Text>
                        }
                    </View>
                    <TouchableOpacity style={styles.plus}
                        onPress={() => {

                            onIcrement()
                        }}
                        disabled={disabled}
                    >
                        <Text style={styles.plusText}> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}