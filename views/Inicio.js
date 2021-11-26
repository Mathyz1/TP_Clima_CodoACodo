import React from 'react';
import { Text, StyleSheet, View, Button, Dimensions } from 'react-native';
import globalStyles from '../styles/globalStyles';

import Gradiente from '../components/Gradiente';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';


const Inicio = ({navigation}) => {
    
    const visitarNosotros = () => {
        navigation.navigate('Nosotros');
    };

    const visitarCiudades = () => {
        navigation.navigate('Ciudades');
    };

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
            return (  
                <>
                <Gradiente/>
                <View style={styles.contenedor}>
                    
                    <Text style={styles.nombreAplicacion}>App Clima</Text>
                    <Text style={[globalStyles.titulo, styles.poppins]}>Descripcion</Text>
                    <Text>Aca va la descripcion de la aplicacion</Text>
                    <Text>Esta aplicacion se encarga de mostrar el clima actual de las ciudades que elijas</Text>
                    <Text style={[globalStyles.titulo, styles.poppins]}>Uso</Text>
                    <Text>Aca va como se usa la aplicacion</Text>  
                     
                </View>
                </>
            );
      }
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
    poppins:{
        fontFamily: "Poppins_500Medium",
    },
});

export default Inicio;