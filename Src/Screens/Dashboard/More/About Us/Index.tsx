import { ScrollView, StyleSheet, Text, View ,Image,TouchableOpacity,FlatList} from 'react-native'
import React,{useContext} from 'react'
import Header from '../../../../Component/Header Button'
import { styles } from './Style'
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
const Index = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
    const handletoggletheme = themeContext?.toggleTheme
    type Item = {
        title: string;
        icon: any;
        description: string;
      };
      
      // Array of objects with the specified type
      const items: Item[] = [
        {
          title: "Contact Mail",
          icon: require('../../../../Assets/Dashboard/More/AboutUs/mail.png'),
          description: "info@dsa.edu.pk"
        },
        {
          title: "Call Now",
          icon: require('../../../../Assets/Dashboard/More/AboutUs/call.png'),
          description: "03000000000"
        },
        {
          title: "Website",
          icon: require('../../../../Assets/Dashboard/More/AboutUs/website.png'),
          description: "www.mul.edu.pk"
        },
        {
            title: "Copyright",
            icon: require('../../../../Assets/Dashboard/More/AboutUs/copyright.png'),
            description: "Sample University "
          }
      ];
      const renderGridItem = ({ item }: { item: Item }) => (
        <View style={styles.gridItem}>
          <View style={{ backgroundColor: theme.input_Background, padding: 10, borderRadius: 16, elevation: 1 }}>
            {/* Apply the white tint only for dark theme */}
            <Image
              source={item.icon}
              style={[styles.icon, { tintColor: themeContext?.isDarkTheme ? 'white' : undefined }]}
            />
            <Text style={[styles.gridText, { color: theme.primaryText }]}>{item.title}</Text>
            <Text style={[styles.gridpera, { color: theme.PrimarylightText }]}>{item.description}</Text>
          </View>
        </View>
      );
      
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.container,{backgroundColor:theme.primaryBackground}]}>
        <Header text='About Us'/>
        <View style={[styles.body,{backgroundColor:theme.input_Background}]}>  
      <Text style={[styles.heading,{color:theme.primaryText}]}>About Us</Text>
      <Text style={[styles.Peragraph,{color:theme.PrimarylightText}]}>At enim hic etiam dolore. Dulce amarum, leve asperum, prope longe, stare movere, quadratum rotundum. At certe gravius. Nullus est igitur cuiusquam dies natalis. Paulum, cum regem Persem captum adduceret, eodem flumine invectio?
Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.

Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M.


Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit.Ut proverbia non nulla veriora sint quam vestra dogmata. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. Omnes enim iucundum motum, quo sensus hilaretur. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Quibusnam praeteritis? Portenta haec esse dicit, quidem hactenus; Si id dicis, vicimus. Qui ita affectus, beatum esse numquam probabis; Igitur neque stultorum quisquam beatus neque sapientium non beatus.

Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. Dolor ergo, id est summum malum, metuetur semper, etiamsi non ader.</Text>

      </View>

      <FlatList
          data={items}
          renderItem={renderGridItem}
          keyExtractor={(item) => item.title}
          numColumns={2}

        />
    </ScrollView>
  )
}

export default Index
