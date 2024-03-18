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
  heading:{
    fontSize:FONTSIZE.size_18,
    fontFamily:FONTFAMILY.Jost_SemiBold,
    marginBottom:SPACING.space_15
  },
  subheading:{
    fontSize:FONTSIZE.size_14,
    fontFamily:FONTFAMILY.Mulish_Bold
  },
  divider:{
    height: 1, // You can adjust the height of the divider
    backgroundColor: '#E8F1FF', // You can adjust the color of the divider
    marginVertical: 10, // You can adjust the vertical margin of the divider
    
  },
  body:{
    width:"100%",
    borderRadius:16,
    paddingHorizontal:SPACING.space_10,
    paddingVertical:SPACING.space_10,
    marginTop:SPACING.space_20
  }
})