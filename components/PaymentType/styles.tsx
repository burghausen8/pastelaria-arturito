import { StyleSheet } from "react-native";
import fonts from "@/constants/Fonts";
import colors from "@/constants/Colors";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 19,
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        color: colors.text,
        fontFamily: fonts.bold,
        paddingLeft: 16 
    },
})