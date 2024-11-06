import { StyleSheet } from "react-native";
import colors from "@/constants/Colors";
import fonts from "@/constants/Fonts";

export const styles = StyleSheet.create({
    inputContainerFocused: { 
      borderColor: colors.primary,
    },
    inputContainer: { 
      height: 48,
      borderWidth: 1,
      width: '100%',
      borderColor: colors.borderColor,
      marginBottom: 8,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      fontFamily: fonts.regular,
    },
    icon: { 
      marginHorizontal: 8,
    },
    iconFocused: { 
      color: colors.primary,
    },
    textInput: {
      fontFamily: fonts.regular,
      width: '100%',
    },
    error: { 
      color: colors.redAlert,
    }
  });
  