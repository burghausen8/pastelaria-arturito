import { SafeAreaView, StyleSheet, TouchableOpacity, FlatList, View, AppState } from "react-native";
import strings from "@/constants/Strings";
import colors from "@/constants/Colors";
import Header from "@/components/Shared/Header";
import { Ionicons } from "@expo/vector-icons";
import { ROUTES } from "@/constants/Routes";
import { AddressCard, AddressProps } from "@/components/AddressCard";
import { useState } from "react";
import { Button } from "@/components/Button";
import { router } from "expo-router";
import { useEffect } from "react";
import { Address } from "@/core/types/address";
import { AppLoader } from "@/components/Loader";
import AppStatus from "@/components/AppStatus";
import AppStateEnum from "@/constants/AppState";

export default function ShippingScreen() {

    //const { addresses, loading, error, fetchAddresses } = addressesStore();

    // useEffect(() => {
    //     fetchAddresses();
    // }, [fetchAddresses]);

    // let hasAddress = addresses.length >0;
    // let isSuccessful = !loading && !error;

    const [addressSelected, setAddressSelected] = useState<Address | null>(null);

    const handleCardPress = (address: Address) => {
        setAddressSelected(address)
    }

    const handleAddressEditPress = (id: string) => {
        // TODO: editar o item
    }

    const handleAddressRemovePress = (id: string) => {
        // TODO: remover o item
    }
    // const data: AddressProps[] = [
    //     {
    //       id: 1,
    //       name: 'Fabricio Burghausen',
    //       address: '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
    //       phone: '+99 1234567890',
    //       handleEdit: () => console.log('Endereço 1 editado'),
    //       handleRemove: () => console.log('Endereço 1 editado'),
    //     },
    //     {
    //       id: 2,
    //       name: 'Fabricio Burghausen',
    //       address: '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
    //       phone: '+99 1234567890',
    //       handleEdit: () => console.log('Endereço 1 editado'),
    //       handleRemove: () => console.log('Endereço 1 editado'),
    //     },
    //     {
    //       id: 3,
    //       name: 'Fabricio Burghausen',
    //       address: '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
    //       phone: '+99 1234567890',
    //       handleEdit: () => console.log('Endereço 1 editado'),
    //       handleRemove: () => console.log('Endereço 1 editado'),
    //     },
    //   ];

    //   return (
    //     <SafeAreaView style={styles.container}>
    //         <Header 
    //             title={strings.shippingTitle}
    //             backButton={true}
    //             rightButtonIcon={<Ionicons name="add" size={24} color={colors.primary} />}
    //             //rightButtonRoute={ROUTES.CART}
    //         />
    //         {loading && <AppLoader/>}
    //         {
    //             error && 
    //             <AppStatus state={AppStateEnum.error}
    //             message="Erro ao carregar endereços"
    //             />
    //         }
    //         {
    //             isSuccessful && !hasAddress && 
    //             <AppStatus state={AppStateEnum.empty}
    //                 message="Você não tem endereços cadastrados"
    //                 buttonTitle="Adicionar endereço"
    //                 showButton
    //                 onButtonPress={() =>
    //                     //TODO: ir para a tela de adicionar endereço
    //                 router.push(ROUTES.CART)}
    //                 />
    //         }
    //         {
    //             isSuccessful && hasAddress &&
    //             <View style={styles.contentWrapper}>
    //             <FlatList
    //                 data={addresses}
    //                 renderItem={({ item, index }) => (
    //                     <TouchableOpacity onPress={() => handleCardPress(item)}>
    //                         <AddressCard
    //                             id={item.id}
    //                             name={item.name}
    //                             address={item.infos}
    //                             phone={item.phone}
    //                             handleEdit={() => handleAddressEditPress(item.id)}
    //                             handleRemove={() => handleAddressRemovePress(item.id)}
    //                             isSelected={ addressSelected === null ? index === 0 : item.id === addressSelected.id }
    //                         />
    //                     </TouchableOpacity>
    //                 )}
    //                 keyExtractor={(item) => item.id.toString()}
    //                 contentContainerStyle={styles.listContent}
    //             />
    //             <View style={styles.buttonContainer}>
    //                 <Button 
    //                     label={strings.next} 
    //                     handleSubmit={() => {
    //                         router.push(ROUTES.PAYMENT)
    //                     }} 
    //                 />
    //             </View>
    //         </View>
    //         }

    //     </SafeAreaView>
    // );
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
    listContent: {
        flexGrow: 1,
    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: colors.background,
    },
});