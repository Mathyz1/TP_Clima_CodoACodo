import React from 'react';
import { Text, StyleSheet, View, Button, TouchableHighlight } from 'react-native';
import Gradiente from '../components/Gradiente';

const Nosotros = ( {navigation, route} ) => {   
    
    const volver = () => {
        navigation.navigate('Inicio');
    };

    return (  
        <>
            <Gradiente/>
            <View style={styles.contenedor}>
                <Text> Mis Ciudades </Text>

                
                <View>
                    <TouchableHighlight onPress={ () => navigation.navigate("Formulario") } style={styles.btn}>
                        <Text style={styles.textoSubmit}>ir a formulario</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight onPress={ () => volver() } style={styles.btn}>
                        <Text style={styles.textoSubmit}>Volver</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        backgroundColor:"#1f2366",
        padding: 12,
        width:150,
        marginVertical: 10,
    },
    textoSubmit: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
    }
});
 
export default Nosotros;