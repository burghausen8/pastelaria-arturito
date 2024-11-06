import { StyleSheet } from "react-native";
import fonts from "@/constants/Fonts";
import colors from "@/constants/Colors";

export const styles = StyleSheet.create({
    containerSelected: {
        marginHorizontal: 16,
        marginVertical: 8,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 8,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 4
    },
    containerUnselected: {
        marginHorizontal: 16,
        marginVertical: 8,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 8,
        borderColor: colors.borderColor,
        borderWidth: 1,
        borderRadius: 4
    },
    name: {
        fontSize: 14,
        color: colors.text,
        fontFamily: fonts.bold,
        paddingBottom: 8
    },
    resume: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colors.iconsColor,
        paddingVertical: 8
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    trashIcon: {
        padding: 24
    }
})