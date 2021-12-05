import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image,StatusBar } from "react-native";
import BotaoDefault from "../partials/botaoDefault";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
  } from 'react-native-admob';


function HomeScreen(props) {
    
    
  props.navigation.setOptions({
    headerTitle: "Recomendações",
    headerTintColor: '#fff'
  })
  



    return (
        <View style={styles.container}>
             <StatusBar
                backgroundColor="#284A66" barStyle="light-content"
            />
              <AdMobBanner
               adSize="fullBanner"
               adUnitID="ca-app-pub-3987405359474153/2308503607"
               testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
             />
            <View style={styles.comoFunciona}>
                <Text adjustsFontSizeToFit={true} style={styles.txt1}>"Para bom uso do app recomendamos que você entre diariamente para o sistema agendar novas frases."</Text>
                <Text adjustsFontSizeToFit={true} style={styles.txt1}>"Estamos sempre pensando em como melhorar a expêriencia do usuário e para isso temos a política do bom usso do app."</Text>
            </View>
            <View style={styles.containerImagem}> 
               <Image source={require("../images/motivador.png")} style={styles.motivadorImagem} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#A1C9EA",
        justifyContent: "center",
        alignItems: "center"
    },
    motivadorImagem:{
        width:200,
        height:350
    },
    containerImagem:{
        display:"flex",
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-start"
    },
    comoFunciona:{
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        padding:20
    },
    txt1:{
        fontWeight:"700",
        fontSize:15
    },
    txt2:{
      marginTop:20,
      fontWeight:"700",
      fontSize:15
    }

});
export default HomeScreen;