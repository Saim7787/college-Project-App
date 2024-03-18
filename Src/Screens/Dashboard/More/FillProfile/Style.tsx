import { StyleSheet, Platform } from "react-native";
import { FONTFAMILY } from "../../../../Theme/FontFamily";
import { FONTSIZE } from "../../../../Theme/FontSize";
import { SPACING } from "../../../../Theme/Spacing";
import { BORDERRADIUS } from "../../../../Theme/BorderRadius";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.space_24,
  },
  back_icon_image:{
    width:26,
    height:20
  },
  profile_container :{
alignSelf:"center",
marginTop:SPACING.space_28
  },
  profile_image:{
    width:100,
    height:100,

  },
  form_container: {
    marginTop: SPACING.space_20,
  },
  input_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    borderRadius: BORDERRADIUS.radius_12,
    paddingHorizontal: SPACING.space_18,
    paddingVertical: SPACING.space_4,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 0.5,
      },
    }),
  },
  input_image: {
    width: 18,
    height: 20,
  },
  input: {
    flex: 1,
    fontFamily: FONTFAMILY.Mulish_Bold,
    fontSize: FONTSIZE.size_14,
  },
  input_image_email:
  {
    width:19,
    height:15
  }
})
