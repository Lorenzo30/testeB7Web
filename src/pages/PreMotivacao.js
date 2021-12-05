import React, { useState } from 'react';
import { View, Button, Platform, Text, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import DefaultButton from "../components/DefaultButton";
import styled from 'styled-components/native';
import PushNotification from "react-native-push-notification";
import frasesPreTreino from './frasesPreTreino';


import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';

const Container = styled.SafeAreaView`
 flex:1;
 background-color:#fff;
`;
const AreaHorario = styled.View`
flex-direction:row;
align-items:center;
flex:1;
justify-content:center;
margin-top:5px;

`;

const AreaMotivador = styled.View`
flex-direction:row;
flex:2;
align-items:flex-end;
justify-content:flex-start;
`;

const AreaMensagemMotivador = styled.View`
flex:2;
max-width:245px;
margin-left:60px;
margin-right:10px;
`;


function App(props) {

  props.navigation.setOptions({
    headerTitle: "Pré Motivação",
    headerTintColor: '#fff'
  })

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);

  const dateTeste = new Date(props.horarioTreino);
  const [horarioTreino,setHorario] = useState(dateTeste.getHours()+":"+dateTeste.getMinutes())

  const onChange = (event, selectedDate) => {

  AdMobInterstitial.setAdUnitID('ca-app-pub-3987405359474153/6056176926');
  AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
  AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());

    const newDate = selectedDate;
    newDate.setMinutes(selectedDate.getMinutes() - 15);     
    PushNotification.cancelAllLocalNotifications();
    PushNotification.localNotificationSchedule({
      title:"Seu motivador!",
      actions : [ "Entendi já estou me arrumando!" ,  "Não to muito afim hoje!" ] ,
      date: newDate, 
      allowWhileIdle: false,
      largeIcon : "ic_launcher" ,
      message:mensagensPreTreino15Min[Math.floor((Math.random() *  (9 - 1)) + 1)].msg,
      repeatType:'day',
      id:"1"
    });
     

     props.setHorarioTreino(selectedDate);
     const currentDate = selectedDate || date;
     setShow(false);
     setHorario(selectedDate.getHours()+":"+selectedDate.getMinutes())
  };

  const showTimepicker = () => {
    setShow(true);
  };
  
  return (
    <Container>
       <AdMobBanner
                adSize="fullBanner"
                adUnitID="ca-app-pub-3987405359474153/7560830288"
                testDevices={[AdMobBanner.simulatorId]}
                onAdFailedToLoad={error => console.error(error)}
            />
      <AreaHorario>
        <DefaultButton width="150" onPress={showTimepicker}>
          <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:"center" }}>
            <Image source={require('../images/hours.png')} style={{ width: 32, height: 32,maxWidth:32,flex:1 }} />
            <Text style={{flex:2,marginLeft:20,color:"#fff"}}>{horarioTreino}</Text>
          </View>
        </DefaultButton>
      </AreaHorario>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <AreaMensagemMotivador>
        <Text style={{padding:20,marginTop:10,fontWeight:"800",borderWidth:2,borderColor:"#284A66",borderRadius:50}}> {props.name}, selecione seu horario de treino.. vou te mandar mensagens para te motivar e ajudar você a alcançar seu objetivo, boraa!. </Text>
      </AreaMensagemMotivador>
      <AreaMotivador>
        <Image source={require("../images/motivador.png")} style={{ width: 100, height: 200, flex: 2, marginRight: 120 }} resizeMode="contain" />
      </AreaMotivador>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
    horarioTreino: state.userReducer.horarioTreino
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
    setHorarioTreino: (horarioTreino) => dispatch({ type: 'SET_HORARIO_TREINO', payload: { horarioTreino } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);