import React from "react";
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import DefaultButton from "../components/DefaultButton";


const Container = styled.SafeAreaView`
 flex:1;
 align-items:center;
 background-color:#fff;
`;

const HeaderText = styled.Text`
font-size:22px;
color:#333;
margin-top:50px;
margin-bottom:50px;


`;
const NameInput = styled.TextInput`
border:1px solid #ccc;
width:80%;
height:50px;
border-radius:10px;
font-size:16px;
padding:10px;
`;

const NextButton = styled.Button``;


const Page = (props) => {
    const nextAction = () => {
         if(!props.name){
            alert("Você precisa de um nome!");
            return
         }

         props.navigation.navigate('StarterDias');
    }


    props.navigation.setOptions({
        headerTitle:"",
        headerRight:props => <NextButton title="Próximo" onPress={nextAction} />
    })

    return (
        <Container>
            <HeaderText>Qual é seu nome?</HeaderText>
            <NameInput
                value={props.name}
                onChangeText={t => props.setName(t)}
                autoFocus={true}
                autoCapitalize="words"
                onSubmitEditing={nextAction}
            />
        </Container>
    );
}



const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);