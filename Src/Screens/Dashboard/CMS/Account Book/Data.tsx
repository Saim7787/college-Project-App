export type ChallanType = {
    challanNumber: string;
    issueDate: string;
    dueDate: string;
    paidDate: string | null;
    semesterNumber: number;
    amount: number;
    status: boolean;
  };

export const challans:ChallanType = [
    {
      challanNumber: 'CH001',
      issueDate: '2023-01-01',
      dueDate: '2023-01-15',
      paidDate: '2023-01-10',
      semesterNumber: 1,
      amount: 5000,
      status: true, // Paid
    },
    {
      challanNumber: 'CH002',
      issueDate: '2023-02-01',
      dueDate: '2023-02-15',
      paidDate: null, // Not paid yet
      semesterNumber: 1,
      amount: 4500,
      status: false, // Not Paid
    },
    {
      challanNumber: 'CH003',
      issueDate: '2023-03-01',
      dueDate: '2023-03-15',
      paidDate: '2023-03-10',
      semesterNumber: 2,
      amount: 5200,
      status: true, // Paid
    },
    {
      challanNumber: 'CH004',
      issueDate: '2023-04-01',
      dueDate: '2023-04-15',
      paidDate: null, // Not paid yet
      semesterNumber: 2,
      amount: 4800,
      status: false, // Not Paid
    },
    {
      challanNumber: 'CH005',
      issueDate: '2023-05-01',
      dueDate: '2023-05-15',
      paidDate: '2023-05-10',
      semesterNumber: 3,
      amount: 5500,
      status: true, // Paid
    },
    {
      challanNumber: 'CH006',
      issueDate: '2023-06-01',
      dueDate: '2023-06-15',
      paidDate: null, // Not paid yet
      semesterNumber: 3,
      amount: 5100,
      status: false, // Not Paid
    },
    {
      challanNumber: 'CH007',
      issueDate: '2023-07-01',
      dueDate: '2023-07-15',
      paidDate: '2023-07-10',
      semesterNumber: 4,
      amount: 5800,
      status: true, // Paid
    },
    {
      challanNumber: 'CH008',
      issueDate: '2023-08-01',
      dueDate: '2023-08-15',
      paidDate: null, // Not paid yet
      semesterNumber: 4,
      amount: 5400,
      status: false, // Not Paid
    },
    {
      challanNumber: 'CH009',
      issueDate: '2023-09-01',
      dueDate: '2023-09-15',
      paidDate: '2023-09-10',
      semesterNumber: 5,
      amount: 6000,
      status: true, // Paid
    },
    {
      challanNumber: 'CH010',
      issueDate: '2023-10-01',
      dueDate: '2023-10-15',
      paidDate: null, // Not paid yet
      semesterNumber: 5,
      amount: 5600,
      status: false, // Not Paid
    },
    {
      challanNumber: 'CH011',
      issueDate: '2023-11-01',
      dueDate: '2023-11-15',
      paidDate: '2023-11-10',
      semesterNumber: 6,
      amount: 6200,
      status: true, // Paid
    },
    {
      challanNumber: 'CH012',
      issueDate: '2023-12-01',
      dueDate: '2023-12-15',
      paidDate: null, // Not paid yet
      semesterNumber: 6,
      amount: 5800,
      status: false, // Not Paid
    },
    {
      challanNumber: 'CH013',
      issueDate: '2024-01-01',
      dueDate: '2024-01-15',
      paidDate: '2024-01-10',
      semesterNumber: 7,
      amount: 6500,
      status: true, // Paid
    },
    {
      challanNumber: 'CH014',
      issueDate: '2024-02-01',
      dueDate: '2024-02-15',
      paidDate: null, // Not paid yet
      semesterNumber: 7,
      amount: 6100,
      status: false, // Not Paid
    },
    {
      challanNumber: 'CH015',
      issueDate: '2024-03-01',
      dueDate: '2024-03-15',
      paidDate: '2024-03-10',
      semesterNumber: 8,
      amount: 6800,
      status: true, // Paid
    },
    {
      challanNumber: 'CH016',
      issueDate: '2024-04-01',
      dueDate: '2024-04-15',
      paidDate: null, // Not paid yet
      semesterNumber: 8,
      amount: 6400,
      status: false, // Not Paid
    },
  ];
  
  
  