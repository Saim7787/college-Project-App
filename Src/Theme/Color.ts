interface Theme {
    primaryBackground: string;
    primaryText: string;
    PrimarylightText: string;
    SecondayBackground: string;
    SecondaryText?: string;
    WhiteColor?: string;
    tertaryText:string;
    Black:string;
    input_Background: string;
    card_background:string;
  Peragraph_text:string;
  border:string;
  }
  
  const lightTheme: Theme = {
    primaryBackground: '#F5F9FF',
    primaryText: '#202244',
    PrimarylightText:"#545454",
    SecondayBackground: '#F2F2F2',
    SecondaryText: '#E4CFE8',
    WhiteColor:"#FFF",
    tertaryText:"#332DA1",
    Black:'#000',
    input_Background:'#FFF',
    card_background:'#E8F1FF',
    Peragraph_text:'#A0A4AB',
    border:'#E8F1FF'
  };
  
  const darkTheme: Theme = {
    primaryBackground: '#232121',
    primaryText: '#FFF',
  PrimarylightText:"#FFF",
    SecondayBackground: '#000',
    SecondaryText: '#E4CFE8',
    WhiteColor:"#FFF",
    tertaryText:"#332DA1",
    Black:'#FFF',
    input_Background:'#000',
    card_background:'#000',
    Peragraph_text:"#FFF",
    border:'#FFFFFF'


  


  };
  
  export { lightTheme, darkTheme };
  