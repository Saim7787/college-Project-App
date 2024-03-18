import { StyleSheet, Text, View,Image,TextInput, Pressable } from 'react-native'
import React,{useContext,useState,useRef} from 'react'
import { styles } from './Style'
import { ThemeContext } from '../../../../Theme/ThemeContext'
import { lightTheme, darkTheme } from '../../../../Theme/Color'
import HeaderButton from '../../../../Component/Header Button'
import {Picker} from '@react-native-picker/picker';
import PhoneInput from "react-native-phone-number-input";
import FooterButton from '../../../../Component/Footer Button/Index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Index:React.FC<{navigation:any}> = ({navigation}) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
    const handletoggletheme = themeContext?.toggleTheme;
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);

    const handleSignUp = () => {
        // Logic for handling sign-up
        console.log('Signing up...');
      };
  return (
    <KeyboardAwareScrollView>   
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
    <HeaderButton text='Edit Profile' />
   
<View style={styles.profile_container}>
<Image source={require('../../../../Assets/Auth/FillProfile/Profile.png')} style={styles.profile_image} />
</View>

<View style={styles.form_container}>

<View style={[styles.input_container, { backgroundColor: theme.input_Background, marginTop: 20 }]}>
              <TextInput
                style={[styles.input, { color: theme.PrimarylightText }]}
                placeholder="Full Name"
                placeholderTextColor={theme.PrimarylightText}
             
              />
             
            </View>
            <View style={[styles.input_container, { backgroundColor: theme.input_Background, marginTop: 15 }]}>
              <TextInput
                style={[styles.input, { color: theme.PrimarylightText }]}
                placeholder="Nick Name"
                placeholderTextColor={theme.PrimarylightText}
             
              />
             
            </View>
            <View style={[styles.input_container, { backgroundColor: theme.input_Background, marginTop: 15 }]}>
              <Image source={require('../../../../Assets/Auth/FillProfile/date.png')} style={styles.input_image} />
              <TextInput
                style={[styles.input, { color: theme.PrimarylightText }]}
                placeholder="Date of Birth"
                placeholderTextColor={theme.PrimarylightText}
               
              />
             
            </View>
            <View style={[styles.input_container, { backgroundColor: theme.input_Background, marginTop: 15 }]}>
              <Image source={require('../../../../Assets/Auth/Register/ICON.png')} style={styles.input_image_email} />
              <TextInput
                style={[styles.input, { color: theme.PrimarylightText }]}
                placeholder="Email"
                placeholderTextColor={theme.PrimarylightText}
               
              />
             
            </View>
            <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            containerStyle={{width:'100%',height:70,marginTop:15,backgroundColor:theme.input_Background,elevation:1,borderRadius:10,color:theme.primaryText}}
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
           
          />
            <Picker
  selectedValue={selectedLanguage}
  style={[styles.input_container, { backgroundColor: theme.input_Background, marginTop: 15,color:theme.primaryText }]}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>

<FooterButton  handleSubmit={handleSignUp} text='Update' />

</View>
    </View>
    </KeyboardAwareScrollView>
  )
}

export default Index
