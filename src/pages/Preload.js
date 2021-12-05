import { StackActions, CommonActions } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';


const Preload = (props) => {
    function onRedirect() {
        if (!props.name) {
            //mandar para starter stack
            props.navigation.dispatch(CommonActions.reset({
                index: 0,
                name: "teste",
                routes: [
                    { name: 'StarterStack' }
                ],
                actions: [
                    CommonActions.navigate({
                        name: 'StarterStack'
                    })
                ]
            }))
        } else {
            //app tab
            props.navigation.dispatch(CommonActions.reset({
                name: "AppTab",
                routes: [
                    { name: 'AppTab' }
                ],
                actions: [
                    CommonActions.navigate({
                        name: 'AppTab'
                    })
                ]
            }))
        }
    }
    useEffect(() => {
        onRedirect();
    },[props.name]);

    return null;
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.name
    }
}  

export default connect(mapStateToProps)(Preload);
