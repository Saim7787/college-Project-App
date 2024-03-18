type FeeStructure = {
  tuition: string;
  additionalFees: string;
};

type SubProgram = {
  name: string;
  image: string;
  duration: string;
  description: string;
  feeStructure: FeeStructure;
};

type Program = {
  name: string;
  subPrograms: SubProgram[];
};

export type Section = {
  title: string;
  id: number;
  programs: Program[];
};
export const programData:Section[] = [
    {
      title: 'Undergraduate Programs',
      id:1,
      programs: [
        {
          name: 'Bachelor of Science in Computer Science',
          subPrograms: [
            {
              name: 'Software Engineering',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
             
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$10,000 per year',
                  additionalFees: '$2,000 per year',
                },
              
            },
            {
              name: 'Computer Science',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$10,000 per year',
                  additionalFees: '$2,000 per year',
                },
               
            
            },
          ],
        },
        {
          name: 'Bachelor of Arts in Psychology',
          subPrograms: [
            {
              name: 'Clinical Psychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          
                duration: '3 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$9,000 per year',
                  additionalFees: '$1,500 per year',
                },
             
            },
            {
              name: 'Counseling Psychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          
                duration: '3 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$9,000 per year',
                  additionalFees: '$1,500 per year',
                },
              
            },
          ],
        },
        // Add more undergraduate programs as needed
      ],
    },
    {
      title: 'Postdoctoral Programs',
      id:2,
      programs: [
        {
          name: 'Doctor of Philosophy (Ph.D.) in Computer Science',
          subPrograms: [
            {
              name: 'Artificial Intelligence',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
           
                duration: '5 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$12,000 per year',
                  additionalFees: '$2,500 per year',
                },
             
            },
            {
              name: 'Data Science',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '5 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$12,000 per year',
                  additionalFees: '$2,500 per year',
                },
             
            },
          ],
        },
        {
          name: 'Doctor of Psychology (Psy.D.)',
          subPrograms: [
            {
              name: 'Forensic Psychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
             
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
            
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
          ],
        },
        // Add more postdoctoral programs as needed
      ],
    },
    {
      title: 'Graduate Programs',
      id:3,
      programs: [
        {
          name: 'Master of Business Administration (MBA)',
          subPrograms: [
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
          ],
        },
        {
          name: 'Master of Science in Electrical Engineering',
          subPrograms: [
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
          ],
        },
      ],
    },
    {
      title: 'Postgraduate Programs',
      id:4,
      programs: [
        {
          name: 'Executive Master of Business Administration (EMBA)',
          subPrograms: [
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
          ],
        },
        {
          name: 'Doctor of Engineering (Eng.D.)',
          subPrograms: [
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
          ],
        },
      ],
    },
    {
      title: 'Associate Degree Programs',
      id:5,
      programs: [
        {
          name: 'Associate of Arts in Communication',
          subPrograms: [
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
          ],
        },
        {
          name: 'Associate of Science in Criminal Justice',
          subPrograms: [
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000',
                },
           
            },
            {
              name: 'Clinical Neuropsychology',
              image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
            
                duration: '4 years',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                feeStructure: {
                  tuition: '$11,000 per year',
                  additionalFees: '$2,000 per year',
                },
           
            },

          ],
        },
      ],
    }
    
  ];
  