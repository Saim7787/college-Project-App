// Define the interface for the datesheet object
export type DatesheetEntry = {
    courseName: string;
    date: string;
    startTime: string;
    endTime: string;
  }
  
  // Sample datesheet data for final term and mid-term exams
 export const datesheet: DatesheetEntry[] = [
    // Mid-term exams
    { courseName: "Mathematics", date: "2023-11-15", startTime: "10:00 AM", endTime: "12:00 PM" },
    { courseName: "History", date: "2023-11-16", startTime: "2:00 PM", endTime: "4:00 PM" },
    { courseName: "English", date: "2023-11-17", startTime: "9:00 AM", endTime: "11:00 AM" },
  
    // Final term exams
    { courseName: "Physics", date: "2023-12-10", startTime: "9:00 AM", endTime: "11:00 AM" },
    { courseName: "Computer Science", date: "2023-12-12", startTime: "1:00 PM", endTime: "3:00 PM" },
    { courseName: "Chemistry", date: "2023-12-13", startTime: "10:00 AM", endTime: "12:00 PM" },
    // Add more entries as needed
  ];
  


  