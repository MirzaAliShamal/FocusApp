import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
    controlContainer: {
        width: '100%',
        flexDirection: 'row',
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timingContainer: {
        width: '100%',
        flexDirection: 'row',
        flex: 0.1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: SIZES.xLarge
    },
    clearContainer: {
        width: '100%',
        flexDirection: 'row',
        flex: 0.1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

export default styles