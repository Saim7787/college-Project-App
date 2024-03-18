import React,{useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SPACING } from '../../../Theme/Spacing';
import { FONTSIZE } from '../../../Theme/FontSize';
import { FONTFAMILY } from '../../../Theme/FontFamily';
import { ThemeContext } from '../../../Theme/ThemeContext'
import { lightTheme, darkTheme } from '../../../Theme/Color'
import { Skeleton } from '@rneui/themed';

const NewsDetails = ({ route,navigation }) => {
  const { id } = route.params;
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  const handletoggletheme = themeContext?.toggleTheme

  const newsData = [
    {
      id: 1,
      imageUrl: 'https://media.licdn.com/dms/image/D5612AQFOg9sqxMghPg/article-cover_image-shrink_720_1280/0/1670797229978?e=2147483647&v=beta&t=R2yd9prsl4PFhmGAm5RgQOyfEUpg6dDeTZQjunp-6j4', // Replace with your actual online image URL
      title: 'We Asked ChatGPT: How Would AI Impact Education?',
      date: 'November 1, 2023',
      description: 'Artificial intelligence (AI) is quickly becoming an integral part of our daily lives. From our smartphones to our homes and cars, AI is transforming the way we interact with the world around us. But what does this mean for the future of education? We asked ChatGPT ourselves.',
    },
    {
      id: 2,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM0GWkaqhEWAmX3uhyHoJ1YNbGNYh9kst3g&usqp=CAU', // Replace with your actual online image URL
      title: 'Important Announcement',
      date: 'October 25, 2023',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      id: 3,
      imageUrl: 'https://i.ytimg.com/vi/CwhCIXflL9o/maxresdefault.jpg', // Replace with your actual online image URL
      title: 'Is AI bad news for education?',
      date: 'November 1, 2023',
      description: 'Two thirds of teachers believe they are regularly receiving work written by AI., With concerns about cheating and online safety, does AI spell bad news for education?, SUBSCRIBE to our YouTube channel ',
    },
    {
      id: 4,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM0GWkaqhEWAmX3uhyHoJ1YNbGNYh9kst3g&usqp=CAU', // Replace with your actual online image URL
      title: 'Important Announcement',
      date: 'October 25, 2023',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
      id: 5,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPsT7KCBnRBQpb9YIrJ9va4uM8Tkf_hjXw&usqp=CAU', // Replace with your actual online image URL
      title: 'Exciting News Title 1',
      date: 'November 1, 2023',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
    },
    {
      id: 6,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeM0GWkaqhEWAmX3uhyHoJ1YNbGNYh9kst3g&usqp=CAU', // Replace with your actual online image URL
      title: 'Important Announcement',
      date: 'October 25, 2023',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
  ];

  // Find the news item with the given ID
  const selectedNewsItem = newsData.find((item) => item.id === id);

  if (!selectedNewsItem) {
    // Handle case where the item is not found
    return (
      <View style={styles.container}>
        <Text>News not found</Text>
      </View>
    );
  }
const  isLoading = false
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      <View style={styles.image_container}>  
      {isLoading ? (
          
      <Skeleton animation='wave'  style={{width:'100%',height:300}} />
      ) : (
      <Image source={{ uri: selectedNewsItem.imageUrl }} style={styles.newsImage} />
      )}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon_container}>  
      <Image source={require('../../../Assets/Dashboard/News/back.png')} style={styles.backimage} />
      </TouchableOpacity>
      </View>
      <View style={styles.body}>  
      <View style={[styles.newsDetails,{backgroundColor:theme.input_Background}]}>
        
      {isLoading ? (
        <>  
      <Skeleton animation='wave'  width={100} height={8} style={{borderRadius:30,alignSelf:'center',marginBottom:15}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  </>
  )
  : (
    <>  
        <Text style={[styles.newsTitle,{color:theme.primaryText}]}>{selectedNewsItem.title}</Text>
        <Text style={[styles.newsDescription,{color:'#A0A4AB'}]}>{selectedNewsItem.description}</Text>
        </>
  )}
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  body:{
    paddingHorizontal: SPACING.space_20,
    paddingVertical:SPACING.space_10,

  },
  icon_container:{
    position:'absolute',
    top:10,
    left:30
  },
  backimage:{
width:26,
height:20,

  },
  image_container:{
position:'relative'
  },
  newsImage: {
    width: '100%', // Adjust width as needed
    height: 300, // Adjust height as needed
    marginBottom: 16,
  },
  newsDetails: {
    width:'100%',
    borderRadius:16,
    paddingHorizontal: SPACING.space_20,
    paddingVertical:SPACING.space_20,
    marginTop:-40,
    zIndex:1000
  },
  newsTitle: {
    fontSize: FONTSIZE.size_17,

    fontFamily: FONTFAMILY.Mulish_Bold,
    marginBottom: 4,
  },
  newsDescription: {
    fontSize: FONTSIZE.size_13,

    fontFamily: FONTFAMILY.Poppins_SemiBold,
  },
});

export default NewsDetails;
