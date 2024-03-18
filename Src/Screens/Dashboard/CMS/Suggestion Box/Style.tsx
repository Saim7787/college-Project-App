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
  note:{
fontSize:FONTSIZE.size_14,
fontFamily:FONTFAMILY.Jost_SemiBold,
marginTop:SPACING.space_15

  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    borderRadius: BORDERRADIUS.radius_12,
    paddingHorizontal: SPACING.space_18,
    paddingVertical: SPACING.space_4,
    borderWidth: 2,
    borderColor: 'rgba(180, 189, 196, 0.20)',
  },
  input:{
flex:1,
fontSize:FONTSIZE.size_14,
    fontFamily:FONTFAMILY.Mulish_Bold,
  },
  category:{
    width: '100%',
    borderRadius: BORDERRADIUS.radius_12,
    paddingHorizontal: SPACING.space_8,
  
    borderWidth: 2,
    borderColor: 'rgba(180, 189, 196, 0.20)',
    marginTop:10
  },
  Form_contanier:{

  },
  radio_view:{
    marginTop:10
  },
  heading_radio:{
    fontSize:FONTSIZE.size_16,
    fontFamily:FONTFAMILY.Jost_SemiBold,
    marginBottom:5
  },
  errorText:{
    fontSize:FONTSIZE.size_14,
    fontFamily:FONTFAMILY.Jost_SemiBold,
color:'red'
  },
  divider:{
    height: 1, // You can adjust the height of the divider
        backgroundColor: '#E8F1FF', // You can adjust the color of the divider
        marginVertical: 10, // You can adjust the vertical margin of the divider 
}
})