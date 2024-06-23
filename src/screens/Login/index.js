import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native"
import MeuInput from "../../components/MeuInput";
import { CORES } from "../../constants/cores";
import MeuButton from "../../components/MeuButton";

function Login({navigation}){

    const logar = () => {
        
        navigation.navigate('Home')

    };

    return(
        <View style={styles.boxLogin}>
            <Text style={styles.titulo}>BookConnect</Text>

            <MeuInput
                label="E-mail"
                placeHolder="Digite seu e-mail aqui"
                comMascara={false}
            />

            <MeuInput
                label="Senha"
                placeHolder="Digite sua senha aqui"
                comMascara={true}
            />

            <MeuButton
                value="Entrar"
                callback={logar}
            />



        </View>
    );
}

const styles =  StyleSheet.create({
    boxLogin: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 40,
        color: CORES.COR_PRIMARIA,
        fontWeight: 700,
        marginBottom: 150
    }

});

export default Login;