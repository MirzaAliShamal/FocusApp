import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    countdownWrapper: {
        backgroundColor: COLORS.primary,
        padding: SIZES.large
    },
    countdownText: {
        fontSize: SIZES.xxxxLarge,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    taskWrapper: {
        paddingTop: SIZES.xLarge
    },
    taskTitle: {
        color: COLORS.white, 
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    task: {
        color: COLORS.lightWhite, 
        textAlign: 'center'
    }
})

export default styles