import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#000',

    },
    calculadoraContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultado: {
        fontSize: 40,
        color: 'white',
        textAlign: 'right',
        marginBottom: 10
    },
    resultadoPequeno: {
        fontSize: 27,
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'right'

    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        marginHorizontal: 10
    },
    boton: {
        width: 80,
        height: 77,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    }
});
