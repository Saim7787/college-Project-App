import React, { FC, ReactElement } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { styles } from './Style';

interface IndexProps {
  handleSubmit: () => void;
  text:string // Assuming handleSubmit is a function with no arguments and no return value
}

const Index: FC<IndexProps> = ({ handleSubmit,text }: IndexProps): ReactElement => {
  return (
    <TouchableOpacity style={styles.Button} onPress={handleSubmit} activeOpacity={0.4}>
      <Text style={styles.button_text}>
      {text}
      </Text>
      <View style={styles.Button_inner_left}>
        <Image source={require('../../Assets/Auth/Register/Fill_1.png')} style={styles.button_icon} />
      </View>
    </TouchableOpacity>
  );
}

export default Index;
