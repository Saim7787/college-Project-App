import { StyleSheet, Platform } from "react-native";
import { FONTFAMILY } from "../../../../Theme/FontFamily";
import { FONTSIZE } from "../../../../Theme/FontSize";
import { SPACING } from "../../../../Theme/Spacing";
import { BORDERRADIUS } from "../../../../Theme/BorderRadius";
import { StatusBar } from "react-native";
export const styles = StyleSheet.create({
    container:{
flex:1,
    },
    containertabbar: {
      marginTop: StatusBar.currentHeight,
    },
    scene: {
      flex: 1,
      padding: 16,
    },
    semesterTitle: {
      fontSize: 20,
    fontFamily:FONTFAMILY.Jost_SemiBold,
      marginBottom: 16,
    },
    courseText: {
      fontSize: 14,
      fontFamily:FONTFAMILY.Mulish_Bold,
      marginBottom: 8,
    },
    tabBar: {
      backgroundColor: '#167F71',
    },
    indicator: {
      backgroundColor: 'white',
    },
    label: {
      fontSize: 14,
    fontFamily:FONTFAMILY.Mulish_Bold,
      color: 'white',
    },
    container_inner:{
        paddingHorizontal:20,
        paddingVertical:10
    },
    card:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:22,
        paddingHorizontal:15,
        paddingVertical:25,
        marginTop:20
    },
    row:{
        flexDirection:'row',
        
        alignItems:'center'
    },
    heading:{
        fontSize:FONTSIZE.size_16,
        fontFamily:FONTFAMILY.Jost_SemiBold,
        color:'white'
    },
    subHeading:{
        fontSize:FONTSIZE.size_13,
        fontFamily:FONTFAMILY.Mulish_Bold,
        color:'white'
    },
    divider:{
        height: 1, // You can adjust the height of the divider
            backgroundColor: '#E8F1FF', // You can adjust the color of the divider
            marginVertical: 10, // You can adjust the vertical margin of the divider 
    }
  });