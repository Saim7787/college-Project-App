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
  card:{
    width:"100%",
padding:20,

  },
  course_name:{
    fontSize:17,
    fontFamily:FONTFAMILY.Jost_SemiBold
  },
  date:{
    fontSize:13,
    fontFamily:FONTFAMILY.Mulish_Bold
  },
  time:{
    fontSize:13,
    fontFamily:FONTFAMILY.Mulish_Bold
  }
})