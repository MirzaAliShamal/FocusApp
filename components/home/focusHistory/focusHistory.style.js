import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    historyTitle: {
        color: COLORS.white,
        fontWeight: 'bold'
    },
    historyItem: {
        color: COLORS.lightWhite,
        fontSize: SIZES.small,
        marginTop: SIZES.xSmall
    }
})

export default styles