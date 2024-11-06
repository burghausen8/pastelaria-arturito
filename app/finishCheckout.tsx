import { SafeAreaView, StyleSheet, TouchableOpacity, FlatList, View } from "react-native";
import strings from "@/constants/Strings";
import colors from "@/constants/Colors";
import { ROUTES } from "@/constants/Routes";
import AppStatus from "@/components/AppStatus";
import AppStateEnum from "@/constants/AppState";
import { router } from "expo-router";

export default function FinishCheckoutScreen() {

    const handleCardPress = () => {
       router.navigate(ROUTES.TABS)
    }

      return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentWrapper}>
               <AppStatus
                    state={AppStateEnum.success}
                    message={strings.finishCheckoutMessage}
                    showButton={true}
                    onButtonPress={handleCardPress}
               />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    contentWrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
});