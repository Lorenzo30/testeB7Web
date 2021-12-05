import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex:1;
    align-items:center;
    background-color:#FFF;
`;

const HeaderText = styled.Text`
    font-size:15px;
    color:#333;
    text-align:center;
    margin-bottom:30px;
    margin-top:5px;
`;

const NextButton = styled.Button``;

const LevelArea = styled.View`
    width:80%;
    margin-left:20px;
    margin-right:20px;
`;

const Page = (props) => {
    let funnyPhrase = '';
    switch(props.workoutDays.length) {
        case 1:
            funnyPhrase = "Tudo bem.. aos poucos vai aumentando";
            break;
        case 2:
            funnyPhrase = "Showw! eu vou te ajudar a virar 3 dias e depois 4 e 5..";
            break;
        case 3:
            funnyPhrase = "Isso ai.., não te preocupa, vou te motivar para virar rotina";
            break;
        case 4:
            funnyPhrase = "Calma..., mas aceitamos o desafio";
            break;
        case 5:
            funnyPhrase = "Se não tem ritmo, não recomendamos 5 dias de cara!,mas boraaaa";
            break;
        case 6:
            funnyPhrase = "Eita.., você que sabe.., vou estar aqui para te motivar!";
            break;
        case 7:
            funnyPhrase = "WoooW! Todo dia?! WTF?!";
            break;
    }
    
    const nextAction = () => {
        if(!props.level){
           alert("Você precisa escolher um nivel!");
           return
        }

        props.navigation.navigate('AppTab');
   }

    const setMyLevel = (l) => {
        props.setLevel(l);
    }

    props.navigation.setOptions({
        headerTitle:"",
        headerRight:props => <NextButton title="Próximo" onPress={nextAction} />
    })

    return (
        <Container>
            <HeaderText style={{fontWeight:'bold',padding:10}}>{funnyPhrase}</HeaderText>
            <HeaderText>Qual seu objetivo na academia?</HeaderText>

            <LevelArea>
                <DefaultButton onPress={()=>setMyLevel('Emagrecer')} bgcolor={props.level=='Emagrecer'?'#a5e8bc':false} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text style={{color:"#fff"}}>Emagrecer</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>setMyLevel('Ganhar massa magra')} bgcolor={props.level=='Ganhar massa magra'?'#a5e8bc':false} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text style={{color:"#fff"}}>Ganhar massa magra</Text>
                </DefaultButton>
                <DefaultButton onPress={()=>setMyLevel('Cuidar da sáude')} bgcolor={props.level=='Cuidar da sáude'?'#a5e8bc':false} style={{marginBottom:20}} underlayColor="#CCC">
                    <Text style={{color:"#fff"}}>Somente cuidar da sáude</Text>
                </DefaultButton>
            </LevelArea>
        </Container>
    );
};


const mapStateToProps = (state) => {
    return {
        workoutDays: state.userReducer.workoutDays,
        level: state.userReducer.level
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setLevel: (level) => dispatch({ type: 'SET_LEVEL', payload: { level } })
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Page);