import React, { useContext } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList,ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../Theme/Color';
import { styles } from './Style';
import RBSheet from "react-native-raw-bottom-sheet";
import { programData } from './OfferedProgram/Data';
import { Section } from './OfferedProgram/Data';
import BottomSheetContent from './BottomSheetContent';
import { removeData } from '../../../Utility/Storage/Storage';
import { unsetUserToken } from '../../../Features/Token';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message'

type TileType = {
  id?: number;
  leftImage?: any | string;
  rightImage?: any | string;
  title: string;
  navigationTitle?: string;
};



const Index: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
const dispatch =useDispatch()
  const navigation = useNavigation();
  const bottomSheetRef = React.useRef<RBSheet>(null);
  const darkModeImageSource = themeContext?.isDarkTheme
  ? require('../../../Assets/Dashboard/More/light_mode.png')
  : require('../../../Assets/Dashboard/More/dark_mode.png');

const darkmode = themeContext?.isDarkTheme
  ? <Image source={darkModeImageSource} style={[styles.leftImage, { tintColor: 'white' }]} />
  : <Image source={darkModeImageSource} style={styles.leftImage} />;
  const tileData:TileType[] = [
    {
      id: 1,
      leftImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/Profile_dark.png')
      : require('../../../Assets/Dashboard/More/profile.png'),
   
      rightImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/arrow_dark.png')
      : require('../../../Assets/Dashboard/More/arrow_forward.png'), // replace with your actual image path
      title: 'Edit Profile',
      navigationTitle: 'EditProfile', // Add a navigation title
    },
    {
      id: 2, 
      leftImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/About_dark.png')
      : require('../../../Assets/Dashboard/More/About.png'),
      rightImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/arrow_dark.png')
      : require('../../../Assets/Dashboard/More/arrow_forward.png'), // replace with your actual image path
      title: 'About Us',
      navigationTitle: 'AboutUs', // Add a navigation title
    },
    {
      id: 3,
      leftImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/contact_dark.png')
      : require('../../../Assets/Dashboard/More/contact.png'),// replace with your actual image path
          rightImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/arrow_dark.png')
      : require('../../../Assets/Dashboard/More/arrow_forward.png'), // replace with your actual image path
      title: 'Our Contacts',
      navigationTitle: 'OurContact', // Add a navigation title
    },
    {
      id: 4,
      leftImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/terms_dark.png')
      : require('../../../Assets/Dashboard/More/Terms.png'),
          rightImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/arrow_dark.png')
      : require('../../../Assets/Dashboard/More/arrow_forward.png'), // replace with your actual image path
      title: 'Offered Program',
      navigationTitle: 'OfferedProgram', // Add a navigation title
    },
    {
      id: 5,
     
          rightImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/arrow_dark.png')
      : require('../../../Assets/Dashboard/More/arrow_forward.png'), // replace with your actual image path
      title: 'Dark Mode',
      navigationTitle: 'Explore More 5', // Add a navigation title
    },
    {
      id: 6,
      leftImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/support_dark.png')
      : require('../../../Assets/Dashboard/More/contact_support.png'),
          rightImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/arrow_dark.png')
      : require('../../../Assets/Dashboard/More/arrow_forward.png'), // replace with your actual image path
      title: 'Guidance & Help',
      navigationTitle: 'GuidanceHelp', 
    },
  
    {
      id: 7,
      leftImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/calculator_dark.png')
      : require('../../../Assets/Dashboard/More/calculator.png'), // replace with your actual image path
          rightImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/arrow_dark.png')
      : require('../../../Assets/Dashboard/More/arrow_forward.png'), // replace with your actual image path
      title: 'Fee Calculator',
      navigationTitle: 'FeeCalculator', // Add a navigation title
    },
    {
      id: 8,
      leftImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/logout_dark.png')
      : require('../../../Assets/Dashboard/More/logout.png'), // replace with your actual image path
          rightImage: themeContext?.isDarkTheme
      ? require('../../../Assets/Dashboard/More/arrow_dark.png')
      : require('../../../Assets/Dashboard/More/arrow_forward.png'), // replace with your actual image path
      title: 'Logout',
     
    },
   
    // Add more objects as needed
  ];
  const handleLogout = async () => {
   
    dispatch(unsetUserToken())


    Toast.show({
      type: 'success',
      text1: 'User logout successfully'
    });

   

  };
