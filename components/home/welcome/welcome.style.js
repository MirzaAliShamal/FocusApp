import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    searchContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: SIZES.large,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        justifyContent: 'center',
        borderRadius: SIZES.xSmall,
        height: '100%',
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: '100%',
        height: '100%',
        paddingHorizontal: SIZES.medium
    }
})

export default styles