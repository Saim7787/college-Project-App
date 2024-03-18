import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../../../Component/Header Button'
import { styles  } from './Style'
import { LMSNotification, lmsNotifications } from './Data'
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
const Index:React.FC<{navigation:any}> = ({navigation}) => {
    const themeContext = React.useContext(ThemeContext);
    const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
    const handletoggletheme = themeContext?.toggleTheme
    const NotificationItem: React.FC<{ item: LMSNotification[] }> = ({ item }) => {
        return (
            <>  
          
          <TouchableOpacity style={[styles.notificationContainer,{backgroundColor:theme.card_background}]} onPress={()=> navigation.navigate('NotificationDetail',{id:item?.id})}>
            <Text style={[styles.title,{color:theme.PrimarylightText}]}>{item.title}</Text>
            <Text style={[styles.description,{color:theme.Peragraph_text}]} numberOfLines={1}>{item.description}</Text>
          </TouchableOpacity>
          </>
        );
      };
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
        <View style={{marginBottom:20}}>  
        <Header text='Notifications' />
        </View>
        <Text style={[styles.title,{color:theme.primaryText}]}>Today</Text>

        <FlatList
      data={lmsNotifications}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => <NotificationItem item={item} />}
      showsVerticalScrollIndicator={false}
    />
    </View>
  )
}

export default Index
