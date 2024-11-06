import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "@/constants/Colors";
import { styles } from './styles'

export interface PaymentTypeProps {
    id: number;
    name: string,
    icon: string;
}

export function PaymentType({name, icon}: PaymentTypeProps) {

    return (
        <>
            <View style={styles.container}>
              <Ionicons name={icon as keyof typeof Ionicons.glyphMap} size={24} color={colors.primary} />
              <Text style={styles.name}>{name}</Text>
            </View>   
        </>
    )
}