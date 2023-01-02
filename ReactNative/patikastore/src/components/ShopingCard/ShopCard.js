import React from "react";
import {SafeAreaView,View,Text,Image,ScrollView, TouchableOpacity, TextInput, ScrollViewComponent} from 'react-native';
import ShopCardStyle from "./ShopCard.style";
import product_data from './data/product_data.json';

const ShopCard = ({ shop }) => {
    return (
        <ScrollView>
        <View style={ShopCardStyle.container}>
            <Image
                style={ShopCardStyle.image}
                source={{ uri: shop.imgURL }}
            />
            <View style={ShopCardStyle.inner_container}>
                <Text style={ShopCardStyle.title}>{shop.title}</Text>
                <Text style={ShopCardStyle.price}>{shop.price}</Text>
                {!shop.inStock && <Text style={ShopCardStyle.stock}>STOKTA YOK</Text>}
            </View>
        </View>
        </ScrollView>
    );
}
export default ShopCard;