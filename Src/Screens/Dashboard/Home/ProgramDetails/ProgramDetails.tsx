import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgramDetailsComponent from '../../../../Component/ProgramDetails/ProgramDetails';

const ProgramDetails: React.FC<{ route: any,navigation:any }> = ({ route,navigation }) => {
  const { id } = route.params;
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



  const selectedProgram = carouselData
  .flatMap((carouselItem) => carouselItem.programs) // Flatten the nested programs arrays
  .find((program) => program.id === id);
  return (
    <View style={{flex:1}}>
<ProgramDetailsComponent selectedProgram={selectedProgram} image={true} />
    </View>
  )
}

export default ProgramDetails

