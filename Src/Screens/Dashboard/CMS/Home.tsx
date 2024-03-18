import { StyleSheet, Text, TextInput, View ,Image,TouchableOpacity,FlatList} from 'react-native'
import React,{useContext,useState} from 'react'
import { styles } from './Styles'
import { ThemeContext } from '../../../Theme/ThemeContext'
import { lightTheme, darkTheme } from '../../../Theme/Color'
import { Skeleton } from '@rneui/themed';
interface MenuItem {
  title: string;
  image: any; // You can replace 'any' with the actual type of your image (e.g., require('../../../path_to_your_image'))
  navigationTitle: string;
}
const Home:React.FC<{navigation:any}> = ({navigation}) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;

  const [searchQuery, setSearchQuery] = useState('');
const isLoading = false;
const searchImageSource = require('../../../Assets/Dashboard/Home/Search.png');
const searchImageStyle = themeContext?.isDarkTheme
  ? { ...styles.search_image, tintColor: 'white' }
  : styles.search_image;
  const menuItems: MenuItem[] = [
    {
      title: 'My Courses',
      image: require('../../../Assets/Dashboard/Home/Course.jpg'), 
      navigationTitle: 'MyCourse', 
    },
  
    {
      title: 'Lecture Schedule',
      image: require('../../../Assets/Dashboard/Home/Lecture.jpg'), 
      navigationTitle: 'LectureSchedule', // Replace with the navigation title
    },
    {
      title: 'Date Sheet',
      image: require('../../../Assets/Dashboard/Home/Date-Sheet.jpg'), 
      navigationTitle: 'DateSheet', // Replace with the navigation title
    },
    {
      title: 'Grade Book',
      image: require('../../../Assets/Dashboard/Home/Grade.jpg'), 
      navigationTitle: 'GradeBook', // Replace with the navigation title
    },
    {
      title: 'Scheme of the Study',
      image: require('../../../Assets/Dashboard/Home/Schem.jpg'), 
      
      navigationTitle: 'SchemeStudy', // Replace with the navigation title
    },
    {
      title: 'Account Book',
      image: require('../../../Assets/Dashboard/Home/Account.jpg'), 
      
      navigationTitle: 'AccountBook', // Replace with the navigation title
    },
    {
      title: 'Suggestion Box',
      image: require('../../../Assets/Dashboard/Home/Suggestion_Box.jpg'), 

      navigationTitle: 'SuggestionBox', // Replace with the navigation title
    },
   
    
    
    
    


  ];
  const filteredMenuItems = menuItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const renderItem = ({ item }: { item: MenuItem }) => (
    <TouchableOpacity onPress={() => navigation.navigate(item.navigationTitle)} style={styles.menuItem_container}>
    
      <View style={[styles.menuItem,{marginTop:40,marginRight:30}]}>
        <Image source={item.image} style={styles.menuItemImage} />
        <Text style={[styles.menuItemTitle, { color: theme.primaryText }]}>{item.title}</Text>
      </View>
   
    </TouchableOpacity>
  );
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      <View style={styles.header}>
<View>
  <Text style={[styles.header_heading,{color:theme.primaryText}]}>Hi, Ronald A. Martin</Text>
  <Text style={[styles.header_subheading,{color:theme.PrimarylightText}]}>What Would you like to learn Today?</Text>
  <Text style={[styles.header_subheading,{color:theme.PrimarylightText}]}>Search Below.</Text>

</View>

<TouchableOpacity style={styles.header_right} onPress={()=> navigation.navigate('Notification')}>

<Image source={require('../../../Assets/Dashboard/Home/notification.png')} style={styles.header_image} />
</TouchableOpacity>
      </View>
      <View style={[styles.search_container,{backgroundColor:theme.input_Background}]}>
      <Image source={searchImageSource} style={searchImageStyle} />

     <TextInput style={[styles.input,{color:theme.primaryText}]} placeholder='Search For..'  placeholderTextColor='#B4BDC4'  onChangeText={(text) => setSearchQuery(text)}   value={searchQuery} ></TextInput>
      <Image source={require('../../../Assets/Dashboard/Home/FILTER.png')} style={styles.Filter_image} />

      </View>

      {isLoading ? (
              <FlatList
                data={Array.from({length: 8})}
                  
        numColumns={2}
        showsVerticalScrollIndicator={false}
                renderItem={({index}) => (
                  <View  style={styles.menuItem_container}>
    
      <View style={[styles.menuItem,{marginTop:40,marginRight:30}]}>
        
      <Skeleton width={43} height={35} style={{marginLeft:7}} />
  <Skeleton  width={60} height={6} style={{borderRadius:30,marginTop:6}} />
      </View>
   
    </View>
                )}
              />
            ) : (
      <FlatList
        data={filteredMenuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      )}
    </View>
  )
}

export default Home
