import { StyleSheet, Platform } from "react-native";
import { FONTFAMILY } from "../../../../Theme/FontFamily";
import { FONTSIZE } from "../../../../Theme/FontSize";
import { SPACING } from "../../../../Theme/Spacing";
import { BORDERRADIUS } from "../../../../Theme/BorderRadius";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: SPACING.space_24,
    paddingVertical:SPACING.space_10
  },
body:{
  borderRadius:10,
  width:'100%',
  paddingHorizontal:10,
  paddingVertical:20,
  marginTop:20
},

heading:{
  fontSize:FONTSIZE.size_20,
  fontFamily:FONTFAMILY.Jost_SemiBold,
  textAlign:'center'

},
Peragraph:{
  fontSize:FONTSIZE.size_14,
  fontFamily:FONTFAMILY.Mulish_Bold,
  marginTop:15
},
gridItem:{
  flexDirection:"row",
  alignItems:'center',
  gap:10,
  width:'50%',
  marginTop:10,
  marginBottom:10
},
icon:{
  width:30,
  height:30,
  alignSelf:'center'
},
gridText:{
  fontSize:FONTSIZE.size_20,
  fontFamily:FONTFAMILY.Jost_SemiBold,
  textAlign:'center'
},
gridpera:{
  fontSize:FONTSIZE.size_14,
  fontFamily:FONTFAMILY.Mulish_Bold,
  marginTop:5
}

})