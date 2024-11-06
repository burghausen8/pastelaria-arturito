import appColors from "@/constants/Colors";
import { StyleSheet } from "react-native";
import fonts from "@/constants/Fonts";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: appColors.primary,
        borderRadius: 5,
        height: 57,
        alignItems: 'center',
        justifyContent: 'center',
        color: appColors.light,
        marginBottom: 15,
        marginTop: 16,
        paddingHorizontal: 24,
        fontFamily: fonts.regular,
    },
    buttonText: {
        fontSize: 14,
        color: appColors.light,
        fontFamily: fonts.bold,
    }
});