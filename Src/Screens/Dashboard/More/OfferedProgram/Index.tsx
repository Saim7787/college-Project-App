import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import { styles } from './Style';
import { Section } from './Data';
import { programData } from './Data';
import HeaderButton from '../../../../Component/Header Button/index';
import { Skeleton } from '@rneui/themed';

const Index: React.FC<{ route: any,navigation:any }> = ({ route,navigation }) => {
  const { id } = route.params;
  const themeContext = React.useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
const isLoading = false
  // Assuming programData is available
  const selectdata = programData.find((item) => item.id === id);

  const renderItem:React.FC<{item:any}> = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <Text style={[styles.subheading,{color:theme.PrimarylightText}]}>
        {item.name}
      </Text>
<ScrollView horizontal  >  
      {item.subPrograms.map((subProgram:any) => (
       
          <TouchableOpacity key={subProgram.name} style={styles.image_slider} onPress={()=> navigation.navigate('ProgramsDetails', { name:subProgram?.name })}>
          <Image source={{ uri: subProgram.image }} style={styles.image} />
          <Text style={styles.title}>{subProgram.name}</Text>
        </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );



  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
           <HeaderButton text='Programs '/>
           {isLoading ? (
  <Skeleton   height={6} style={{borderRadius:30,marginTop:20,width:'60%',marginBottom:20}} />
           ) : (
      <Text style={[styles.heading,{color:theme.primaryText}]}>
        {selectdata?.title}
      </Text>
           )}
      {isLoading ? (
              <FlatList
                data={Array.from({length: 5})}
              
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index}) => (
                  <>   
  <Skeleton   height={6} style={{borderRadius:30,marginTop:10,width:'60%',marginBottom:20}} />
  <View style={{flexDirection:'row',gap:20,marginBottom:10}}>
  <Skeleton  width={60} height={60} />
  <Skeleton  width={60} height={60} />
</View>
</>         
                )}
              />
            ) : (
      <FlatList
        data={selectdata?.programs}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
            )}

    </View>
  );
};

export default Index;
