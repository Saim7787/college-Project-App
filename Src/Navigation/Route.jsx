import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { getData } from '../Utility/Storage/Storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navgiationStrings from '../Constant/navgiationStrings';
import { FillProfile, ForgotPassword, Login, NewPassword, Register, Slider, VerifyPassword,AboutUs,  AccountBook,   DateSheet,   EditProfile,   FeeCalculator,  GradeBook,  GuidanceHelp,  Home, LectureSchedule, MyCourse, NewsDetails, Notification, NotificationDetails, OfferedProgram, OurContact, ProgramDetails, ProgramsDetails, SchemeStudy, SchoolDetails, SuggestionBox } from '../Screens/index';
import Navigator from './Tab Navigation/Navigator';
import CourseDetailsScreen from '../Screens/Dashboard/CMS/My Course/CourseDetails/Index';
import { useSelector } from 'react-redux';
const Route  = () => {
  const data = useSelector((state) => state.token.token);
  const [token, setToken] = useState('');
  const Stack = createNativeStackNavigator();

  console.log('token',token)
  console.log('data',data)
  useEffect(() => {
    fetchData();
    // Fetch data when the component mounts
  }, []);

  const fetchData = async () => {
    const fetchedToken = await getData();
    setToken(fetchedToken);
  };
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'slider'}>
    {data ? (

    <Stack.Group>   
  <Stack.Screen name={'Navigator'} component={Navigator} /> 
      <Stack.Screen name={navgiationStrings.Home} component={Home} />
      <Stack.Screen name={navgiationStrings.NewsDetails} component={NewsDetails} />
      <Stack.Screen name={navgiationStrings.SchoolDetails} component={SchoolDetails} />
      <Stack.Screen name={navgiationStrings.ProgramDetails} component={ProgramDetails} />
      <Stack.Screen name={navgiationStrings.AboutUs} component={AboutUs} />
      <Stack.Screen name={navgiationStrings.OfferedProgram} component={OfferedProgram} />
      <Stack.Screen name={navgiationStrings.ProgramsDetails} component={ProgramsDetails} />
      <Stack.Screen name={navgiationStrings.OurContact} component={OurContact} />
      <Stack.Screen name={navgiationStrings.FeeCalculator} component={FeeCalculator} />
      <Stack.Screen name={navgiationStrings.GuidanceHelp} component={GuidanceHelp} />
      <Stack.Screen name={navgiationStrings.SchemeStudy} component={SchemeStudy} />
      <Stack.Screen name={navgiationStrings.SuggestionBox} component={SuggestionBox} />
      <Stack.Screen name={navgiationStrings.AccountBook} component={AccountBook} />
      <Stack.Screen name={navgiationStrings.GradeBook} component={GradeBook} />
      <Stack.Screen name={navgiationStrings.MyCourse} component={MyCourse} />
      <Stack.Screen name={navgiationStrings.CourseDetails} component={CourseDetailsScreen} />
      <Stack.Screen name={navgiationStrings.LectureSchedule} component={LectureSchedule} />
      <Stack.Screen name={navgiationStrings.DateSheet} component={DateSheet} />
      <Stack.Screen name={navgiationStrings.EditProfile} component={EditProfile} />
      <Stack.Screen name={navgiationStrings.Notification} component={Notification} />
      <Stack.Screen name={navgiationStrings.NotificationDetail} component={NotificationDetails} />
      </Stack.Group>
      ) : ( 
<Stack.Group>  
      <Stack.Screen name={navgiationStrings.Login} component={Login} />
      <Stack.Screen name={navgiationStrings.Slider} component={Slider} />
      <Stack.Screen name={navgiationStrings.Register} component={Register} />
      <Stack.Screen name={navgiationStrings.FillProfile} component={FillProfile} />
      <Stack.Screen name={navgiationStrings.ForgotPassword} component={ForgotPassword} />
    <Stack.Screen name={navgiationStrings.VerifyPassword} component={VerifyPassword} />
      <Stack.Screen name={navgiationStrings.NewPassword} component={NewPassword} />
      </Stack.Group>
      )}
      </Stack.Navigator>
</NavigationContainer>
  )
}

export default  Route
