import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";


function BotaoDefault(props) {
    return (
        <View style={[{ height: props.height, width: props.width, maxWidth: props.maxWidth, maxHeight: props.maxHeight,marginTop:props.marginTop,marginBottom:props.marginBottom },styles.container]}>
            <Text style={styles.corTexto}>{props.texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "#284A66",
        justifyContent: "center",
        alignItems: "center",
        marginTop:10,
        padding:10,
        borderRadius:20
    },
    corTexto: {
        color: "#fff",
        fontSize:15,
        fontWeight: "700"
    }
});
export default BotaoDefault;