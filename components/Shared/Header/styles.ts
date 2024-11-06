import { StyleSheet } from "react-native";
import fonts from '@/constants/Fonts';
import colors from '@/constants/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  wrapperContent: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: fonts.bold,
    color: colors.text,
    fontSize: 15,
    marginLeft: 16,
  },
  leftContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  rightContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  divider: {
    height: 1,
    backgroundColor: colors.borderColor,
    width: "100%",
  },
});
