import { StyleSheet, Text, View,TouchableOpacity,FlatList, Pressable, ViewBase } from 'react-native'
import React,{useContext} from 'react'
import { CourseData,CourseType } from './Data'
import HeaderButton from '../../../../Component/Header Button/index'
import { styles } from './Style'
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import { Skeleton } from '@rneui/themed';

const Index:React.FC<{navigation:any}> = ({navigation}) => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
    
    const renderItem = ({ item }: { item: CourseType }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('CourseDetails', { courseName: item.course })}
          style={styles.list_container}
        >
           
          <Text style={[styles.heading,{color:theme.PrimarylightText}]}> {item.course}</Text>
     
        </TouchableOpacity>
      );
      const isLoading = false
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
        <View style={styles.header}>  
     <HeaderButton  text='My Course'/>
</View>


{isLoading ? (
              <FlatList
                data={Array.from({length: 12})}
              
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index}) => (
                  <View style={{padding:16}}>   
  <Skeleton   height={7} style={{borderRadius:30,marginTop:10,width:'70%',}} />
              </View>   
                )}
              />
            ) : (
      <FlatList
      data={CourseData}
      renderItem={renderItem}
      keyExtractor={(item) => item.course}
    />
            )}
    </View>
  )
}

export default Index
