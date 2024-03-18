interface Course {
    courseName: string;
    obtainedMarks: number;
    grade: string;
  }
  
  export interface GradeType {
    name: string;
    courses: Course[];
  }

export const Grade: GradeType[] = [
    {
      name: 'Semester 1',
      courses: [
        { courseName: 'Mathematics I', obtainedMarks: 85, grade: '' },
        { courseName: 'Introduction to Computer Science', obtainedMarks: 78, grade: '' },
        { courseName: 'English Composition', obtainedMarks: 92, grade: '' },
      ],
    },
    {
      name: 'Semester 2',
      courses: [
        { courseName: 'Mathematics II', obtainedMarks: 76, grade: '' },
        { courseName: 'Data Structures', obtainedMarks: 88, grade: '' },
        { courseName: 'History Elective', obtainedMarks: 70, grade: '' },
        { courseName: 'Programming in Java', obtainedMarks: 95, grade: '' },
      ],
    },
    {
      name: 'Semester 3',
      courses: [
        { courseName: 'Physics I', obtainedMarks: 90, grade: '' },
        { courseName: 'Algorithm Design', obtainedMarks: 82, grade: '' },
        { courseName: 'Literature Elective', obtainedMarks: 75, grade: '' },
        { courseName: 'Database Fundamentals', obtainedMarks: 88, grade: '' },
      ],
    },
    {
      name: 'Semester 4',
      courses: [
        { courseName: 'Physics II', obtainedMarks: 85, grade: '' },
        { courseName: 'Database Management', obtainedMarks: 78, grade: '' },
        { courseName: 'Social Science Elective', obtainedMarks: 92, grade: '' },
        { courseName: 'Web Development Basics', obtainedMarks: 80, grade: '' },
      ],
    },
    {
      name: 'Semester 5',
      courses: [
        { courseName: 'Computer Networks', obtainedMarks: 88, grade: '' },
        { courseName: 'Operating Systems', obtainedMarks: 90, grade: '' },
        { courseName: 'Ethics in Computing', obtainedMarks: 85, grade: '' },
        { courseName: 'Software Testing', obtainedMarks: 75, grade: '' },
      ],
    },
    {
      name: 'Semester 6',
      courses: [
        { courseName: 'Software Engineering', obtainedMarks: 92, grade: '' },
        { courseName: 'Artificial Intelligence', obtainedMarks: 85, grade: '' },
        { courseName: 'Environmental Science Elective', obtainedMarks: 78, grade: '' },
        { courseName: 'Mobile App Development', obtainedMarks: 88, grade: '' },
      ],
    },
    {
      name: 'Semester 7',
      courses: [
        { courseName: 'Web Development', obtainedMarks: 80, grade: '' },
        { courseName: 'Machine Learning', obtainedMarks: 85, grade: '' },
        { courseName: 'Internship/Project', obtainedMarks: 92, grade: '' },
        { courseName: 'Computer Graphics', obtainedMarks: 78, grade: '' },
      ],
    },
    {
      name: 'Semester 8',
      courses: [
        { courseName: 'Cybersecurity', obtainedMarks: 88, grade: '' },
        { courseName: 'Capstone Project', obtainedMarks: 90, grade: '' },
        { courseName: 'Elective Course', obtainedMarks: 82, grade: '' },
        { courseName: 'Advanced Topics in AI', obtainedMarks: 85, grade: '' },
      ],
    },
  ];
  

 export  const calculateGPA = (obtainedMarks: number): number => {
  
    if (obtainedMarks >= 90) {
      return 4.0;
    } else if (obtainedMarks >= 80) {
      return 3.5;
    } else if (obtainedMarks >= 70) {
      return 3.0;
    } else if (obtainedMarks >= 60) {
      return 2.5;
    } else {
      return 0.0;
    }
  };
  
  export const calculateCGPA = (Grade: GradeType[]): number => {
    // Replace this logic with your actual CGPA calculation formula
    // This is a sample formula, you might have your own CGPA calculation
    const totalGPA = Grade.reduce((acc, semester) => {
      const semesterGPA = semester.courses.reduce((courseAcc, course) => {
        const courseGPA = calculateGPA(course.obtainedMarks);
        return courseAcc + courseGPA;
      }, 0);
      return acc + semesterGPA;
    }, 0);
  
    return totalGPA / Grade.length;
  };


  // Calculate and display GP for each course
  Grade.forEach((semester) => {
    semester.courses.forEach((course) => {
    const gp = calculateGPA(course.obtainedMarks);
      console.log(`Course: ${course.courseName}, GP: ${gp}`);
    });
  });