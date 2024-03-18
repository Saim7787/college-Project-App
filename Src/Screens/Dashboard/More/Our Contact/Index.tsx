import { ScrollView, StyleSheet, Text, View ,Image,TouchableOpacity,FlatList} from 'react-native'
import React,{useContext} from 'react'
import HeaderButton from '../../../../Component/Header Button/index'
import { styles } from './Style'
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import { Linking, Alert } from 'react-native';

interface Contact {
    title: string;
    number: string;
    email: string;
  }
  
const Index = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
    const contacts: Contact[] = [
        {
          title: 'Admission Office',
          number: '+1 (123) 456-7890',
          email: 'sales@example.com',
        },
        {
          title: 'Register office',
          number: '+1 (987) 654-3210',
          email: 'support@example.com',
        },
        {
          title: 'Directorate office',
          number: '+1 (987) 654-3210',
          email: 'support@example.com',
        },
        {
            title: 'Student Affair Office',
            number: '+1 (987) 654-3210',
            email: 'support@example.com',
          },
          {
            title: 'Account Office',
            number: '+1 (987) 654-3210',
            email: 'support@example.com',
          },
          
        
        
        // Add more contacts as needed
      ];
      const renderItem = ({ item }: { item: Contact }) => (
        <View style={[styles.card, { backgroundColor: theme.input_Background }]}>
          <Text style={[styles.title_background, { color: 'white' }]}>{item.title}</Text>
          <View style={styles.row}>
            <View>
              <View style={[styles.row_text, { marginTop: 10 }]}>
                {/* Apply the white tint to the call icon */}
                <Image
                  source={require('../../../../Assets/Dashboard/More/AboutUs/call.png')}
                  style={[styles.icon, { tintColor: themeContext?.isDarkTheme ? 'white' : undefined }]}
                />
                <TouchableOpacity onPress={() => handlePhonePress(item.number)}>
                  <Text style={[styles.number, { color: theme.primaryText }]}> {item.number}</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.row_text, { marginTop: 7 }]}>
                {/* Apply the white tint to the mail icon */}
                <Image
                  source={require('../../../../Assets/Dashboard/More/AboutUs/mail.png')}
                  style={[styles.icon, { tintColor: themeContext?.isDarkTheme ? 'white' : undefined }]}
                />
                <TouchableOpacity onPress={() => handleEmailPress(item.email)}>
                  <Text style={[styles.number, { color: theme.primaryText }]}> {item.email}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.row}>
              {/* Apply the white tint to both mail and call icons */}
              <Image
                source={require('../../../../Assets/Dashboard/More/AboutUs/mail.png')}
                style={[styles.icon, { tintColor: themeContext?.isDarkTheme ? 'white' : undefined }]}
              />
              <Image
                source={require('../../../../Assets/Dashboard/More/AboutUs/call.png')}
                style={[styles.icon, { tintColor: themeContext?.isDarkTheme ? 'white' : undefined }]}
              />
            </View>
          </View>
        </View>
      );
      
      const handlePhonePress = async (phoneNumber: string) => {
        const url = `tel:${phoneNumber}`;
    
          Linking.openURL(url);
      
      };
      
      const handleEmailPress = async (email: string) => {
        const url = `mailto:${email}`;
       
          Linking.openURL(url);
  
      };
      
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
        <HeaderButton text='Our Contact'/>
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item) => item.title} // Use a unique key for each item
      />
    </View>
  )
}

export default Index
