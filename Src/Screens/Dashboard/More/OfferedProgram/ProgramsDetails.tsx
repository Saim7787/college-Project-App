import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgramDetailsComponent from '../../../../Component/ProgramDetails/ProgramDetails';
import { Section,programData } from './Data';
import { SPACING } from '../../../../Theme/Spacing';
import { FONTSIZE } from '../../../../Theme/FontSize';
const ProgramsDetails: React.FC<{ route: any,navigation:any }> = ({ route,navigation }) => {
  const { name } = route.params;
 



  const selectedProgram = programData
  .flatMap((carouselItem) => carouselItem.programs?.flatMap((program) => program.subPrograms)) // Flatten the nested subPrograms arrays
  .find((subProgram) => subProgram.name === name);
  return (
    <View style={{flex:1}}>
   
<ProgramDetailsComponent selectedProgram={selectedProgram} />
    </View>
  )
}

export default ProgramsDetails
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
     
    },
    body:{
      paddingHorizontal: SPACING.space_20,
      paddingVertical:SPACING.space_10,
    
    },
   
  }
)
