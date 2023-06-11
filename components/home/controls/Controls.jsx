import React from "react";
import { View } from "react-native";
import styles from "./controls.style";
import RoundButton from "../../common/roundButton/RoundButton";

const Controls = (props) => {
    const { isStarted, setIsStarted, setMinutes, clearSubject } = props
    return (
        <>
            <View style={styles.timingContainer}>
                <RoundButton size={75} title='10' onPress={()=> setMinutes(10)} />
                <RoundButton size={75} title='15' onPress={()=> setMinutes(15)} />
                <RoundButton size={75} title='20' onPress={()=> setMinutes(20)} />
            </View>
            <View style={styles.controlContainer}>
                {
                    isStarted ? (
                        <RoundButton title='pause' onPress={()=> setIsStarted(false)} />
                    ) : (
                        <RoundButton title='start' onPress={()=> setIsStarted(true)} />
                    )
                }
                
            </View>
            <View style={styles.clearContainer}>
                <RoundButton size={50} title='-' onPress={()=>clearSubject()} />
            </View>
        </>
    )
}

export default Controls