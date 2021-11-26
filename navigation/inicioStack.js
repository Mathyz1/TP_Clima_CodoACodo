import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Inicio from "../views/Inicio";
import { View, StyleSheet } from "react-native";



const Stack = createNativeStackNavigator();

const inicioStack = () => {
    return(
        <View style={styles.contenedor}>
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                backgroundColor: '#1f2366',
                //headerTransparent: true,
                
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                
                }
            }}  
        >
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{ title: "Inicio" }}
            />
        </Stack.Navigator>
        </View>
    );
};

export default inicioStack;

const styles = StyleSheet.create({
    contenedor:{
        flex:1
    }
});