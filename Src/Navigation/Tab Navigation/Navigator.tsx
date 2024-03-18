import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity, View, Text, Platform } from 'react-native';
import { lightTheme, darkTheme } from '../../Theme/Color';
import { ThemeContext } from '../../Theme/ThemeContext';
import { Home } from '../../Screens';
import Profile from '../../Screens/Dashboard/Profile/Index';
import News from '../../Screens/Dashboard/News/Index';
import MyCourse from '../../Screens/Dashboard/Home/Index';
import More from '../../Screens/Dashboard/More/Index';

const Tab = createBottomTabNavigator();

interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTabBar: React.FC<CustomTabBarProps> = ({ state, descriptors, navigation }) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  const handletoggletheme = themeContext?.toggleTheme;
  const tabBarStyle = {
    flexDirection: 'row',
    zIndex:1,
    position: 'relative',
    backgroundColor: theme.card_background,
    ...(Platform.OS === 'android' && { elevation: 5 }), // Apply elevation only on Android
    ...(Platform.OS === 'ios' && {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      
    }), // Apply shadow only on iOS
  };
  const getTabBarIcon = (route: any, focused: boolean, label: string) => {
    let icon;
    if (route.name === 'CMS') {
      icon = themeContext?.isDarkTheme
        ? require('../../Assets/Dashboard/Navigator/darkhome.png')
        : require('../../Assets/Dashboard/Navigator/dashboard.png');
    } else if (route.name === 'Profile') {
      icon = themeContext?.isDarkTheme
      ? require('../../Assets/Dashboard/Navigator/darkuser.png')
      : require('../../Assets/Dashboard/Navigator/iconamoon_profile-light.png');
    } else if (route.name === 'News') {
      icon = themeContext?.isDarkTheme
        ? require('../../Assets/Dashboard/Navigator/darkinsight.png')
        : require('../../Assets/Dashboard/Navigator/news.png');
    } else if (route.name === 'Home') {
      icon = themeContext?.isDarkTheme
        ? require('../../Assets/Dashboard/Navigator/darkuser.png')
        : require('../../Assets/Dashboard/Navigator/home.png');
    }
    else if (route.name === 'More') {
      icon = themeContext?.isDarkTheme
        ? require('../../Assets/Dashboard/Navigator/darkuser.png')
        : require('../../Assets/Dashboard/Navigator/Settings.png');
    }
    return (
      <View style={{ alignItems: 'center',padding:10 }}>
        <Image
          source={icon}
          style={{ width: 20, height: 20, tintColor: focused ? '#167F71' : theme.primaryText }}
        />
        <Text
          style={{
            color: focused ? '#167F71' : theme.primaryText,
            fontSize: 12,
            fontWeight: '400',
            letterSpacing: 0.12,
            fontFamily: 'AtkinsonHyperlegible-Regular',
            marginTop: 8,
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={tabBarStyle}
    >
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {getTabBarIcon(route, isFocused, label)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Navigator: React.FC = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="CMS" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={MyCourse} options={{ headerShown: false }} />
      <Tab.Screen name="News" component={News} options={{ headerShown: false }} />
      <Tab.Screen name="More" component={More} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default Navigator;
