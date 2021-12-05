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
        headerTitle: "Como funciona",
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
                <Text adjustsFontSizeToFit={true} style={styles.txt1}>"Tudo bem?, Eu quero te ajudar a treinar quase todos os dias.. e para isso
                 tenho diversas funções aqui que vão te ajudar muito a evoluir." </Text>

                 <Text adjustsFontSizeToFit={true} style={styles.txt2}>"As frases motivacionais é para você ler e se motivar, elas foram pensadas
                  estrategicamente para dar aquele ânimo diário."
                  </Text>
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
        height:200
    },
    containerImagem:{
        display:"flex",
        flex:2,
        justifyContent:"flex-end",
        alignItems:"flex-start"
    },
    comoFunciona:{
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        padding:20,
        flex:1
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