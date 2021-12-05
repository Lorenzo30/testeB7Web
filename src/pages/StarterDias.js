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
margin-top:20px;
margin-bottom:10px;
`;
const SmallText = styled.Text`
font-size:15px;
font-weight:bold;
`;

const NextButton = styled.Button``;

const DaysArea = styled.View`
flex-direction:row;
flex-wrap:wrap;
justify-content:space-between;
margin-left:10px;
margin-right:10px;
margin-top:30px;
`;


const Page = (props) => {
    const toogleDay = (d) => {
        let newWorkoutDays = [...props.workoutDays]
         if(!props.workoutDays.includes(d)){
            // inserir
            newWorkoutDays.push(d)
         } else {
           newWorkoutDays = newWorkoutDays.filter(i=>i!=d)
         }
         
         props.setWorkoutDays(newWorkoutDays) 
    }

    let firstName = props.name.split(' ')[0];
    


    props.navigation.setOptions({
        headerTitle:"",
        headerRight:props => <NextButton title="Próximo" onPress={nextAction} />
    })

    const nextAction = () => {
        if(!props.workoutDays.length){
           alert("Você precisa treinar pelo menos um dia!");
           return
        }

        props.navigation.navigate('StarterNivel');
   }

  

    return (
        <Container>
            <HeaderText>Showww..{firstName}</HeaderText>
            <SmallText>Me diz quais dias você pretende treinar</SmallText>
            <SmallText>Dica: Não precisa colocar muitos dias de começo, aos poucos vou te ajudando</SmallText>
            <SmallText>a virar rotina!!</SmallText>


            <DaysArea>
                <DefaultButton bgcolor={props.workoutDays.includes(1)?'#ccc':false} width={95} onPress={() => toogleDay(1)} style={{marginBottom:20}} underlayColor="#ccc">
                    <Text style={{color:"#fff"}}>Segunda</Text>
                </DefaultButton>
                <DefaultButton width={95} bgcolor={props.workoutDays.includes(2)?'#ccc':false} style={{marginBottom:20}} onPress={() => toogleDay(2)} underlayColor="#ccc">
                    <Text style={{color:"#fff"}}>Terça</Text>
                </DefaultButton>
                <DefaultButton width={95} bgcolor={props.workoutDays.includes(3)?'#ccc':false} style={{marginBottom:20}} onPress={() => toogleDay(3)} underlayColor="#ccc">
                    <Text style={{color:"#fff"}}>Quarta</Text>
                </DefaultButton>
                <DefaultButton width={95} bgcolor={props.workoutDays.includes(4)?'#ccc':false} style={{marginBottom:20}} onPress={() => toogleDay(4)} underlayColor="#ccc">
                    <Text style={{color:"#fff"}}>Quinta</Text>
                </DefaultButton>
                <DefaultButton width={95} bgcolor={props.workoutDays.includes(5)?'#ccc':false} style={{marginBottom:20}} onPress={() => toogleDay(5)} underlayColor="#ccc">
                    <Text style={{color:"#fff"}}>Sexta</Text>
                </DefaultButton>
                <DefaultButton width={95} bgcolor={props.workoutDays.includes(6)?'#ccc':false}  style={{marginBottom:20}} onPress={() => toogleDay(6)} underlayColor="#ccc">
                    <Text style={{color:"#fff"}}>Sábado</Text>
                </DefaultButton>
                <DefaultButton width={97}  bgcolor={props.workoutDays.includes(0)?'#ccc':false} style={{marginBottom:20}} onPress={() => toogleDay(0)} underlayColor="#ccc">
                    <Text style={{color:"#fff"}}>Domingo</Text>
                </DefaultButton>
            </DaysArea>
        </Container>
    );
}



const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name,
        workoutDays:state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({ type: 'SET_NAME', payload: { name } }),
        setWorkoutDays:(workoutDays) => dispatch({type:'SET_WORKOUTDAYS',payload:{workoutDays}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);