import appColors from "@/constants/Colors";
import { StyleSheet } from "react-native";
import fonts from "@/constants/Fonts";

export const styles = StyleSheet.create({
    wrapperProduct: {
        flexGrow: 1,
        height: 272,
        borderWidth: 0.5,
        borderColor: appColors.lightGray,
        padding: 16,
        marginTop: 16,
        marginBottom: 16,
        borderRadius: 6,
        marginRight: 16,
    },
    image: {
        height: 100,
        borderRadius: 6
    },
    titleProduct: {
        fontFamily: fonts.bold,
        fontSize: 12,
        marginTop: 16
    },
    price: {
        fontFamily: fonts.regular,
        fontSize: 14,
        marginTop: 8,
        color: appColors.primary
    },
    discount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    discountText: {
        fontFamily: fonts.regular,
        fontSize: 10,
        color: appColors.regularGray,
        textDecorationLine: 'line-through'
    },
    discountTextRight: {
        fontFamily: fonts.regular,
        fontSize: 10,
        color: appColors.tertiary,
    },
    wrapperButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 6,
        left: 6,
        right: 6,
        marginTop: 12,
        height: 24
    },
    minus: {
        flex: 1,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderColor: appColors.lightGray,
        width: 24,
    },
    minusText: {
        fontFamily: fonts.regular,
        fontSize: 16,
        color: appColors.regularGray,
    },
    quantity: {
        backgroundColor: appColors.light,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        fontFamily: fonts.regular,
        color: appColors.tertiary,
        fontSize: 16,
    },
    plus: {
        flex: 1,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1,
        borderColor: appColors.lightGray,
        width: 24,
    },
    plusText: {
        fontFamily: fonts.regular,
        fontSize: 16,
        color: appColors.regularGray,
    }
})