import React from 'react';
import { Text, StyleSheet, View, Button, Dimensions } from 'react-native';
import globalStyles from '../styles/globalStyles';

import Gradiente from '../components/Gradiente';

import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_500Medium, Poppins_300Light } from '@expo-google-fonts/poppins';


const Inicio = ({navigation}) => {
    
    const visitarNosotros = () => {
        navigation.navigate('Nosotros');
    };

    const visitarCiudades = () => {
        navigation.navigate('Ciudades');
    };

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_300Light
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
            return (  
                <>
                <Gradiente
                    colorGradiente={['#97A7B7', '#B98A90', '#745B83']}
                />
                <View style={styles.contenedor}>
                    
                    <Text style={styles.nombreAplicacion}>App Clima</Text>
                    <Text style={[globalStyles.titulo, styles.poppins]}>Descripcion</Text>
                    <Text style={styles.poppinsLight}>Aca va la descripcion de la aplicacion</Text>
                    <Text style={styles.poppinsLight}>Usando Poppins: Esta aplicacion se encarga de mostrar el clima actual de las ciudades que elijas</Text>
                    <Text style={[globalStyles.titulo, styles.poppins]}>Uso</Text>
                    <Text>Sin poppins: Aca va como se usa la aplicacion</Text>  
                     
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
    poppinsLight:{
        fontFamily:"Poppins_300Light",
       
    }
});

export default Inicio;