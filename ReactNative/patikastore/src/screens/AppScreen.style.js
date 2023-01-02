import { StyleSheet } from "react-native";

const AppScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F9FF",
},
brandInfo:{
  marginVertical:20,
  marginHorizontal:50,
  padding:20,
  //backgroundColor:'black',
},
brandTitle:{
  textAlign:'center',
  color:'black',
  fontSize:36,
  fontFamily:'monospace',
},
shopContainer:{
  //backgroundColor:'black',
},
Input:{
  marginTop:40,
  backgroundColor:'whitesmoke',
  borderRadius:10,
  paddingLeft:20,
  fontFamily:'monospace',
}
});

export default AppScreen;
