import appColors from "@/constants/Colors";
import { StyleSheet } from "react-native";
import fonts from "@/constants/Fonts";
import colors from "@/constants/Colors";

export const styles = StyleSheet.create({
    wrapperProduct: {
        paddingHorizontal: 16,
        paddingTop: 16
    },
    border: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        width: '100%',
        borderColor: colors.borderColor,
        padding: 16,
        borderRadius: 4
    },
    image: {
        width: 72,
        height: 72,
        resizeMode: 'cover'
    },
    content: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexGrow: 2,
        paddingHorizontal: 12
    },
    details: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleProduct: {
        fontFamily: fonts.bold,
        fontSize: 12
    },
    price: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: appColors.primary
    },
    quantity: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: appColors.tertiary,
    },

})