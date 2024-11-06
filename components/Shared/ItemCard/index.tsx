import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from '@/constants/Colors';
import { styles } from './styles'

export interface ItemCardProps {
    image: string;
    title: string;
    price: string;
    quantity: number;
    id: string;
    handleRemove: Function
}

export function ItemCard({ image, title, price, quantity, handleRemove, id }: ItemCardProps) {

    return (
        <>
            <View style={styles.wrapperProduct} testID={`item-card-${id}`}>
                <View style={styles.border} >
                    <Image
                        source={{ uri: image }}
                        style={styles.image}
                    />
                    <View style={styles.content}>
                        <Text style={styles.titleProduct}>
                            {title}
                        </Text>
                        <Text style={styles.price}>
                            {price}
                        </Text>
                    </View>
                    <View style={styles.details}>
                        <Ionicons
                            size={24}
                            color={colors.iconsColor}
                            name={"trash-outline"}
                            onTouchEnd={handleRemove}
                        />
                        <Text style={styles.quantity}>
                            {quantity}
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}