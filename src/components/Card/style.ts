import {
    StyleSheet,
    Dimensions
} from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
    card: {
        height: height - 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    image: {
        borderRadius: 2,
        flex: 1,
        elevation: 2,
        marginBotton: 2
    }
})