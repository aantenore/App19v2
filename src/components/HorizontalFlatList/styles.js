import { StyleSheet } from 'react-native';

const internalstyle = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        color: '#0ad4bb', //'#444444', //
        marginHorizontal: 2,
        marginVertical: 15
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container: {
        width: 80,
        height: 70,
        flex: 1,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 3,
    },
    flatlistcontainer: {
        margin: 5,
        padding: 3,
        justifyContent: 'center',
        flex: 1,
        // borderWidth: 0.5,
        // borderColor: '#cccccc',
        // borderRadius: 16,
        // backgroundColor: "whitesmoke",
        alignItems: 'center'

    }
});
export default internalstyle;