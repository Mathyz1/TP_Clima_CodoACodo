import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

const Nosotros = ( {navigation, route} ) => {
      
    const volver = () => {
        navigation.navigate('Inicio');
    };

    return (  
        <View style={styles.contenedor}>
            <Text style={globalStyles.titulo}>Solucion</Text>
            <Text style={globalStyles.parrafo}>Aca va la solucion que implementamos en la aplicacion</Text>

            <Text style={globalStyles.titulo}>Quienes somos</Text>
            <Text style={globalStyles.parrafo}>Aca va quienes somos</Text> 
            <Text style={globalStyles.parrafo}>Vanina Eliana Armida </Text> 
            <Text style={globalStyles.parrafo}>Fernando Daniel González</Text> 
            <Text style={globalStyles.parrafo}>Matias Nicolas Rivero</Text> 

            <Text style={globalStyles.titulo}>Documentacion UX</Text>
            <Text style={globalStyles.parrafo}>Aca va la documentacion UX</Text>     
            
            <Button
                
                title="Volver"
                onPress={ () => volver() }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop:30,
    },
});
 
export default Nosotros;