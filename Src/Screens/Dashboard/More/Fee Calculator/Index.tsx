import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect,useContext} from 'react';
import HeaderButton from '../../../../Component/Header Button/index';
import { SelectList } from 'react-native-dropdown-select-list';
import { styles } from './Style';
import { coursesData,CourseData } from './Data';
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import ProgramDetailsComponent from '../../../../Component/ProgramDetails/ProgramDetails';
interface Course {
    key: string;
    value: string;
  }
const Index = () => {
  const [selected, setSelected] = React.useState<Course | null>(null);
  const [fee, setFee] = React.useState<CourseData | undefined>(undefined);
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  const handletoggletheme = themeContext?.toggleTheme
  const courses = [
    { key: '1', value: 'Computer Science' },
    { key: '2', value: 'Electrical Engineering' },
    { key: '3', value: 'Business Administration' },
    { key: '4', value: 'Mechanical Engineering' },
    { key: '5', value: 'Psychology' },
    { key: '6', value: 'Civil Engineering' },
    { key: '7', value: 'Physics' },
    { key: '8', value: 'Mathematics' },
    { key: '9', value: 'Chemistry' },
    { key: '10', value: 'Economics' },
    { key: '11', value: 'Environmental Science' },
    { key: '12', value: 'Political Science' },
    { key: '13', value: 'History' },
    { key: '14', value: 'Geology' },
    { key: '15', value: 'Biology' },
    { key: '16', value: 'Sociology' },
    { key: '17', value: 'Philosophy' },
    { key: '18', value: 'Statistics' },
    { key: '19', value: 'Anthropology' },
    { key: '20', value: 'Finance' },
    { key: '21', value: 'Marketing' },
    { key: '22', value: 'Nursing' },
    { key: '23', value: 'Architecture' },
    { key: '24', value: 'English Literature' },
    { key: '25', value: 'Astronomy' },
    { key: '26', value: 'Dentistry' },
    { key: '27', value: 'Public Health' },
    { key: '28', value: 'Criminal Justice' },
    { key: '29', value: 'Graphic Design' },
    { key: '30', value: 'Nutrition' },
    { key: '31', value: 'Mechatronics' },
    { key: '32', value: 'International Relations' },
    { key: '33', value: 'Music' },
    { key: '34', value: 'Film Studies' },
    { key: '35', value: 'Veterinary Medicine' },
    { key: '36', value: 'Industrial Engineering' },
    { key: '37', value: 'Fashion Design' },
    { key: '38', value: 'Geography' },
    { key: '39', value: 'Interior Design' },
    { key: '40', value: 'Kinesiology' },
    { key: '41', value: 'Linguistics' },
    { key: '42', value: 'Mechanical Design' },
    { key: '43', value: 'Oceanography' },
    { key: '44', value: 'Petroleum Engineering' },
    { key: '45', value: 'Robotics' },
    { key: '46', value: 'Sports Science' },
    { key: '47', value: 'Artificial Intelligence' },
    { key: '48', value: 'Data Science' },
    { key: '49', value: 'Cybersecurity' },
    { key: '50', value: 'Blockchain Technology' },
  ];
  
  useEffect(() => {
    // Update fee when selected changes
    const selectedFee = coursesData.find((data) => data.id === selected);
    setFee(selectedFee);
  }, [selected]);

  const image = false
  return (
  <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      <HeaderButton text="fee Calculator" />
      <View style={styles.body}>  
      <SelectList
        setSelected={(val:any) => setSelected(val[0])}
        data={courses}
     boxStyles={{marginBottom:30}}
   inputStyles={{color:theme.primaryText}}
   
        fontFamily='Mulish-Bold'
        dropdownTextStyles={{color:theme.primaryText}}
      />
</View>

      <ProgramDetailsComponent selectedProgram={fee} image={image} />
   
    </View>
  );
};

export default Index;