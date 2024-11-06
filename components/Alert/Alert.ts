import { Alert } from 'react-native';


export const showAlert = (
    title: string,  
    text: string,   
    buttonText: string, 
    onPress: () => void 
) => {
    Alert.alert(
        title, 
        text,  
        [
            {
                text: buttonText, 
                onPress,          
            },
        ]
    );
};
