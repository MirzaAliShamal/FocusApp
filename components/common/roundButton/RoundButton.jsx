import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './roundButton.style';

const RoundButton = (props) => {
    const { style = {}, textStyle = {}, size = 125, onPress, title } = props

    return (
        <TouchableOpacity style={[styles.radius(size), style]} onPress={onPress}>
            <Text style={[styles.text(size), textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default RoundButton