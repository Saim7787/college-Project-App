import { StyleSheet, Platform } from "react-native";
import { FONTFAMILY } from "../../../../Theme/FontFamily";
import { FONTSIZE } from "../../../../Theme/FontSize";
import { SPACING } from "../../../../Theme/Spacing";
import { BORDERRADIUS } from "../../../../Theme/BorderRadius";
import { StatusBar } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: SPACING.space_24,
      paddingVertical:SPACING.space_20
    },
    dayContainer: {
      marginBottom: 16,
     
    },
    day: {
     fontFamily:FONTFAMILY.Jost_SemiBold,
      fontSize: 16,
      marginBottom: 8,
    },
    lectureItem: {
      marginBottom: 8,
      padding: 12,
      borderWidth: 1,
      borderColor: 'rgba(180, 189, 196, 0.20)',
      borderRadius: 18,
    },
    courseName: {
        fontFamily:FONTFAMILY.Jost_SemiBold,
        fontSize: 19,
      marginBottom: 4,
    },
    details: {
      fontSize: 14,
      fontFamily:FONTFAMILY.Mulish_Bold,

    },
  });