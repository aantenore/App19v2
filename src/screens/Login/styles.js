import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white' //'#3bfebb'
    },
    // btnEye: {
    //     position: 'absolute',
    //     top: 55,
    //     right: 28,
    // },
    // iconEye: {
    //     width: 25,
    //     height: 25,
    //     tintColor: 'rgba(0,0,0,0.2)',
    // },
    // inlineImg: {
    //     position: 'absolute',
    //     zIndex: 99,
    //     width: 22,
    //     height: 22,
    //     left: 35,
    //     top: 9,
    // },
    input: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: 240,
        height: 50,
        marginHorizontal: 20,
        paddingHorizontal: 25,
        borderRadius: 20,
        color: '#ffffff',
        margin:5,
        fontSize: 18
    },
    formcontainer: {
        flex: 1,
    },
    logocontainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50
    },
    logo:{
        width:150,
        height:150
    },
    loginbutton:{
        backgroundColor: '#0ad4bb',
        marginHorizontal: 20,
        marginVertical:10,
        paddingHorizontal: 25,
        paddingVertical:15,
        width: 240,
        height: 50,
        borderRadius: 20,
        fontSize: 18,

    },
    buttontext:{
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        textTransform: 'uppercase'
    }
});
export default styles;
