import React from 'react';
import {View,StyleSheet,TouchableHighlight,Text,Image} from 'react-native';

function customTabBar({state,descriptors,navigation}){
    return (
       <View style={styles.container}> 
          {state.routes.map((route,index) => {
            const {options} = descriptors[route.key];
            let label = route.name;

               
             const handleTabPress = () => {
                 navigation.navigate(route.name)
             }

          

              return (
                  <TouchableHighlight key={index} style={styles.tab} onPress={() => handleTabPress()}>
                      <Image source={require("../images/iconeRedondo.png")} style={styles.imagemMotivador}/>
                 </TouchableHighlight>
              );
          })}
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"center",
        aligmItems:"center",
        backgroundColor:"#284A66"
    },
    tab:{
        flex:1,
        justifyContent:"center",
        aligmItems:"center",
        padding:10
    },
    label:{
        fontSize:26,
        color:"red",
        textAlign:"center"
        
    },
    imagemMotivador:{
       marginTop:-50,
       width:80,
       height:80,
       alignSelf:"center"
    }

});

export default customTabBar;