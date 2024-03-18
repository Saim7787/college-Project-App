import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { lectureSchedule,DaySchedule } from './Data'; 
import { styles } from './Style';
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import HeaderButton from '../../../../Component/Header Button/index';
import { Skeleton } from '@rneui/themed';

const LectureSchedule: React.FC = () => {
  const themeContext = React.useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;

  const renderItem = ({ item } : {item:DaySchedule}) => (
    <View style={[styles.dayContainer,{marginTop:10}]} >
      <Text style={[styles.day,{color:theme.primaryText}]}>{item.day}</Text>
      {item.lectures.map((lecture, lectureIndex) => (
        <View key={lectureIndex} style={[styles.lectureItem,{backgroundColor:theme.card_background}]}>
          <Text style={[styles.courseName,{color:theme.primaryText}]}>{lecture.courseName}</Text>
          <Text style={[styles.details,{color:theme.PrimarylightText}]}>
            Room: {lecture.roomNo} | Professor: {lecture.professorName} | Time: {lecture.startTime} - {lecture.endTime}
          </Text>
        </View>
      ))}
    </View>
  );
 const isLoading = false
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      <HeaderButton text='Lecture Schedule' />
      {isLoading ? (
              <FlatList
                data={Array.from({length: 6})}
              showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index}) => (
                  <View >   

  <View style={[styles.dayContainer,{marginTop:10}]} >

   
     
        <View  style={[styles.lectureItem,{backgroundColor:theme.card_background}]}>
        <Skeleton  animation='wave'  height={7} style={{borderRadius:30,marginBottom:20,width:'90%'}}  />

  <Skeleton  animation='wave'  height={7} style={{borderRadius:30,marginTop:10,width:'100%'}}  />
  <Skeleton  animation='wave'  height={7} style={{borderRadius:30,marginTop:3,width:'100%',}}  />
       
        </View>
    
    </View>
              </View>   
                )}
              />
            ) : (
    <FlatList
      data={lectureSchedule}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
            )}
  </View>
  );
};



export default LectureSchedule;
