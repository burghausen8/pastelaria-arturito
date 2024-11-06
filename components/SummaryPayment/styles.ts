import { StyleSheet } from "react-native";
import fonts from '@/constants/Fonts';
import colors from '@/constants/Colors';

export const styles = StyleSheet.create({
    summary: {
        borderWidth: 0.5,
        borderColor: colors.borderColor,
        paddingHorizontal: 16,
        paddingVertical: 2,
        marginVertical:16,
        borderRadius: 4,
        marginHorizontal: 16,
      },
      itemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 12
    },
    descriprion: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colors.iconsColor
    },
    price: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: colors.neutralGray
    },
    totalPriceDescription: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.text
    },
    totalPrice: {
        fontFamily: fonts.bold,
        fontSize: 12,
        color: colors.primary,
        paddingBottom: 12        
    },
    dashLine: {
        marginTop: 16,
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderStyle: 'dashed',
        width: '100%',
        height: 1
      }
});
