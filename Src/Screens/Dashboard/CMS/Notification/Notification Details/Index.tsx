import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { lmsNotifications,LMSNotification } from '../Data'
import { ThemeContext } from '../../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../../Theme/Color';
import Header from '../../../../../Component/Header Button';
import { styles } from './Style';
const Index:React.FC<{route:any}> = ({route}) => {
  const {id} = route.params
  const data = lmsNotifications.find((data) => data?.id === id)
  const themeContext = React.useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  const handletoggletheme = themeContext?.toggleTheme
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      <Header text='Notification Details' />
      <View style={[styles.card,{backgroundColor:theme.primaryBackground}]}>
        <Text style={[styles.title,{color:theme.PrimarylightText}]}>{data?.title}</Text>
<Text style={[styles.description,{color:theme.Peragraph_text}]}>{data?.description}</Text>
      </View>
    </View>
  )
}

export default Index
