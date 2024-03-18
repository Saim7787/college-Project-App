import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import Header from '../../../../Component/Header Button/index';
import { styles } from './Style';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { Picker } from '@react-native-picker/picker';
import { ThemeContext } from '../../../../Theme/ThemeContext';
import { lightTheme, darkTheme } from '../../../../Theme/Color';
import DocumentPicker from 'react-native-document-picker';
import SubmitButton from '../../../../Component/Footer Button/Index';
import { FONTSIZE } from '../../../../Theme/FontSize';
import { FONTFAMILY } from '../../../../Theme/FontFamily';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Index = () => {
  const [selectedId, setSelectedId] = React.useState<string | undefined>();
const [selectedId2, setSelectedId2] = React.useState<string | undefined>();
  const radioButtons: RadioButtonProps[] = React.useMemo(() => [
    {
      id: '1',
      label: 'Suggestion',
      value: 'Suggestion',
    },
    {
      id: '2',
      label: 'Complaints',
      value: 'Complaints',
    },
  ], []);

  const radioButtons2nd: RadioButtonProps[] = React.useMemo(() => [
    {
      id: '1',
      label: 'Yes',
      value: 'Yes',
    },
    {
      id: '2',
      label: 'No',
      value: 'No',
    },
  ], []);

  const institutionCategories = [
    'Administration', 'Faculty', 'Facilities', 'Other',
    'Administration', 'Faculty', 'Facilities', 'Other',
    'Administration', 'Faculty', 'Facilities', 'Other',
    'Administration', 'Faculty', 'Facilities', 'Other',
  ];

  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
  const handletoggletheme = themeContext?.toggleTheme;

  const validationSchema = Yup.object().shape({
    subject: Yup.string().required('Subject is required'),
    description: Yup.string().required('Description is required'),
    category: Yup.string().required('Category is required'),
  });

  const formik = useFormik({
    initialValues: {
      subject: '',
      description: '',
      category: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted with values:', values);
    },
  });

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };

  return (
    <KeyboardAwareScrollView>

    <View style={[styles.container, { backgroundColor: theme.input_Background }]}>
      <Header text='Suggestion Box' />
      <Pressable onPress={handletoggletheme}>
        <Text style={[styles.note, { color: theme.PrimarylightText }]}>
          Note: This form is designed for users to provide suggestions and file complaints related to our services. It includes sections for personal information, the nature of feedback (suggestion or complaint), and details about the user's experience.
        </Text>
        <View style={styles.divider}></View>

      </Pressable>
      <View style={styles.Form_contanier}>
        <View style={styles.radio_view}>
          <Text style={[styles.heading_radio, { color: theme.PrimarylightText }]}>What do you want to do?</Text>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={(value) => formik.setFieldValue('categoryType', value)}
            layout='row'
          />
        </View>
        <View style={styles.radio_view}>
          <Text style={[styles.heading_radio, { color: theme.PrimarylightText }]}>Are you want to be anonymous?</Text>
          <RadioGroup
            radioButtons={radioButtons2nd}
            onPress={(value) => formik.setFieldValue('anonymous', value)}
            layout='row'
          />
        </View>
        <View style={[styles.category, { backgroundColor: theme.input_Background }]}>
          <Picker
            selectedValue={formik.values.category}
            itemStyle={styles.heading_radio}
            style={{ color: theme.PrimarylightText }}
            onValueChange={(itemValue) => formik.setFieldValue('category', itemValue)}
          >
            {institutionCategories.map((category, index) => (
              <Picker.Item key={index} label={category} value={category} />
            ))}
          </Picker>
        </View>
        <Text style={styles.errorText}>{formik.touched.category && formik.errors.category}</Text>

        <View style={[styles.input_container, { backgroundColor: theme.input_Background,  }]}>
          <TextInput
            style={[styles.input, { color: theme.PrimarylightText }]}
            placeholder="Subject"
            placeholderTextColor={theme.PrimarylightText}
            onChangeText={formik.handleChange('subject')}
            value={formik.values.subject}
            onBlur={formik.handleBlur('subject')}
          />
        </View>
        <Text style={styles.errorText}>{formik.touched.subject && formik.errors.subject}</Text>

        <View style={[styles.input_container, { backgroundColor: theme.input_Background, }]}>
          <TextInput
            editable
            style={[styles.input, { color: theme.PrimarylightText }]}
            placeholder="Description"
            placeholderTextColor={theme.PrimarylightText}
            multiline={true}
            numberOfLines={4}
            onChangeText={formik.handleChange('description')}
            value={formik.values.description}
            onBlur={formik.handleBlur('description')}
          />
        </View>
        <Text style={styles.errorText}>{formik.touched.description && formik.errors.description}</Text>

        <TouchableOpacity
          style={[styles.input_container, { backgroundColor: theme.input_Background,  }]}
          onPress={pickDocument}
        >
          <Text style={[styles.input, { padding: 10, color: theme.PrimarylightText }]}>Attach File</Text>
        </TouchableOpacity>
        <SubmitButton text='Submit' handleSubmit={formik.handleSubmit} />
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
};

export default Index;
