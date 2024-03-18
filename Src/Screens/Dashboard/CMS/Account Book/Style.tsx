import { StyleSheet, Platform } from "react-native";
import { FONTFAMILY } from "../../../../Theme/FontFamily";
import { FONTSIZE } from "../../../../Theme/FontSize";
import { SPACING } from "../../../../Theme/Spacing";
import { BORDERRADIUS } from "../../../../Theme/BorderRadius";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.space_24,
    paddingVertical:SPACING.space_20
  },
  item:{
width:'100%',
borderRadius:18,
borderColor:'rgba(180, 189, 196, 0.20)',
borderWidth:2,
paddingHorizontal:10,
paddingVertical:10

  },
  header_card:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10

  },
  footer_card:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  card_body:{
    flexDirection:'row',
    gap:10,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:10,

  },
  row:{
    flexDirection:'row',
    gap:5,
    alignItems:'center'
  },
  heading:{
    fontSize:FONTSIZE.size_13,
    fontFamily:FONTFAMILY.Jost_SemiBold
  },
  value:{
    fontSize:FONTSIZE.size_14,
    fontFamily:FONTFAMILY.Mulish_Bold
  }
})