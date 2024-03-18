import React, { useContext, useState } from 'react';
import { Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { CourseData } from '../Data';
import { styles } from './Style';
import { ThemeContext } from '../../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../../Theme/Color';
import HeaderButton from '../../../../../Component/Header Button/index';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FONTFAMILY } from '../../../../../Theme/FontFamily';
import { Skeleton } from '@rneui/themed';

const CourseDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  const handleToggleTheme = themeContext?.toggleTheme;
  const { courseName } = route.params;
  const isLoading = false

  const selectedCourse = CourseData.find((course) => course.course === courseName);

  if (!selectedCourse) {
    return (
      <View>
        <Text>Error: Course not found</Text>
      </View>
    );
  }

  // Scene components for each tab
  const ProfessorTab = () => (
    <View style={[styles.tabContent, { backgroundColor: theme.input_Background }]}>
      <Text style={[styles.Instructer_Heading, { color: theme.primaryText }]}>Instructor</Text>
      <View style={styles.Professor_row}>
        <Image source={require('../../../../../Assets/Dashboard/Home/MyCourses/image.png')} style={styles.instructer_image} />
        <View style={styles.name_container}>
          <Text style={[styles.Professor_name, { color: theme.primaryText }]}>Saim</Text>
          <Text style={[styles.Professor_job, { color: theme.PrimarylightText }]}>App Developer</Text>
        </View>
      </View>
    </View>
  );

  const AttendanceTab = () => (
    <View style={[styles.tabContent, { backgroundColor: theme.input_Background }]}>
      <Text style={[styles.attandance_heading,{color:theme.PrimarylightText}]}>Attendance: {selectedCourse.attendance}%</Text>
    </View>
  );

  const MidtermTab = () => (
    <View style={[styles.tabContent, { backgroundColor: theme.input_Background }]}>
      <Text style={[styles.attandance_heading,{color:theme.PrimarylightText}]}>Midterm Marks: {selectedCourse.midtermMarks}</Text>
    </View>
  );

  const FinalTermTab = () => (
    <View style={[styles.tabContent, { backgroundColor: theme.input_Background }]}>
      <Text style={[styles.attandance_heading,{color:theme.PrimarylightText}]}>Final Term Marks: {selectedCourse.finalTermMarks}</Text>
    </View>
  );

  const AssignmentsTab = () => (
    <ScrollView style={[styles.tabContent, { backgroundColor: theme.input_Background }]}>
      <Text style={[styles.attandance_heading,{color:theme.PrimarylightText}]}>Assignments:</Text>
      {selectedCourse.assignments.map((assignment) => (
        <View key={assignment.name} style={{ marginLeft: 16 }}>
          <Text style={[styles.attandance_heading,{color:theme.PrimarylightText}]}>{assignment.name}</Text>
          <Text style={[styles.attandance_heading,{color:theme.PrimarylightText}]}>Score: {assignment.score}</Text>
          <Text style={[styles.attandance_heading,{color:theme.PrimarylightText}]}>Issue Date: {assignment.issueDate}</Text>
          <Text style={[styles.attandance_heading,{color:theme.PrimarylightText}]}>Due Date: {assignment.dueDate}</Text>
        </View>
      ))}
    </ScrollView>
  );

  // Tab navigation state
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'professor', title: 'Professor' },
    { key: 'attendance', title: 'Attendance' },
    { key: 'midterm', title: 'Midterm' },
    { key: 'finalTerm', title: 'Final Term' },
    { key: 'assignments', title: 'Assignments' },
  ]);

  // Render tab scene based on index
  const renderScene = SceneMap({
    professor: ProfessorTab,
    attendance: AttendanceTab,
    midterm: MidtermTab,
    finalTerm: FinalTermTab,
    assignments: AssignmentsTab,
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.primaryBackground }]}>
      <HeaderButton text="Course Details" />
      {isLoading ? (
            <>     
  <Skeleton   height={7} style={{borderRadius:30,marginTop:10,width:'100%',}} />
  <Skeleton   height={7} style={{borderRadius:30,marginTop:3,width:'100%',}} />

  <Skeleton   height={7} style={{borderRadius:30,marginTop:2,width:'30%',}} />
  </>
      ) : (
      <Text style={[styles.About_heading,{color:theme.Peragraph_text}]}>{selectedCourse?.about} </Text>
      )}
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: theme.PrimarylightText }}
            style={{ backgroundColor: theme.card_background }}
            labelStyle={{ color: theme.PrimarylightText,fontFamily:FONTFAMILY.Mulish_Bold,fontSize:14 }}
            scrollEnabled
          />
        )}
      />
    </View>
  );
};

export default CourseDetailsScreen;
