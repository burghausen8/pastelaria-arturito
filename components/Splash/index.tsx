import { View, StyleSheet, Text } from "react-native";
import LottieView from 'lottie-react-native';
import fonts from "@/constants/Fonts";
import appColors from "@/constants/Colors";

type Props = {
 onCompleted: (status: boolean) => void;
}

export default function SplashAnimation({ onCompleted }: Props) {

 return (
  <View style={styles.container}>
   <LottieView
    autoPlay
    loop={false}
    style={{
     width: 300,
     height: 300,
    }}
    source={
     require('../../assets/animations/splash.json')
    }
    duration={4000}
    onAnimationFinish={
     () => { onCompleted(false) }
    }
   />
   <View>
    <Text style={styles.text}>
     Pastelaria do Arturito
    </Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1, justifyContent: 'center', alignItems: 'center'
 },
 text: {
  fontSize: 18,
  fontFamily: fonts.regular
 },
 divider: {
  height: 1,
  backgroundColor: appColors.gray,
  width: '60%',
 }
})