import React, { useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";

import SplashScreen from 'react-native-splash-screen'

import { styles } from "../Theme/appTheme";
import BotonCalc from "../components/BotonCalc";
import useCalculadora from "../hooks/useCalculadora";

export const CalculadoraScreens = () => {
    const {
        numeroAnterior,
        numero,
        limpiar,
        positioNegativo,
        btnDelete,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    } = useCalculadora();

    useEffect(() => {
        SplashScreen.hide();
        
    }, [])
    
    return (
        <SafeAreaView style={styles.fondo}>
            <View style={styles.calculadoraContainer}>
                {
                    (numeroAnterior !== '0') && (
                        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
                    )
                }
                <Text style={styles.resultado}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                >
                    {numero}
                </Text>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='C' color='#9b9b9b' accion={limpiar} />
                <BotonCalc texto='+/-' color='#9b9b9b' accion={positioNegativo} />
                <BotonCalc texto='del' color='#9b9b9b' accion={btnDelete} />
                <BotonCalc texto='/' color='#ff9427' accion={btnDividir} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='7' accion={armarNumero} />
                <BotonCalc texto='8' accion={armarNumero} />
                <BotonCalc texto='9' accion={armarNumero} />
                <BotonCalc texto='X' color='#ff9427' accion={btnMultiplicar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='4' accion={armarNumero} />
                <BotonCalc texto='5' accion={armarNumero} />
                <BotonCalc texto='6' accion={armarNumero} />
                <BotonCalc texto='-' color='#ff9427' accion={btnRestar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='1' accion={armarNumero} />
                <BotonCalc texto='2' accion={armarNumero} />
                <BotonCalc texto='3' accion={armarNumero} />
                <BotonCalc texto='+' color='#ff9427' accion={btnSumar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc texto='0' accion={armarNumero} ancho />
                <BotonCalc texto='.' accion={armarNumero} />
                <BotonCalc texto='=' color='#ff9427' accion={calcular} />
            </View>
        </SafeAreaView>
    )
}