import { StyleSheet,Dimensions } from "react-native";

const ShopCardStyle = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: Dimensions.get('window').width / 2.2,
        margin: 5,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000'
    },
    price: {
        textAlign: 'left',
    },
    stock: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
    },
    inner_container: {
        padding: 5,
    },
});


export default ShopCardStyle;
