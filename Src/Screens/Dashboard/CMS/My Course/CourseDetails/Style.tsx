import { StyleSheet, Platform } from "react-native";
import { FONTFAMILY } from "../../../../../Theme/FontFamily";
import { FONTSIZE } from "../../../../../Theme/FontSize";
import { SPACING } from "../../../../../Theme/Spacing";
import { BORDERRADIUS } from "../../../../../Theme/BorderRadius";
import { StatusBar } from "react-native";
export const styles = StyleSheet.create({
    container:{
flex:1,
paddingHorizontal: SPACING.space_20,
        paddingVertical:SPACING.space_10  
    },
   body:{
    width:'100%',
    borderRadius:16,
    paddingHorizontal: SPACING.space_20,
        paddingVertical:SPACING.space_10,
    shadow: Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        android: {
          elevation: 2,
        },
      }),

   },
   heading:{
fontSize:FONTSIZE.size_20,
fontFamily:FONTFAMILY.Jost_SemiBold,
   },
 
   instructer_image:{
    width:54,
    height:54,
    borderRadius:54
   },
   Professor_row:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
gap:15,
marginTop:10
   },
   name_container:{
    flex:1
   },
   Professor_name:{
    fontSize:FONTSIZE.size_17,
    fontFamily:FONTFAMILY.Jost_SemiBold
   },
   Professor_job:{
    fontSize:FONTSIZE.size_13,
    fontFamily:FONTFAMILY.Mulish_Bold
   },
   Instructer_Heading:{
    fontSize:FONTSIZE.size_18,
    fontFamily:FONTFAMILY.Jost_SemiBold,
    marginTop:10
   },
   tabContent:{
    flex:1,
   },
   About_heading:{
    fontSize:FONTSIZE.size_13,
    lineHeight:19,
    fontFamily:FONTFAMILY.Mulish_Bold,
    marginVertical:10
   },
   attandance_heading:{
    marginVertical:15,
    fontSize:13,
    fontFamily:FONTFAMILY.Jost_SemiBold
   }

})