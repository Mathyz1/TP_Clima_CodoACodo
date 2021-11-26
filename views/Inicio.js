import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import globalStyles from '../styles/globalStyles';

//import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from "react-native-linear-gradient";

const Inicio = ({navigation}) => {
    
    const visitarNosotros = () => {
        navigation.navigate('Nosotros');
    };

    const visitarCiudades = () => {
        navigation.navigate('Ciudades');
    };

    return (  
        <View style={styles.contenedor}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    Sign in with Facebook
                </Text>
            </LinearGradient>
            <Text style={styles.nombreAplicacion}>App Clima</Text>
            <Text style={globalStyles.titulo}>Descripcion</Text>
            <Text>Aca va la descripcion de la aplicacion</Text>
            <Text style={globalStyles.titulo}>Uso</Text>
            <Text>Aca va como se usa la aplicacion</Text>       
        </View>
    );
};
 
const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        marginTop:30,
    },
    nombreAplicacion:{
        fontSize:30,

    },

    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
});

export default Inicio;