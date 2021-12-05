import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableHighlight, StatusBar,SafeAreaView,Image } from "react-native";
import { StackActions,CommonActions } from '@react-navigation/native';
import BotaoDefault from "../partials/botaoDefault";
import styled from 'styled-components/native';
import { connect } from 'react-redux';


import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob';


const Objetivo = styled.View`
width:240px;
height:100px;
border-radius:20px;
background-color:#eee;
margin-top:10px;
margin-bottom:20px;
border-color:#284A66;
border-width:2px;
text-align:center;
justify-content:center;
align-items:center;

`;


function HomeScreen(props) {
    return (
        <SafeAreaView style={styles.container}>
              <AdMobBanner
                adSize="fullBanner"
                adUnitID="ca-app-pub-3987405359474153/3333455449"
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
            />
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#284A66" barStyle="light-content"
            />

           <Objetivo> 
              <Image style={{width:55,height:55}}source={require("../images/foguete.png")} />
              <Text style={{color:"#284A66",fontWeight:"700",fontSize:15,textAlign:"center",marginTop:5}}>Seu objetivo: {props.level}</Text>
            </Objetivo>   
            <View style={styles.botoes}>
                <TouchableHighlight onPress={() => props.navigation.navigate('ComoFunciona')} underlayColor={"transparent"}>
                    <View style={{flexDirection:"row",padding:10,width:200,backgroundColor:"#284A66",borderRadius:20,alignItems:"center",justifyContent:"center"}}>
                       <Image source={require("../images/ponto-de-interrogacao.png")} style={{width:32,height:32}}/> 
                       <BotaoDefault texto="Como funciona" maxWidth={200} maxHeight={40} />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{marginTop:10}} onPress={() => props.navigation.navigate('Frases')} underlayColor={"transparent"}>
                <View style={{flexDirection:"row",padding:10,width:200,backgroundColor:"#284A66",alignItems:"center",borderRadius:20,justifyContent:"center"}}>
                    <Image source={require("../images/caixa-de-texto.png")} style={{width:32,height:32}}/> 
                    <BotaoDefault texto="Frases" maxWidth={200} maxHeight={40} />
                </View>    
                </TouchableHighlight>
                <TouchableHighlight style={{marginTop:10}} onPress={() => props.navigation.navigate('PreMotivacao')} underlayColor={"transparent"}>
                <View style={{flexDirection:"row",maxWidth:250,alignItems:"center",borderRadius:20,width:200,backgroundColor:"#284A66",padding:10,justifyContent:"center"}}>
                    <Image source={require("../images/motivacao.png")} style={{width:32,height:32,marginLeft:5}} /> 
                    <BotaoDefault texto="Pré motivação"  maxHeight={40} />
                </View>        
                </TouchableHighlight>
            </View>
        </View>
        </SafeAreaView>
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
    botoes: {
        flex: 1
    },
    motivador: {
        display: "flex",
        flex: 3,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    botaoMotivar: {
        justifyContent: "center"
    },
    textoIntro: {
        fontSize: 10,
        flex: 1,
        justifyContent: "center",
        marginTop: 10,
        alignItems: "center"
    },
    txtIntro: {
        fontWeight: "500",
        fontSize: 15,
        justifyContent: "center",
        marginLeft: -5,
        fontWeight: "700"
    },
    motivadorImagem: {
        width: 10,
        flex: 1,
        height: 300,
        maxWidth: 200
    }
});

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        workoutDays:state.userReducer.workoutDays,
        level:state.userReducer.level
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
        setWorkoutDays:(workoutDays) => dispatch({type:'SET_WORKOUTDAYS',payload:{workoutDays}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);