const TileComponent: React.FC<TileType > = ({
  leftImage,
  rightImage,
  title,
  navigationTitle,
 
}) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  const handletoggletheme = themeContext?.toggleTheme
  if(title === 'Dark Mode')
  {
    return (
      <TouchableOpacity style={styles.tileContainer} onPress={handletoggletheme}>
       {darkmode}
        <View style={styles.textContainer}>
          <Text style={[styles.title,{color:theme.primaryText}]}>{themeContext?.isDarkTheme ? 'Light Mode' : "Dark Mode"}</Text>
        </View>
        <Image source={rightImage} style={styles.rightImage} />
      </TouchableOpacity>
  )}
  else if(title === 'Offered Program')
  {
    return (
      <TouchableOpacity style={styles.tileContainer} onPress={handleOpen}>
        <Image source={leftImage} style={styles.leftImage} />
        <View style={styles.textContainer}>
          <Text style={[styles.title,{color:theme.primaryText}]}>{title}</Text>
        </View>
        <Image source={rightImage} style={styles.rightImage} />
      </TouchableOpacity>
  )}
  else if(title === 'Logout')
  {
    return (
      <TouchableOpacity style={styles.tileContainer} onPress={handleLogout}>
        <Image source={leftImage} style={styles.leftImage} />
        <View style={styles.textContainer}>
          <Text style={[styles.title,{color:theme.primaryText}]}>{title}</Text>
        </View>
        <Image source={rightImage} style={styles.rightImage} />
      </TouchableOpacity>
  )}
  else
  {
  return (
    <TouchableOpacity style={styles.tileContainer} onPress={()=> navigation.navigate(navigationTitle)}>
      <Image source={leftImage} style={styles.leftImage} />
      <View style={styles.textContainer}>
        <Text style={[styles.title,{color:theme.primaryText}]}>{title}</Text>
      </View>
      <Image source={rightImage} style={styles.rightImage} />
    </TouchableOpacity>
  );
  }
};
  const renderItem = ({ item }: { item: TileType }): JSX.Element => (
    <TileComponent
      leftImage={item.leftImage}
      rightImage={item.rightImage}
      title={item.title}
      navigationTitle={item.navigationTitle}
  
    />
  );

  const handleOpen = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
    }
  };

  const handleClose = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.close();
    }
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.primaryBackground }]}>
      <View style={[styles.body, { backgroundColor: theme.input_Background }]}>
        <View style={styles.profile_image}>
          <Image source={require('../../../Assets/Dashboard/profile/Image.png')} style={styles.image} />
        </View>
        <Text style={[styles.profile_name, { color: theme.primaryText }]}>James S. Hernandez</Text>
        <Text style={[styles.profile_mail, { color: theme.PrimarylightText }]}>
          hernandex.redial@gmail.ac.in
        </Text>

        <FlatList
          data={tileData}
          renderItem={renderItem}
          keyExtractor={(item) => item.title.toString()}
        />
      </View>

      <RBSheet

ref={bottomSheetRef}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={288}
          animationType='fade'
          customStyles={{
            wrapper: {
                backgroundColor: "rgba(0,0,0,0.5)",
              },
              draggableIcon: {
                backgroundColor: themeContext?.isDarkTheme ? "rgba(255, 255, 255, 0.30)"
                :" rgba(0, 0, 0, 0.30)",
                height:1,
                width:36
              },
              container: {
                backgroundColor:theme.primaryBackground,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
          }}
        >
          <View style={[styles.BottomContainer,{backgroundColor:theme.primaryBackground}]}>   
          <Text style={[styles.bottom_heading,{color:theme.primaryText}]}>Select one of the Given options</Text>
        
          <BottomSheetContent data={programData} onClose={() => bottomSheetRef.current?.close()} />
   
          </View>
       
          

      
   


 
         


</RBSheet>
<Toast
        position='top'
        bottomOffset={20}
      />
    </View>
  );
};

export default Index;
