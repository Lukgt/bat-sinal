import React from 'react';
import {StyleSheet,View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

export function Form() {
  return (
    <View style={styles.container}>
        <View style={styles.headerForm}>
            <Image
              source={
                require('../assets/bat-signal-logo.png')
              }
              style={{height:70, width:80, resizeMode:'contain'}}
            />   
        </View>

        <Text style={styles.labelForm}>Nome</Text>
        <TextInput style={[styles.inputText, styles.input]} placeholder='Escreva o seu nome'></TextInput>

        <Text style={styles.labelForm}>Telefone de contato</Text>
        <TextInput style={[styles.inputText, styles.input]} placeholder='Insira um número de contato' keyboardType="numeric" ></TextInput>

        <Text style={styles.labelForm}>Localização atual</Text>
        <TextInput style={[styles.inputText, styles.input]} placeholder='Digite sua localização' ></TextInput>

        <Text style={styles.labelForm}>Mensagem</Text>
        <TextInput style={styles.inputText} placeholder='Acrescente informação relevante' multiline={true} numberOfLines={5}></TextInput>

        <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:30
    },
    headerForm:{
        flex:0.1,
        width:"100%",       
        marginTop:30,
        paddingRight:20,
        justifyContent:'center',
        alignItems:'flex-end',
    },
    inputText:{
        fontSize:18,
        borderWidth:2,
        borderRadius: 5,
        width:"90%",       
        marginLeft:15,
        paddingLeft:10,
        backgroundColor: 'yellow'
    },
    input:{
      height:40
    },
    labelForm:{
        fontSize:18,
        marginTop:20,
        marginBottom:3,
        marginLeft:8,
        paddingLeft:10,
        color: 'white'
    },
    textButton: {    
      backgroundColor: '#000',
      fontSize: 25,
      color:'#fff',
      padding: 10,
      borderRadius: 5,
      width:'90%',
      textAlign:'center',
      marginTop:30,
      marginLeft:15,
  },
})