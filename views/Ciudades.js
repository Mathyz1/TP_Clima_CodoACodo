import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
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

                <Button
                    title="ir a formulario"
                    onPress={ () => navigation.navigate("Formulario") }
                />
                <Button
                    title="Volver"
                    onPress={ () => volver() }
                />
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
});
 
export default Nosotros;