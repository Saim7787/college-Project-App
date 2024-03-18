import { StyleSheet, Text, View ,FlatList, Pressable} from 'react-native'
import React,{useContext} from 'react'
import { datesheet,DatesheetEntry } from './Data'
import { styles } from './Style'
import Header from '../../../../Component/Header Button/index'
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import { Skeleton } from '@rneui/themed';

const Index = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
    
    const renderItem = ({ item }: { item: DatesheetEntry }) => (
        <Pressable style={[styles.card,{borderBottomColor:theme.border,borderBottomWidth:1}]} >
          <Text style={[styles.course_name,{color:theme.PrimarylightText}]}>{item.courseName}</Text>
          <Text style={[styles.date,{color:theme.PrimarylightText}]}>Date: {item.date}</Text>
          <Text style={[styles.time,{color:theme.PrimarylightText}]}>Time: {item.startTime} - {item.endTime}</Text>
        </Pressable>
      );

      const isLoading = false
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
        <Header text='DateSheet' />
        {isLoading ? (
              <FlatList
                data={Array.from({length: 12})}
              showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index}) => (
                  <View >   

 
        <Skeleton  animation='wave'  height={7} style={{borderRadius:30,marginTop:20,width:'50%'}}  />

  <Skeleton  animation='wave'  height={7} style={{borderRadius:30,marginTop:8,width:'60%'}}  />
  <Skeleton  animation='wave'  height={7} style={{borderRadius:30,marginTop:7,width:'80%',}}  />
       
     
              </View>   
                )}
              />
            ) : (
      <FlatList
      data={datesheet}
      renderItem={renderItem}
      keyExtractor={(item) => item.date} // Assuming date can be used as a unique key
    />
            )}
    </View>
  )
}

export default Index
