import React, { useState,useContext } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, Pressable ,FlatList} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Grade,GradeType } from './Data';
import { styles } from './Style'
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import HeaderButton from '../../../../Component/Header Button/index';
import { calculateCGPA,calculateGPA } from './Data';
import { Skeleton } from '@rneui/themed';

const Index = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  
  const [index, setIndex] = useState(0);
const isLoading = false
  const routes = Grade?.map((semester, index) => ({
    key: `${index}`,
    title: semester.name,
  }));
  const RenderSemester = ({ semester }: { semester: GradeType }) => (
    <View style={[styles.scene, { backgroundColor: theme.input_Background }]}>
        <View style={[styles.card,{backgroundColor:'#0961F5',marginBottom:20}]}>
  <View>
  <Pressable style={styles.row}>
  {isLoading ? (
  <Skeleton height={7} style={{ borderRadius: 30, marginTop: 10, width: '60%' }} />
    )   : (
      <>  
<Text style={styles.subHeading}> CGPA:</Text>  
<Text style={styles.heading}> {calculateCGPA([semester]).toFixed(2)} </Text>  
</>
    )}
</Pressable>
<View style={[styles.row,{marginTop:10}]}>
{isLoading ? (
  <Skeleton height={7} style={{ borderRadius: 30, marginTop: 10, width: '60%' }} />
    )   : (
      <>  
<Text style={styles.subHeading}> GPA:</Text>  
{semester?.courses.map((course, index) => (
      <Text key={index} style={styles.heading}>
        {calculateGPA(course.obtainedMarks).toFixed(2)}
      </Text>
    ))}
    </>
    )}

</View>
  </View>
  <View>
  <View style={styles.row}>
  {isLoading ? (
  <Skeleton height={7} style={{ borderRadius: 30, marginTop: 10, width: '60%' }} />
    )   : (
      <>  
<Text style={styles.subHeading}> Total Credit Hour:</Text>  
<Text style={styles.heading}> 137 </Text>  
</>
    )}
</View>
<View style={[styles.row,{marginTop:10}]}>
{isLoading ? (
  <Skeleton height={7} style={{ borderRadius: 30, marginTop: 10, width: '60%' }} />
    )   : (
      <>  
<Text style={styles.subHeading}> Total Courses:</Text>  
<Text style={styles.heading}> 45 </Text>  
</>
    )}
</View>
  </View>

</View>
{isLoading ? (
      <FlatList
        data={Array.from({ length: 12 })}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ index }) => (
          <View style={{ marginBottom:20 }}>
            <Skeleton height={7} style={{ borderRadius: 30, marginTop: 10, width: '80%' }} />
            

          </View>
        )}
      />
    ) : (
      <>
      {semester?.courses.map((course, index) => (
        <> 
        <Text key={index} style={[styles.courseText,{color:theme.PrimarylightText}]}>
          {`${course.courseName} - ${course.obtainedMarks}  obtained marks`}
        </Text>
        <View style={styles.divider}></View>
        </>
      ))}
       
      </>
    )}
    </View>
  );
  const renderScene = SceneMap(
    Object.fromEntries(
      Grade.map((semester, index) => [`${index}`, () => <RenderSemester semester={semester} />])
    )
  );

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.label}
      scrollEnabled
    />
  );

  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      <View style={styles.container_inner}>

<HeaderButton text='Grade Book'  />


      </View>
    
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      style={styles.containertabbar}
      tabBarPosition="top"
      renderTabBar={renderTabBar}
    />
  </View>
  );
};



export default Index;
