import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import React from 'react'
import { challans } from './Data';
import { ChallanType } from './Data'
import HeaderButton from '../../../../Component/Header Button/index';
import { styles } from './Style';
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
const Index = () => {
    const themeContext = React.useContext(ThemeContext);
    const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
    const handletoggletheme = themeContext?.toggleTheme
    const renderItem = ({ item }: { item: ChallanType }) => (
        <Pressable style={[styles.item,{backgroundColor:theme.card_background,marginTop:12}]} >
            <View style={styles.header_card}>  
            <View style={styles.row}>
            <Text style={[styles.heading,{color:theme.PrimarylightText}]}>Challan Number:</Text>
          <Text style={[styles.value,{color:theme.primaryText}]}>{item.challanNumber}</Text>
            </View>
         
          <View style={styles.row}> 
          <Text style={[styles.heading,{color:theme.PrimarylightText}]}>Status:</Text>
          <Text style={[styles.value,{color:theme.primaryText}]}>{item.status ? 'Paid' : 'Not Paid'}</Text>
          </View>
          </View>
      
          <View style={styles.card_body}>  
          <View>
          <Text style={[styles.heading,{color:theme.PrimarylightText}]}>Issue Date:</Text>
          <Text style={[styles.value,{color:theme.primaryText}]}>{item.issueDate}</Text>
          
          </View>
          <Text style={{fontSize:30}}> |</Text>
          <View>  
        
          <Text style={[styles.heading,{color:theme.PrimarylightText}]}>Due Date:</Text>
          <Text style={[styles.value,{color:theme.primaryText}]}>{item.dueDate}</Text>
          </View>
          <Text style={{fontSize:30}}> |</Text>

          <View>  
          <Text style={[styles.heading,{color:theme.PrimarylightText}]}>Paid Date:</Text>
          <Text style={[styles.value,{color:theme.primaryText}]}>{item.paidDate || 'Not Paid'}</Text>
          </View>
          </View>
          <View style={styles.footer_card}> 
        <View >  
          <Text style={[styles.heading,{color:theme.PrimarylightText}]}>Semester:</Text>
          <Text style={[styles.value,{color:theme.primaryText}]}>{item.semesterNumber}</Text>
          </View>
         

          <View>  
          <Text style={[styles.heading,{color:theme.PrimarylightText}]}>Amount:</Text>
          <Text style={[styles.value,{color:theme.primaryText}]}>{item.amount}</Text>
          </View>

          </View>
          </Pressable>
  
      );
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      <HeaderButton text='Account Book'/>
      <FlatList
      data={challans}
      renderItem={renderItem}
      keyExtractor={(item) => item.challanNumber}
      showsVerticalScrollIndicator={false}
    />
    </View>
  )
}

export default Index
