import React from "react";
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';
import DefaultButton from "../components/DefaultButton";


const Container = styled.SafeAreaView`
 flex:1;
 justify-content:center;
 align-items:center;
 background-color:#fff;

`;
const WelcomeText = styled.Text`
font-size:22px;
color:#333;
margin-top:22px;
font-weight:700;
margin-bottom:10px;
`;
const WelcomeImage = styled.View`
flex:1;
justify-content:flex-end;
align-items:flex-end;

`;

const SmallText = styled.Text`
font-size:15px;
font-weight:700;
`;

const WelcomeLogo = styled.Image`
  width:350px;
  height:400px;
`;
const BeginConfigArea = styled.View`
position:absolute;
bottom:20;
width:70%;
`;

const ButtonText = styled.Text`
  color:#fff;
`;

const Page = (props) => {

    const start = () => {
        props.navigation.navigate('StarterName');
    }

    return (
        <Container>
            <WelcomeText> Seja muito bem vindo(a)! </WelcomeText>
            <SmallText> Vou te motivar e te ajudar</SmallText>
            <SmallText> a treinar muito mais vezes.. bora??</SmallText>
            <WelcomeImage>
                <WelcomeLogo source={require('../images/motivador.png')} />
            </WelcomeImage>
            <BeginConfigArea>
                <DefaultButton width="100%" onPress={start} underlayColor="#0B7AC6">
                    <ButtonText> Iniciar configuração </ButtonText>
                </DefaultButton>
            </BeginConfigArea>
        </Container>
    );
}

Page.navigationOptions = {
    headerShow: false
}

export default Page;

