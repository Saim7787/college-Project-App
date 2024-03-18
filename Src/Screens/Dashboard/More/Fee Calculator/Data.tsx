interface FeeStructure {
    tuition: string;
    accommodation: string;
    books: string;
  }
  
  // Define the interface for a course
  export interface CourseData {
    id: string;
    title: string;
    feeStructure: FeeStructure;
  }
  
  // Array of 50 courses with unique id values
  export const coursesData: CourseData[] = [
    {
        id: '1',
        title: 'Computer Science',
        feeStructure: {
          tuition: '5000',
          accommodation: '1200',
          books: '200',
        },
      },
      {
        id: '2',
        title: 'Electrical Engineering',
        feeStructure: {
          tuition: '5500',
          accommodation: '1100',
          books: '250',
        },
      },
      {
        id: '3',
        title: 'Business Administration',
        feeStructure: {
          tuition: '4800',
          accommodation: '1000',
          books: '150',
        },
      },
      {
        id: '4',
        title: 'Mechanical Engineering',
        feeStructure: {
          tuition: '5600',
          accommodation: '1300',
          books: '180',
        },
      },
      {
        id: '5',
        title: 'Psychology',
        feeStructure: {
          tuition: '5200',
          accommodation: '900',
          books: '180',
        },
      },
      {
        id: '6',
        title: 'Civil Engineering',
        feeStructure: {
          tuition: '5800',
          accommodation: '1200',
          books: '220',
        },
      },
      {
        id: '7',
        title: 'Physics',
        feeStructure: {
          tuition: '4500',
          accommodation: '800',
          books: '120',
        },
      },
      {
        id: '8',
        title: 'Mathematics',
        feeStructure: {
          tuition: '4300',
          accommodation: '700',
          books: '100',
        },
      },
      {
        id: '9',
        title: 'Chemistry',
        feeStructure: {
          tuition: '4600',
          accommodation: '750',
          books: '130',
        },
      },
      {
        id: '10',
        title: 'Economics',
        feeStructure: {
          tuition: '5000',
          accommodation: '1100',
          books: '160',
        },
      },
      {
        id: '11',
        title: 'Environmental Science',
        feeStructure: {
          tuition: '4800',
          accommodation: '1000',
          books: '140',
        },
      },
      {
        id: '12',
        title: 'Political Science',
        feeStructure: {
          tuition: '4900',
          accommodation: '950',
          books: '150',
        },
      },
      {
        id: '13',
        title: 'History',
        feeStructure: {
          tuition: '4700',
          accommodation: '900',
          books: '130',
        },
      },
      {
        id: '14',
        title: 'Geology',
        feeStructure: {
          tuition: '5100',
          accommodation: '1100',
          books: '180',
        },
      },
      {
        id: '15',
        title: 'Biology',
        feeStructure: {
          tuition: '5300',
          accommodation: '1200',
          books: '200',
        },
      },
      {
        id: '16',
        title: 'Sociology',
        feeStructure: {
          tuition: '4800',
          accommodation: '950',
          books: '160',
        },
      },
      {
        id: '17',
        title: 'Philosophy',
        feeStructure: {
          tuition: '4600',
          accommodation: '900',
          books: '140',
        },
      },
      {
        id: '18',
        title: 'Statistics',
        feeStructure: {
          tuition: '4400',
          accommodation: '800',
          books: '120',
        },
      },
      {
        id: '19',
        title: 'Anthropology',
        feeStructure: {
          tuition: '4900',
          accommodation: '1000',
          books: '160',
        },
      },
      {
        id: '20',
        title: 'Finance',
        feeStructure: {
          tuition: '5200',
          accommodation: '1100',
          books: '180',
        },
      },
      {
        id: '21',
        title: 'Marketing',
        feeStructure: {
          tuition: '5000',
          accommodation: '1000',
          books: '170',
        },
      },
      {
        id: '22',
        title: 'Nursing',
        feeStructure: {
          tuition: '5500',
          accommodation: '1200',
          books: '220',
        },
      },
      {
        id: '23',
        title: 'Architecture',
        feeStructure: {
          tuition: '5800',
          accommodation: '1300',
          books: '200',
        },
      },
      {
        id: '24',
        title: 'English Literature',
        feeStructure: {
          tuition: '4600',
          accommodation: '900',
          books: '130',
        },
      },
      {
        id: '25',
        title: 'Astronomy',
        feeStructure: {
          tuition: '5000',
          accommodation: '1100',
          books: '180',
        },
      },
      {
        id: '26',
        title: 'Dentistry',
        feeStructure: {
          tuition: '6000',
          accommodation: '1400',
          books: '250',
        },
      },
      {
        id: '27',
        title: 'Public Health',
        feeStructure: {
          tuition: '5300',
          accommodation: '1200',
          books: '190',
        },
      },
      {
        id: '28',
        title: 'Criminal Justice',
        feeStructure: {
          tuition: '4800',
          accommodation: '950',
          books: '160',
        },
      },
      {
        id: '29',
        title: 'Graphic Design',
        feeStructure: {
          tuition: '5200',
          accommodation: '1100',
          books: '180',
        },
      },
      {
        id: '30',
        title: 'Nutrition',
        feeStructure: {
          tuition: '4900',
          accommodation: '1000',
          books: '160',
        },
      },
      {
        id: '31',
        title: 'Mechatronics',
        feeStructure: {
          tuition: '5700',
          accommodation: '1300',
          books: '220',
        },
      },
      {
        id: '32',
        title: 'International Relations',
        feeStructure: {
          tuition: '5000',
          accommodation: '1100',
          books: '180',
        },
      },
      {
        id: '33',
        title: 'Music',
        feeStructure: {
          tuition: '4800',
          accommodation: '950',
          books: '150',
        },
      },
      {
        id: '34',
        title: 'Film Studies',
        feeStructure: {
          tuition: '5100',
          accommodation: '1000',
          books: '170',
        },
      },
      {
        id: '35',
        title: 'Veterinary Medicine',
        feeStructure: {
          tuition: '5800',
          accommodation: '1400',
          books: '250',
        },
      },
      {
        id: '36',
        title: 'Industrial Engineering',
        feeStructure: {
          tuition: '5600',
          accommodation: '1300',
          books: '200',
        },
      },
      {
        id: '37',
        title: 'Fashion Design',
        feeStructure: {
          tuition: '5300',
          accommodation: '1200',
          books: '180',
        },
      },
      {
        id: '38',
        title: 'Geography',
        feeStructure: {
          tuition: '4700',
          accommodation: '900',
          books: '140',
        },
      },
      {
        id: '39',
        title: 'Interior Design',
        feeStructure: {
          tuition: '5100',
          accommodation: '1100',
          books: '180',
        },
      },
      {
        id: '40',
        title: 'Kinesiology',
        feeStructure: {
          tuition: '5400',
          accommodation: '1200',
          books: '200',
        },
      },
      {
        id: '41',
        title: 'Linguistics',
        feeStructure: {
          tuition: '4800',
          accommodation: '950',
          books: '160',
        },
      },
      {
        id: '42',
        title: 'Mechanical Design',
        feeStructure: {
          tuition: '5700',
          accommodation: '1300',
          books: '220',
        },
      },
      {
        id: '43',
        title: 'Oceanography',
        feeStructure: {
          tuition: '5000',
          accommodation: '1100',
          books: '180',
        },
      },
      {
        id: '44',
        title: 'Petroleum Engineering',
        feeStructure: {
          tuition: '5900',
          accommodation: '1400',
          books: '230',
        },
      },
      {
        id: '45',
        title: 'Robotics',
        feeStructure: {
          tuition: '5500',
          accommodation: '1200',
          books: '200',
        },
      },
      {
        id: '46',
        title: 'Sports Science',
        feeStructure: {
          tuition: '5100',
          accommodation: '900',
          books: '190',
        },
      },
      {
        id: '47',
        title: 'Environmental Science',
        feeStructure: {
          tuition: '4800',
          accommodation: '1000',
          books: '140',
        },
      },
      {
        id: '48',
        title: 'Political Science',
        feeStructure: {
          tuition: '4900',
          accommodation: '950',
          books: '150',
        },
      },
      {
        id: '49',
        title: 'History',
        feeStructure: {
          tuition: '4700',
          accommodation: '900',
          books: '130',
        },
      },
      {
        id: '50',
        title: 'Geology',
        feeStructure: {
          tuition: '5100',
          accommodation: '1100',
          books: '180',
        },
      },
    // Continue with the rest of the objects
  ];
  
  