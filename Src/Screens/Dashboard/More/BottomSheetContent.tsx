import React,{useContext} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Section } from './OfferedProgram/Data';
import { useNavigation } from '@react-navigation/native';
import { FONTSIZE } from '../../../Theme/FontSize';
import { FONTFAMILY } from '../../../Theme/FontFamily';
import { ThemeContext } from '../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../Theme/Color';
import { Skeleton } from '@rneui/themed';

type BottomSheetContentProps = {
  data: Section[];
  onClose: () => void;
};

const BottomSheetContent: React.FC<BottomSheetContentProps> = ({ data, onClose }) => {
    const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
const navigation = useNavigation()

  const renderItem = ({ item }: { item: Section }) => (
    <>  
    <TouchableOpacity  onPress={() => navigation.navigate('OfferedProgram',{id:item.id})}>
      <Text style={[styles.heading,{color:theme.PrimarylightText}]}>{item.title}</Text>
    </TouchableOpacity>
    <View style={[styles.divider,{backgroundColor:theme.border}]}></View>
    </>
  );
 const isLoading = false
  return (
    <View>

{isLoading ? (
              <FlatList
                data={Array.from({length: 8})}
              
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index}) => (
  <Skeleton   height={6} style={{borderRadius:30,marginTop:10,width:'60%'}} />
                 
                )}
              />
            ) : (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title?.toString() || ''}
        showsVerticalScrollIndicator={false}
      />
            )}
   
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
    divider: {
        height: 1, // You can adjust the height of the divider
     
        marginVertical: 10, // You can adjust the vertical margin of the divider
      },
      heading:{
fontSize:FONTSIZE.size_14,
fontFamily:FONTFAMILY.Mulish_Bold
      }
})
 