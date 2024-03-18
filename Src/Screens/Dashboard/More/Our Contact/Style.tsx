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
  card:{
    width:'100%',
    marginBottom:10,
    padding:10,
    marginTop:SPACING.space_20,
    elevation:1,
    borderRadius:16
  },
  icon:{
    width:20,
    height:20
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:10
  },
  title_background:{
    backgroundColor:'#167F71',
    paddingHorizontal:5,
    paddingVertical:5,
    textAlign:'center',
    marginTop:-20,
    fontSize:FONTSIZE.size_20,
    fontFamily:FONTFAMILY.Jost_SemiBold,
    width:200,
    alignSelf:'center',
    color:'white',
    borderRadius:16
  },
  row_text:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  number:{
    fontSize:14,
    fontFamily:FONTFAMILY.Mulish_Bold
  }


})