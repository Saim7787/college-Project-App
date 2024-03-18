import React, { useState,useContext } from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { semesters, SemesterType } from './Data';
import { styles } from './Style'
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import HeaderButton from '../../../../Component/Header Button/index';
import { Skeleton } from '@rneui/themed';
import { FlatList } from 'react-native';

const TabViewExample = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  const [index, setIndex] = useState(0);
  const isLoading = false

  const routes = semesters.map((semester, index) => ({
    key: `${index}`,
    title: semester.name,
  }));
  const RenderSemester = ({ semester }: { semester: SemesterType }) => (
    <View style={[styles.scene, { backgroundColor: theme.input_Background }]}>
    {isLoading ? (
      <FlatList
        data={Array.from({ length: 12 })}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ index }) => (
          <View style={{ marginBottom:20 }}>
            <Skeleton height={7} style={{ borderRadius: 30, marginTop: 10, width: '80%' }} />
            

          </View>
        )}
      />
    ) : (
      <>
        {semester.courses.map((course, index) => (
          <React.Fragment key={index}>
            <Text style={[styles.courseText, { color: theme.PrimarylightText }]}>
              {`${course.courseName} - ${course.creditHours} credit hours`}
            </Text>
            <View style={styles.divider}></View>
          </React.Fragment>
        ))}
      </>
    )}
  </View>
  
  );
  const renderScene = SceneMap(
    Object.fromEntries(
      semesters.map((semester, index) => [`${index}`, () => <RenderSemester semester={semester} />])
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

<HeaderButton text='Scheme of the Study'  />

<View style={[styles.card,{backgroundColor:'#0961F5'}]}>
  <View>
  <View style={styles.row}>
    {isLoading ? (
  <Skeleton height={7} style={{ borderRadius: 30, marginTop: 10, width: '60%' }} />
    )   : (
      <>  
<Text style={styles.subHeading}> Total Duration:</Text>  
<Text style={styles.heading}> 4 Years </Text>  
</>
)}
</View>
<View style={[styles.row,{marginTop:10}]}>
{isLoading ? (
  <Skeleton height={7} style={{ borderRadius: 30, marginTop: 10, width: '60%' }} />
    )   : (
      <>  
<Text style={styles.subHeading}> Total Semester:</Text>  
<Text style={styles.heading}> 8 </Text>  
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



export default TabViewExample;
