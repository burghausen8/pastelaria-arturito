import { router } from "expo-router";
import { styles } from './styles'
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, } from "@expo/vector-icons";
import colors from '@/constants/Colors'
import { ReactNode } from "react";
import { Href } from 'expo-router';

interface Props {
  title: string;
  backButton: boolean;
  rightButtonIcon?: ReactNode;
  rightButtonRoute?: Href;

}

export default function Header({ title, backButton, rightButtonIcon, rightButtonRoute }: Props) {
  const handleBackButtonPress = () => {
    router.back();
  };

  const handleRightButtonPress = () => {
    if (rightButtonRoute) {
      router.push(rightButtonRoute);
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperContent}>
        <View style={styles.leftContent}>
        {backButton && (
          <Ionicons
            size={24}
            color={colors.text}
            name={"arrow-back"}
            onTouchEnd={handleBackButtonPress}
          />
        )}
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        </View>
        <View style={styles.rightContent}>
        {rightButtonIcon && (
          <TouchableOpacity onPress={handleRightButtonPress}>
          {rightButtonIcon}
        </TouchableOpacity>
        )}
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
}
