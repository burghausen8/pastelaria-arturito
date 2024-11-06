import appColors from "@/constants/Colors";
import { ActivityIndicator, ActivityIndicatorProps } from "react-native";

type Props = ActivityIndicatorProps

export function AppLoader(props?: Props) {
 return (
  <ActivityIndicator
   size={props?.size ?? 'large'}
   color={props?.color ?? appColors.tertiary}
   style={{
    justifyContent: 'center',
    flex: 1,
   }} />
 )
}