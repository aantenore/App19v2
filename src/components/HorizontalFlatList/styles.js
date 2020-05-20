import { StyleSheet } from 'react-native';
import styles from '../styles';

const internalstyle = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        flex: 1,
        fontSize: 15,
        textAlign: 'center',
        color: '#444444', //'#0ad4bb',
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
        height: styles.container.height,
        flex: 1,
        borderColor: '#cccccc',
        borderWidth: 0.5,
        borderRadius: 20,
        backgroundColor: 'whitesmoke',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 3,
    },
    flatlistcontainer: {
        margin: 8,
        padding: 3,
        justifyContent: 'center',
        flex: 1,
        height: 60,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 20,
        backgroundColor: "#fff"

    }
});
export default internalstyle;