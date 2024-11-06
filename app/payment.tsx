import { SafeAreaView, StyleSheet, TouchableOpacity, FlatList, View } from "react-native";
import strings from "@/constants/Strings";
import colors from "@/constants/Colors";
import Header from "@/components/Shared/Header";
import { ROUTES } from "@/constants/Routes";
import { PaymentType, PaymentTypeProps } from "@/components/PaymentType";
import { router } from "expo-router";

export default function PaymentScreen() {

    const handleCardPress = (type: PaymentTypeProps) => {
       if (type.id == 2) {
            router.push(ROUTES.FINISHCHECKOUT)
       }
    }

    const data: PaymentTypeProps[] = [
        {
          id: 1,
          name: 'Credit Card Or Debit',
          icon: 'card',
        },
        {
          id: 2,
          name: 'Pix',
          icon: 'logo-usd',
        },
        {
          id: 3,
          name: 'Bank Transfer',
          icon: 'business',
        },
      ];

      return (
        <SafeAreaView style={styles.container}>
            <Header 
                title={strings.paymentTitle}
                backButton={true}
            />
            <View style={styles.contentWrapper}>
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => handleCardPress(item)}>
                            <PaymentType
                                id={item.id}
                                name={item.name}
                                icon={item.icon}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
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