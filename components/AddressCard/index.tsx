import { TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import strings from "@/constants/Strings";
import colors from "@/constants/Colors";
import { styles } from './styles'
import { Button } from "../Button";

export interface AddressProps {
    id: string;
    name: string,
    address: string;
    phone: string;
    handleEdit: Function;
    handleRemove: Function;
    isSelected?: boolean;
}

export function AddressCard({name, address, phone, handleEdit, handleRemove, isSelected}: AddressProps) {

    return (
        <>
            <View style={isSelected ? styles.containerSelected : styles.containerUnselected}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.resume}>{address}</Text>
              <Text style={styles.resume}>{phone}</Text>
              <View style={styles.containerButton}>
                <Button label={strings.edit} handleSubmit={handleEdit}/>
                <TouchableOpacity onPress={() => handleRemove}>
                    <Ionicons style={styles.trashIcon}
                          size={24}
                          color={colors.iconsColor}
                          name={"trash-outline"}
                    />
                </TouchableOpacity>
            </View>
            </View>   
        </>
    )
}