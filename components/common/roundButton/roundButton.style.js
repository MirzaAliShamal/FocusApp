import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
    radius: (size)=> ({
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.white,
        borderWidth: 2
    }),
    text: (size)=> ({
        color: COLORS.white,
        fontSize: size / 3
    })
})

export default styles