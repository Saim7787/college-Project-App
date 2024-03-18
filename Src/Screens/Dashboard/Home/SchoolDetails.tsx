import React,{useContext} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,FlatList } from 'react-native';
import { SPACING } from '../../../Theme/Spacing';
import { FONTSIZE } from '../../../Theme/FontSize';
import { FONTFAMILY } from '../../../Theme/FontFamily';
import { ThemeContext } from '../../../Theme/ThemeContext'
import { lightTheme, darkTheme } from '../../../Theme/Color'
import { Skeleton } from '@rneui/themed';

const SchoolDetails: React.FC<{ route: any,navigation:any }> = ({ route,navigation }) => {
  const { id } = route.params;
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.isDarkTheme ? darkTheme : lightTheme;
const  isLoading = false
 
  interface CarouselItem {
    id: number;
    image: string;
    title: string;
    description: string;
    programs: {
      id: number;
      name: string;
      image:string;
      feeStructure: {
        tuition: string;
        accommodation: string;
        books: string;
      };
    }[];
  }
  const carouselData:CarouselItem[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      description: 'sdhkfsdjfksdjfsdf',
      title: 'School of Software Engineering',
      programs: [
        { id:1,name: 'Computer Science',image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',  feeStructure: { tuition: '$10,000', accommodation: '$5,000', books: '$1,000' } },
        { id:2,name: 'Web Development', image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60', feeStructure: { tuition: '$10,500', accommodation: '$5,200', books: '$1,100' } },
        { id:3,name: 'Software Engineering',image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',  feeStructure: { tuition: '$11,000', accommodation: '$5,500', books: '$1,200' } },
      ],
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      description: 'dshfdsjkhfksdhfksdf',
      title: 'School of Chemistry',
      programs: [
        {id:1, name: 'Organic Chemistry', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$12,000', accommodation: '$6,000', books: '$1,500' } },
        {id:2, name: 'Inorganic Chemistry', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$12,500', accommodation: '$6,200', books: '$1,600' } },
        {id:3, name: 'Analytical Chemistry', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$13,000', accommodation: '$6,500', books: '$1,700' } },
      ],
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      description: 'sdlklsjdfljsdkfklsdfsd',
      title: 'School of Physics',
      programs: [
        {id:1, name: 'Quantum Physics', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$15,000', accommodation: '$7,000', books: '$2,000' } },
        {id:2, name: 'Astrophysics', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$15,500', accommodation: '$7,200', books: '$2,100' } },
        {id:3, name: 'Nuclear Physics', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$16,000', accommodation: '$7,500', books: '$2,200' } },
      ],
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      description: 'dkjsdljfklsdjfklsdjfsdf',
      title: 'School of Botany',
      programs: [
        {id:1, name: 'Botanical Studies',image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$14,000', accommodation: '$6,500', books: '$1,800' } },
        {id:2, name: 'Plant Genetics',image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$14,500', accommodation: '$6,700', books: '$1,900' } },
        {id:3, name: 'Ecology', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",feeStructure: { tuition: '$15,000', accommodation: '$7,000', books: '$2,000' } },
      ],
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      description: 'dlksdfksdjfjlsdfsd',
      title: 'School of Mass Communication',
      programs: [
        { id:1,name: 'Journalism', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$13,000', accommodation: '$6,200', books: '$1,600' } },
        { id:2,name: 'Broadcasting', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$13,500', accommodation: '$6,400', books: '$1,700' } },
        { id:3,name: 'Public Relations', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$14,000', accommodation: '$6,600', books: '$1,800' } },
      ],
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
      description: 'sdlkflsdkfsdkf;lsdfsd',
      title: 'School of BBA',
      programs: [
        {id:1, name: 'Finance', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$16,000', accommodation: '$8,000', books: '$2,500' } },
        {id:2, name: 'Marketing', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$16,500', accommodation: '$8,200', books: '$2,600' } },
        {id:3, name: 'Human Resource Management', image:"https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60", feeStructure: { tuition: '$17,000', accommodation: '$8,500', books: '$2,700' } },
      ],
    },
  ]

  // Find the news item with the given ID
  const selectedSchool  = carouselData.find((item) => item.id === id);
  const navigateToProgramDetails = (id:number) => {
    // Navigate to the Details screen and pass the ID as a parameter
    navigation.navigate('ProgramDetails', { id });
  };
  if (!selectedSchool ) {
    // Handle case where the item is not found
    return (
      <View style={styles.container}>
        <Text>School not found</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container,{backgroundColor:theme.primaryBackground}]}>
      <View style={styles.image_container}>  
      {isLoading ? (
          
          <Skeleton animation='wave'  style={{width:'100%',height:300}} />
          ) : (
      <Image source={{ uri: selectedSchool.image }} style={styles.newsImage} />
          )}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon_container}>  
      <Image source={require('../../../Assets/Dashboard/News/back.png')} style={styles.backimage} />
      </TouchableOpacity>
      </View>
      <View style={styles.body}>  
      <View style={[styles.newsDetails,{backgroundColor:theme.input_Background}]}>
      {isLoading ? (
        <>  
      <Skeleton animation='wave'  width={150} height={8} style={{borderRadius:30,alignSelf:'center',marginBottom:10}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  <Skeleton animation='pulse'  style={{borderRadius:30,marginTop:7,width:'100%',height:8}} />
  </>
  )
  : (
    <>  
        <Text style={[styles.newsTitle,{color:theme.primaryText}]}>{selectedSchool.title}</Text>
        <Text style={[styles.newsDescription,{color:'#A0A4AB'}]}>{selectedSchool.description}</Text>
</>
        )}
      </View>

  <Text style={[styles.school_heading,{color:theme.primaryText}]}>Offered Program</Text>
  {isLoading ? (
              <FlatList
                data={Array.from({length: 8})}
              horizontal
              showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({index}) => (
                <View style={{marginTop:5}}>
                  <Skeleton animation='wave' style={{marginRight:5}}  width={100} height={100} />
               </View>
                )}
              />
            ) : (
      <FlatList
            data={selectedSchool.programs}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.image_slider} onPress={() => navigateToProgramDetails(item.id)}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
            )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  body:{
    paddingHorizontal: SPACING.space_20,
    paddingVertical:SPACING.space_10,

  },
  icon_container:{
    position:'absolute',
    top:10,
    left:30
  },
  backimage:{
width:26,
height:20,

  },
  image_container:{
position:'relative'
  },
  newsImage: {
    width: '100%', // Adjust width as needed
    height: 300, // Adjust height as needed
    marginBottom: 16,
  },
  newsDetails: {
    width:'100%',
    borderRadius:16,
    paddingHorizontal: SPACING.space_20,
    paddingVertical:SPACING.space_20,
    marginTop:-40,
    zIndex:1000
  },
  newsTitle: {
    fontSize: FONTSIZE.size_17,

    fontFamily: FONTFAMILY.Mulish_Bold,
    marginBottom: 4,
  },
  newsDescription: {
    fontSize: FONTSIZE.size_13,

    fontFamily: FONTFAMILY.Poppins_SemiBold,
  },
  programContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  programTitle: {
    fontSize: FONTSIZE.size_17,
    fontFamily: FONTFAMILY.Mulish_Bold,
    marginRight: 8,
  },
  programImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  image: {
    width: 100,
    height: 100, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius:16
  },
  title: {
    fontSize:FONTSIZE.size_12,
    fontFamily:FONTFAMILY.Mulish_Bold,
 color:'white',
    position:"absolute",
    bottom:10,
    
  },
  image_slider:{
    marginRight:10,
    marginTop:5,
  position:'relative',
  borderRadius:10
  },
  school_heading:{
    fontSize:FONTSIZE.size_24,
    fontFamily:FONTFAMILY.Mulish_Bold,
    marginTop:15,
    marginBottom:10
  }
});

export default SchoolDetails;
