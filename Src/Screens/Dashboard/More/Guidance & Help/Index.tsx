
import React,{useEffect} from 'react'
import Header from '../../../../Component/Header Button/index'
import { styles } from './Style'
import RNFS from 'react-native-fs';
import { universityPolicies } from './Data';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
const Index = () => {
  const themeContext = React.useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  useEffect(() => {
    // Optional: Delete the file if it exists before downloading
    const filePath = RNFS.DocumentDirectoryPath + '/example.pdf';
    RNFS.unlink(filePath)
      .then(() => {
        console.log('Previous file deleted');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const downloadFile = () => {
    const url = 'https://www.example.com/example.pdf';
    const filePath = RNFS.DocumentDirectoryPath + '/example.pdf';

    RNFS.downloadFile({
      fromUrl: url,
      toFile: filePath,
      background: true, // Enable downloading in the background (iOS only)
      discretionary: true, // Allow the OS to control the timing and speed (iOS only)
      progress: (res) => {
        // Handle download progress updates if needed
        const progress = (res.bytesWritten / res.contentLength) * 100;
        console.log(`Progress: ${progress.toFixed(2)}%`);
      },
    })
      .promise.then((response) => {
        console.log('File downloaded!', response);
      })
      .catch((err) => {
        console.log('Download error:', err);
      });
  };
    interface Policy {
        title: string;
        url: string;
      }
      
      interface UniversityPolicy {
        title: string;
        policies: Policy[];
      }
      
      interface PolicyItemProps {
        title: string;
        policies: Policy[];
      }
      const PolicyItem: React.FC<PolicyItemProps> = ({ title, policies }) => (
        <View style={{ marginBottom: 20 }}>
          <Text style={[styles.heading,{color:theme.primaryText}]}>{title}</Text>
          <FlatList
            data={policies}
            keyExtractor={(item) => item.title}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={downloadFile}>
                <Text style={[styles.subheading,{color:theme.PrimarylightText}]}>{item.title}</Text>
                <View style={styles.divider}></View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
        <Header text='Guidance & Help' />
        <View style={[styles.body,{backgroundColor:theme.input_Background}]}>  
      <FlatList
        data={universityPolicies}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PolicyItem title={item.title} policies={item.policies} />}
      />
      </View>
    </View>
  )
}
;
export default Index
