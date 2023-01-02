import React from'react';
import { SafeAreaView,Text, View,FlatList, ScrollView,TextInput } from 'react-native';
import AppScreen from './screens/AppScreen.style';
import ShopCard from './components/ShopingCard';
import product_data from './components/ShopingCard/data/product_data.json';

function App() {
    const Rendershop = ({item}) => <ShopCard shop={item}/>
    return(
        <ScrollView>
    <SafeAreaView style={AppScreen.container}>    

    <View style={AppScreen.brandInfo}> 
    <Text style={AppScreen.brandTitle}>PATİKA STORE</Text>
    <TextInput style={AppScreen.Input} placeholder={'Search...'} />
    </View>

    <View style={AppScreen.shopContainer}>
     <FlatList 
     horizontal={false}
     numColumns={2}
     data={product_data} 
     renderItem={Rendershop}>

     </FlatList>
     </View>
    </SafeAreaView>
</ScrollView>
    );
};

export default App;