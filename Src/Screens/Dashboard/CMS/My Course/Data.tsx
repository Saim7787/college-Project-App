type Assignment = {
    name: string;
    score: number;
    issueDate: string; // Assuming date is represented as a string (you can use Date type if needed)
    dueDate: string; // Assuming date is represented as a string (you can use Date type if needed)
  };
  
 export type CourseType = {
    course: string;
    professor: string;
    attendance: number;
    midtermMarks: number;
    finalTermMarks: number;
    assignments: Assignment[];
    about: string;
  };
  
 export const CourseData: CourseType[] = [
    {
        course: "Mathematics 101",
        professor: "Dr. Smith",
        attendance: 90,
        midtermMarks: 75,
        finalTermMarks: 85,
        assignments: [
          { name: "Assignment 1", score: 92, issueDate: "2023-01-10", dueDate: "2023-01-20" },
          { name: "Assignment 2", score: 88, issueDate: "2023-02-05", dueDate: "2023-02-15" },
          { name: "Assignment 3", score: 95, issueDate: "2023-03-01", dueDate: "2023-03-10" },
        ],
        about: "Introduction to fundamental mathematical concepts and problem-solving techniques.",
      },
      {
        course: "Computer Science 201",
        professor: "Prof. Johnson",
        attendance: 85,
        midtermMarks: 80,
        finalTermMarks: 88,
        assignments: [
          { name: "Project 1", score: 90, issueDate: "2023-01-15", dueDate: "2023-01-25" },
          { name: "Project 2", score: 85, issueDate: "2023-02-10", dueDate: "2023-02-20" },
          { name: "Project 3", score: 92, issueDate: "2023-03-05", dueDate: "2023-03-15" },
        ],
        about: "Fundamentals of computer science, algorithms, and software development.",
      },
      {
        course: "History 150",
        professor: "Dr. Davis",
        attendance: 95,
        midtermMarks: 78,
        finalTermMarks: 87,
        assignments: [
          { name: "Essay 1", score: 89, issueDate: "2023-01-12", dueDate: "2023-01-22" },
          { name: "Essay 2", score: 91, issueDate: "2023-02-07", dueDate: "2023-02-17" },
          { name: "Research Paper", score: 85, issueDate: "2023-03-02", dueDate: "2023-03-12" },
        ],
        about: "Exploration of key historical events and their impact on societies.",
      },
      {
        course: "Physics 202",
        professor: "Prof. Anderson",
        attendance: 88,
        midtermMarks: 82,
        finalTermMarks: 90,
        assignments: [
          { name: "Lab Report 1", score: 88, issueDate: "2023-01-18", dueDate: "2023-01-28" },
          { name: "Lab Report 2", score: 91, issueDate: "2023-02-13", dueDate: "2023-02-23" },
          { name: "Final Project", score: 94, issueDate: "2023-03-08", dueDate: "2023-03-18" },
        ],
        about: "Study of classical mechanics, thermodynamics, and electromagnetism.",
      },
      {
        course: "Literature 120",
        professor: "Dr. Robinson",
        attendance: 92,
        midtermMarks: 85,
        finalTermMarks: 89,
        assignments: [
          { name: "Book Review", score: 86, issueDate: "2023-01-20", dueDate: "2023-01-30" },
          { name: "Poetry Analysis", score: 90, issueDate: "2023-02-15", dueDate: "2023-02-25" },
          { name: "Term Paper", score: 92, issueDate: "2023-03-05", dueDate: "2023-03-15" },
        ],
        about: "Exploration of literary works from different genres and time periods.",
      },
      {
        course: "Chemistry 301",
        professor: "Prof. Martinez",
        attendance: 87,
        midtermMarks: 79,
        finalTermMarks: 86,
        assignments: [
          { name: "Chemical Analysis", score: 84, issueDate: "2023-01-22", dueDate: "2023-02-01" },
          { name: "Experiment Report", score: 88, issueDate: "2023-02-17", dueDate: "2023-02-27" },
          { name: "Final Exam", score: 91, issueDate: "2023-03-12", dueDate: "2023-03-22" },
        ],
        about: "Principles of modern chemistry, laboratory techniques, and analysis.",
      },
      {
        course: "Economics 220",
        professor: "Dr. Miller",
        attendance: 89,
        midtermMarks: 83,
        finalTermMarks: 88,
        assignments: [
          { name: "Case Study 1", score: 87, issueDate: "2023-01-25", dueDate: "2023-02-04" },
          { name: "Case Study 2", score: 92, issueDate: "2023-02-20", dueDate: "2023-03-02" },
          { name: "Research Project", score: 90, issueDate: "2023-03-07", dueDate: "2023-03-17" },
        ],
        about: "Study of economic theories, principles, and their real-world applications.",
      },
      {
        course: "Psychology 110",
        professor: "Prof. Taylor",
        attendance: 91,
        midtermMarks: 86,
        finalTermMarks: 90,
        assignments: [
          { name: "Psychological Experiment", score: 89, issueDate: "2023-01-28", dueDate: "2023-02-07" },
          { name: "Case Analysis", score: 88, issueDate: "2023-02-23", dueDate: "2023-03-05" },
          { name: "Final Project", score: 92, issueDate: "2023-03-10", dueDate: "2023-03-20" },
        ],
        about: "Exploration of human behavior, cognition, and psychological principles.",
      },
      {
        course: "Political Science 250",
        professor: "Dr. Adams",
        attendance: 94,
        midtermMarks: 81,
        finalTermMarks: 87,
        assignments: [
          { name: "Policy Analysis", score: 85, issueDate: "2023-02-01", dueDate: "2023-02-11" },
          { name: "Research Paper", score: 90, issueDate: "2023-02-26", dueDate: "2023-03-08" },
          { name: "Final Exam", score: 88, issueDate: "2023-03-15", dueDate: "2023-03-25" },
        ],
        about: "Study of political systems, international relations, and policy analysis.",
      },
      {
        course: "Art History 180",
        professor: "Prof. Turner",
        attendance: 86,
        midtermMarks: 88,
        finalTermMarks: 85,
        assignments: [
          { name: "Art Critique", score: 91, issueDate: "2023-02-05", dueDate: "2023-02-15" },
          { name: "Research Project", score: 87, issueDate: "2023-02-28", dueDate: "2023-03-10" },
          { name: "Final Presentation", score: 89, issueDate: "2023-03-15", dueDate: "2023-03-25" },
        ],
        about: "Exploration of art movements, cultural influences, and influential artists.",
      },
  ];
  
  