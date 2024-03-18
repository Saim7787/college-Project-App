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
    header:{
        paddingHorizontal: SPACING.space_20,
        paddingVertical:SPACING.space_10   
    },
    list_container:{
        padding: 16, 
        borderBottomWidth: 1,
         borderColor: '#E8F1FF'
    },
    heading:{
        fontSize:16,
        fontFamily:FONTFAMILY.Jost_SemiBold
    }

})