interface Policy {
    title: string;
    url: string;
  }
  
 export  interface PolicySection {
    title: string;
    policies: Policy[];
  }
  
 export const universityPolicies: PolicySection[] = [
    {
      title: 'General Download',
      policies: [
        {
          title: 'Sexual Harassment',
          url: 'URL_TO_DOWNLOAD_SEXUAL_HARASSMENT_POLICY'
        },
        {
          title: 'Code of Conduct',
          url: 'URL_TO_DOWNLOAD_CODE_OF_CONDUCT'
        },
        {
          title: 'Diversity and Inclusion',
          url: 'URL_TO_DOWNLOAD_DIVERSITY_POLICY'
        },
        {
          title: 'Ethics and Integrity',
          url: 'URL_TO_DOWNLOAD_ETHICS_POLICY'
        },
        {
          title: 'Health and Safety',
          url: 'URL_TO_DOWNLOAD_HEALTH_AND_SAFETY_POLICY'
        },
      ]
    },
    {
      title: 'Application Form',
      policies: [
        {
          title: 'Supervisor Allocation Form for PhD',
          url: 'URL_TO_DOWNLOAD_SUPERVISOR_ALLOCATION_FORM'
        },
        {
          title: 'Application Form for Admission',
          url: 'URL_TO_DOWNLOAD_ADMISSION_APPLICATION_FORM'
        },
        {
          title: 'Scholarship Opportunity Application Form',
          url: 'URL_TO_DOWNLOAD_SCHOLARSHIP_APPLICATION_FORM'
        },
        {
          title: 'Policy Manual for Application Process',
          url: 'URL_TO_DOWNLOAD_APPLICATION_POLICY_MANUAL'
        },
        {
          title: 'Code of Ethics for Applicants',
          url: 'URL_TO_DOWNLOAD_APPLICATION_CODE_OF_ETHICS'
        },
      ]
    },
    {
      title: 'Admission',
      policies: [
        {
          title: 'Application Form for Admission',
          url: 'URL_TO_DOWNLOAD_EE_APPLICATION_FORM'
        },
        {
          title: 'Admission Policies',
          url: 'URL_TO_DOWNLOAD_EE_ADMISSION_POLICIES'
        },
        {
          title: 'Scholarship Opportunity Policies',
          url: 'URL_TO_DOWNLOAD_EE_SCHOLARSHIP_POLICIES'
        },
        {
          title: 'Policy Manual for Admission',
          url: 'URL_TO_DOWNLOAD_EE_POLICY_MANUAL'
        },
        {
          title: 'Code of Ethics for Electrical Engineers',
          url: 'URL_TO_DOWNLOAD_EE_CODE_OF_ETHICS'
        },
      ]
    },
    {
      title: 'Scholarship',
      policies: [
        {
          title: 'Application Form for Scholarship',
          url: 'URL_TO_DOWNLOAD_BA_APPLICATION_FORM'
        },
        {
          title: 'Admission Policies for Scholarship',
          url: 'URL_TO_DOWNLOAD_BA_ADMISSION_POLICIES'
        },
        {
          title: 'Scholarship Opportunity Policies',
          url: 'URL_TO_DOWNLOAD_BA_SCHOLARSHIP_POLICIES'
        },
        {
          title: 'Policy Manual for Scholarship',
          url: 'URL_TO_DOWNLOAD_BA_POLICY_MANUAL'
        },
        {
          title: 'Code of Ethics for Business Administrators',
          url: 'URL_TO_DOWNLOAD_BA_CODE_OF_ETHICS'
        },
      ]
    },
    // Add more sections or titles as needed
  ];
  