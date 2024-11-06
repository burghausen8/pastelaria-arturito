import { View, Text } from 'react-native';
import { styles } from './styles';
import LottieView from 'lottie-react-native';
import AppStateEnum from '@/constants/AppState';
import { Button } from '../Button';
import testIds from '@/constants/AppTestIds';



type Props = {
  state: AppStateEnum;
  message: string;
  showButton?: boolean;
  onButtonPress?: Function;
  buttonTitle?: string;
}

export default function AppStatus({ state, message, showButton = false, onButtonPress, buttonTitle }: Props) {

  function handleAssetPath(state: AppStateEnum): string {
    switch (state) {
      case AppStateEnum.success:
        return require("../../assets/animations/success-state.json");
      case AppStateEnum.error:
        return require("../../assets/animations/error-state.json");
      case AppStateEnum.empty:
        return require("../../assets/animations/empty-state.json");
      default:
        return require("../../assets/animations/warning-state.json");
    }
  }

  return (
    <View style={styles.container} testID={testIds.appStatus}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200, height: 200
        }}
        source={handleAssetPath(state)}
      />
      <Text style={styles.text}>{message}</Text>
      {showButton &&
        <View style={{ width: '80%' }}>
          <Button
            label={buttonTitle ?? "Voltar"}
            handleSubmit={() => onButtonPress?.()}
          />
        </View>
      }
    </View>
  );
}