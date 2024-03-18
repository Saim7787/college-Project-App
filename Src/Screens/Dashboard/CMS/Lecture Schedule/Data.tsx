type Lecture = {
    courseName: string;
    roomNo: string;
    professorName: string;
    startTime: string;
    endTime: string;
  }
  
 export type DaySchedule =  {
    day: string;
    lectures: Lecture[];
  }
  
 export const lectureSchedule: DaySchedule[] = [
    {
      day: 'Monday',
      lectures: [
        {
          courseName: 'Introduction to React Native',
          roomNo: 'Room 101',
          professorName: 'Dr. Smith',
          startTime: '9:00 AM',
          endTime: '11:00 AM',
        },
        {
          courseName: 'Advanced JavaScript',
          roomNo: 'Room 103',
          professorName: 'Prof. Johnson',
          startTime: '1:00 PM',
          endTime: '3:00 PM',
        },
      ],
    },
    {
      day: 'Tuesday',
      lectures: [
        {
          courseName: 'Mobile App Design',
          roomNo: 'Room 102',
          professorName: 'Dr. Davis',
          startTime: '10:00 AM',
          endTime: '12:00 PM',
        },
        // Add more lectures for Tuesday
      ],
    },
    {
      day: 'Wednesday',
      lectures: [
        {
          courseName: 'Web Development Basics',
          roomNo: 'Room 104',
          professorName: 'Prof. White',
          startTime: '2:00 PM',
          endTime: '4:00 PM',
        },
        // Add more lectures for Wednesday
      ],
    },
    // Add more days and lectures as needed
  ];