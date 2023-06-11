import React from "react";
import { FlatList, Text, View } from "react-native";
import { SIZES } from "../../../constants";
import styles from "./focusHistory.style";


const FocusHistory = (props) => {
    const { history } = props

    // if (!history || !history.length) return null;

    return (
        <View style={{ flex: 1, padding: SIZES.medium }}>
            <View style={styles.container}>
                <Text style={styles.historyTitle}>Things we've focused on:</Text>

                <FlatList 
                    data={history}
                    renderItem={({item})=> (
                        <Text style={styles.historyItem}>- {item}</Text>
                    )}
                />
            </View>
        </View>
    )
}

export default FocusHistory