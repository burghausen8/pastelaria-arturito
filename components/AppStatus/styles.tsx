import appColors from '@/constants/Colors';
import fonts from '@/constants/Fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        fontFamily: fonts.bold,
        color: appColors.text,
        textAlign: "center",
    },
})

