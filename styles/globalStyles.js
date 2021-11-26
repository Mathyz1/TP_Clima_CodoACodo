import { StyleSheet } from "react-native";

//borderBottomWidth: StyleSheet.hairlineWidth una linea debajo del texto
const globalStyles = StyleSheet.create({
    titulo:{
        fontSize:24,
        fontWeight:"bold",
        padding: 4,
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    parrafo:{
        fontSize:16,
        padding: 4,
    }
});

export default globalStyles;
//https://fonts.google.com/specimen/Poppins
//#1f2366
