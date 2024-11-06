import { TouchableOpacity, Text } from "react-native";
import { styles } from "../Button/styles";
import appColors from "@/constants/Colors";
import testIds from "@/constants/AppTestIds";

interface ButtonProps {
    label: string;
    handleSubmit: Function
    color?: string;
}

export function Button({ label, handleSubmit, color }: ButtonProps) {

    return (
        <TouchableOpacity style={
            [styles.button,
            { backgroundColor: color ? color : appColors.primary }
            ]} onPress={() => handleSubmit()}
            testID={testIds.appButton}
            >
            <Text style={styles.buttonText} >{label}</Text>
        </TouchableOpacity>
    )

}