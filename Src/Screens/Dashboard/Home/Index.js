import { StyleSheet, Text, View,Image,FlatList,TouchableOpacity,Linking, Alert } from 'react-native'
import React,{useContext} from 'react'
import {FlatListSlider} from 'react-native-flatlist-slider';
import { images,carouselData,newsData } from './Data';
import { styles } from './Style';
import { ThemeContext } from '../../../Theme/ThemeContext'
import { lightTheme, darkTheme } from '../../../Theme/Color'
import { Skeleton } from '@rneui/themed';

const Index = ({navigation}) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;

  const renderShortDescription = (description) => {
    // Extract the first 20 words from the description
    const words = description.split(' ');
    const shortenedDescription = words.slice(0, 5).join(' ');
  
    // Add ellipsis if the description has more than 20 words
    if (words.length > 20) {
      return shortenedDescription + '...';
    }
  
    return shortenedDescription;
  };
  const navigateToDetails = (id) => {
    // Navigate to the Details screen and pass the ID as a parameter
    navigation.navigate('NewsDetails', { id });
  };
  const NewsEvent = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item.id)}>
      <View style={[styles.newsItem,{backgroundColor:theme.input_Background}]}>
        <Image source={{ uri: item.imageUrl }} style={styles.newsImage} />
        <View style={styles.newsDetails}>
          <Text style={[styles.newsTitle,{color:theme.primaryText}]}>{item.title}</Text>
          <Text style={[styles.newsDate,{color:theme.primaryText}]}>{item.date}</Text>
          <Text style={[styles.newsDescription,{color:theme.PrimarylightText}]}>{renderShortDescription(item.description)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  const navigateToSchoolDetails = (id) => {
    // Navigate to the Details screen and pass the ID as a parameter
    navigation.navigate('SchoolDetails', { id });
  };
  const emailAddress = 'ujamil503@gmail.com';
  const openEmailApp = async () => {
    const url = `mailto:${emailAddress}`;

    // Check if the device supports opening the URL
  Linking.openURL(url);

   
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.image_slider} onPress={() => navigateToSchoolDetails(item.id)}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
  const isLoading = false;
 
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      
    
      <FlatListSlider
    data={images}
    height={240}
    timer={2000}
    onPress={item => alert(JSON.stringify(item))}
    
    indicatorContainerStyle={{position:'absolute', bottom: 20}}
    indicatorActiveColor={'#8e44ad'}
    indicatorStyle={{width:20}}
    indicatorInActiveColor={'#ffffff'}
    indicatorActiveWidth={20}
    animation
  
  />

            
  <View style={styles.body}>   
  <TouchableOpacity style={styles.touch} onPress={openEmailApp} activeOpacity={0.6}>
    <View style={[styles.touch,{backgroundColor:'#0961F5',padding:10,borderRadius:10,elevation:1}]}>
    <Image source={require('../../../Assets/Dashboard/News/whatsapp.png')}  style={{width:30,height:30}}/>
      <Text style={[styles.touch_heading,{color:'#FFF'}]}>Get in Touch With Us</Text>
    </View>

     
  </TouchableOpacity>
  <Text style={[styles.school_heading,{color:theme.primaryText}]}>School</Text>
  {isLoading ? (
              <FlatList
                data={Array.from({length: 8})}
              horizontal
              showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index}) => (
                <View style={{marginTop:5}}>
                  <Skeleton animation='wave' style={{marginRight:5}}  width={100} height={100} />
               </View>
                )}
              />
            ) : (
  <FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      )}
  <Text style={[styles.school_heading,{color:theme.primaryText}]}>News and Event</Text>
  {isLoading ? (
              <FlatList
                data={Array.from({length: 4})}
          
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index}) => (
                 
                  <View style={[styles.newsItem,{backgroundColor:theme.input_Background}]}>
                  <Skeleton animation='wave' style={{marginRight:5}}  width={100} height={100} />
                   
                    <View style={styles.newsDetails}>
  <Skeleton animation='wave'  width={100} height={8} style={{borderRadius:30}} />
  <Skeleton animation='wave'  width={150} height={8} style={{borderRadius:30,marginTop:8}} />
  <Skeleton animation='wave'  width={200} height={8} style={{borderRadius:30,marginTop:8}} />
                    
                    </View>
                  </View>
               
                )}
              />
            ) : (
  <FlatList
        data={newsData}
        renderItem={NewsEvent}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
            )}
       </View>
    </View>
  )
}

export default Index
