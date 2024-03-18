import { StyleSheet, Platform } from "react-native";
import { FONTFAMILY } from "../../../../Theme/FontFamily";
import { FONTSIZE } from "../../../../Theme/FontSize";
import { SPACING } from "../../../../Theme/Spacing";
import { BORDERRADIUS } from "../../../../Theme/BorderRadius";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.space_24,
    paddingVertical:SPACING.space_10
  },
  image: {
    width: 100,
    height: 100, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius:16
  },
  title: {
    fontSize:FONTSIZE.size_12,
    fontFamily:FONTFAMILY.Mulish_Bold,
 color:'white',
    position:"absolute",
    bottom:10,
    
  },
  image_slider:{
    marginRight:10,
    marginTop:5,
  position:'relative'
  },
  subheading:{
    fontSize:FONTSIZE.size_18,
    fontFamily:FONTFAMILY.Mulish_Bold
  },
  heading:{
    fontSize:FONTSIZE.size_24,
    fontFamily:FONTFAMILY.Jost_SemiBold,
    marginVertical:20
  }

})