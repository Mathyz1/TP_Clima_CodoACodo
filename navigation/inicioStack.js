import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Inicio from "../views/Inicio";

const Stack = createNativeStackNavigator();

const inicioStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                backgroundColor: '#1f2366',
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
    );
};

export default inicioStack;