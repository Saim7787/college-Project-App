import { StyleSheet, Platform } from "react-native";
import { FONTFAMILY } from "../../../Theme/FontFamily";
import { FONTSIZE } from "../../../Theme/FontSize";
import { SPACING } from "../../../Theme/Spacing";
import { BORDERRADIUS } from "../../../Theme/BorderRadius";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.space_24,
    paddingVertical:SPACING.space_10
  },
 
  profile_image:{
   
    alignSelf:'center',
    marginTop:-SPACING.space_30,
    
    
  },
  image:{
    width:100,
    height:100,
    borderRadius:100,
    borderColor:'#167F71',
    borderWidth:4,
  },
  profile_name:{
    fontSize:FONTSIZE.size_24,
    fontFamily:FONTFAMILY.Jost_SemiBold,
    textAlign:'center'
  },
  profile_mail:{
    fontSize:FONTSIZE.size_12,
    fontFamily:FONTFAMILY.Mulish_Bold,
    textAlign:'center',
    marginBottom:SPACING.space_20

},
body:{
    width:'100%',
    flex:1,
    borderRadius:16,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 1,
    marginTop:50
},
tileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  leftImage: {
    width: 22,
    height: 20,
    marginRight: 10,
  },
  rightImage: {
    width: 10,
    height: 17,
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: FONTSIZE.size_14,
fontFamily:FONTFAMILY.Mulish_Bold
},

bottom_heading: {
  fontSize:FONTSIZE.size_20,
  fontFamily:FONTFAMILY.Jost_SemiBold,
 textAlign:'center',
 marginBottom:15


},

BottomContainer:{
  flex: 1,
paddingHorizontal:20,
paddingVertical:10,
},

 
})