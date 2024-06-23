import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Text } from "react-native";

const MeuInput = (props) =>{

    return (
        <SafeAreaView>
            <Text>{ props.label }</Text>
            <TextInput
            style={ styles.input }
            placeholder={ props.placeHolder }
            secureTextEntry={ props.comMascara }/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 3,
        padding: 10,
        width: 320,
        borderRadius: 4,
        color: '#1a1a1a',
        fontSize:18
    }
});

export default MeuInput;