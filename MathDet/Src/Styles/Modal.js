import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    Modal: {
        width: '80%',
        height: '60%',
    },
    ModalOp: {
        width: '95%',
        height: '50%',
    },
    Result: {
        width: '95%',
        height: Dimensions.get('window').height - 5,
    },
    ResultOp: {
        width: '95%',
        height: '75%',
    },
    Text: {
        borderWidth: 1,
        borderColor: 'violet',
        borderRadius: 1,
        fontFamily: 'Gloria',
        textAlign: 'center'
    }
})
