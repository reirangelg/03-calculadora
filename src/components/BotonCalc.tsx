import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from '../Theme/appTheme';

interface Props {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: (numeroTexto: string) => void;
}
const BotonCalc = ({ texto, color = '#2e2e2e', ancho = false, accion }: Props) => {
  
    return (

        <TouchableOpacity onPress = {() => accion(texto)}>
            
            <View style={{
                ...styles.boton,
                backgroundColor: color,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: (color === '#9b9b9b') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )

}
export default BotonCalc