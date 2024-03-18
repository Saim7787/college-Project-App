export type LMSNotification = {
    title: string;
    description: string;
    day: string;
    id:number;
  };
  
  // Define an array type for multiple LMS notifications

  


 export const lmsNotifications: LMSNotification[] = [
    {
        id: 1,
        title: 'New Course Available',
        description: 'Explore our new course on Web Development! Stay ahead with the latest technologies and best practices. Enroll now!',
        day: 'Monday',
      },
      {
        id: 2,
        title: 'Assignment Due',
        description: 'Your assignment for "Introduction to JavaScript" is due tomorrow. Make sure to submit it on time and showcase your coding skills!',
        day: 'Tuesday',
      },
      {
        id: 3,
        title: 'Announcement',
        description: 'There will be a live session on "Machine Learning Fundamentals" this Friday. Join us for an interactive learning experience and enhance your understanding of ML concepts.',
        day: 'Friday',
      },
      {
        id: 4,
        title: 'Important Update',
        description: 'We have added new resources to the "Data Science Essentials" course. Check them out to deepen your knowledge and excel in the field of data science.',
        day: 'Wednesday',
      },
      {
        id: 5,
        title: 'Reminder: Group Discussion',
        description: 'Don\'t forget about the group discussion scheduled for "Software Engineering Principles" this Thursday. It\'s a great opportunity to collaborate with your peers and gain insights.',
        day: 'Thursday',
      },
  ];