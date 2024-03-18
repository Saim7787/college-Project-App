interface Course {
    courseName: string;
    creditHours: number;
  }
  
  export interface SemesterType {
    name: string;
    courses: Course[];
  }
  

export const semesters:SemesterType[] = [
    {
      name: 'Semester 1',
      courses: [
        { courseName: 'Mathematics I', creditHours: 3 },
        { courseName: 'Introduction to Computer Science', creditHours: 4 },
        { courseName: 'English Composition', creditHours: 3 },
        // Add more courses as needed
      ],
    },
    {
      name: 'Semester 2',
      courses: [
        { courseName: 'Mathematics II', creditHours: 3 },
        { courseName: 'Data Structures', creditHours: 4 },
        { courseName: 'History Elective', creditHours: 3 },
        { courseName: 'Programming in Java', creditHours: 4 },
        // Add more courses as needed
      ],
    },
    {
      name: 'Semester 3',
      courses: [
        { courseName: 'Physics I', creditHours: 4 },
        { courseName: 'Algorithm Design', creditHours: 4 },
        { courseName: 'Literature Elective', creditHours: 3 },
        { courseName: 'Database Fundamentals', creditHours: 3 },
        // Add more courses as needed
      ],
    },
    {
      name: 'Semester 4',
      courses: [
        { courseName: 'Physics II', creditHours: 4 },
        { courseName: 'Database Management', creditHours: 3 },
        { courseName: 'Social Science Elective', creditHours: 3 },
        { courseName: 'Web Development Basics', creditHours: 4 },
        // Add more courses as needed
      ],
    },
    {
      name: 'Semester 5',
      courses: [
        { courseName: 'Computer Networks', creditHours: 4 },
        { courseName: 'Operating Systems', creditHours: 4 },
        { courseName: 'Ethics in Computing', creditHours: 3 },
        { courseName: 'Software Testing', creditHours: 3 },
        // Add more courses as needed
      ],
    },
    {
      name: 'Semester 6',
      courses: [
        { courseName: 'Software Engineering', creditHours: 4 },
        { courseName: 'Artificial Intelligence', creditHours: 3 },
        { courseName: 'Environmental Science Elective', creditHours: 3 },
        { courseName: 'Mobile App Development', creditHours: 4 },
        // Add more courses as needed
      ],
    },
    {
      name: 'Semester 7',
      courses: [
        { courseName: 'Web Development', creditHours: 4 },
        { courseName: 'Machine Learning', creditHours: 4 },
        { courseName: 'Internship/Project', creditHours: 3 },
        { courseName: 'Computer Graphics', creditHours: 3 },
        // Add more courses as needed
      ],
    },
    {
      name: 'Semester 8',
      courses: [
        { courseName: 'Cybersecurity', creditHours: 4 },
        { courseName: 'Capstone Project', creditHours: 4 },
        { courseName: 'Elective Course', creditHours: 3 },
        { courseName: 'Advanced Topics in AI', creditHours: 4 },
        // Add more courses as needed
      ],
    },
  ];
  
  export const totalSemesters: number = semesters.length;
 export  const totalCourses: number = semesters.reduce((acc, semester) => acc + semester.courses.length, 0);
 export  const totalCreditHours: number = semesters.reduce((acc, semester) => {
    return acc + semester.courses.reduce((courseAcc, course) => courseAcc + course.creditHours, 0);
  }, 0);
  
