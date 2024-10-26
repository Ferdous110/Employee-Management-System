const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete the sales report.",
        taskDate: "2024-10-21",
        category: "Sales",
        active: true,
        failed: false,
        completed: false,
      },
      {
        title: "Task 2",
        description: "Update client records.",
        taskDate: "2024-10-22",
        category: "Client Management",
        active: false,
        failed: false,
        completed: true,
      },
      {
        title: "Task 3",
        description: "Prepare the meeting agenda.",
        taskDate: "2024-10-25",
        category: "Administration",
        active: true,
        failed: false,
        completed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Develop the new feature.",
        taskDate: "2024-10-23",
        category: "Development",
        active: true,
        failed: false,
        completed: false,
      },
      {
        title: "Task 2",
        description: "Fix the reported bugs.",
        taskDate: "2024-10-22",
        category: "Bug Fixing",
        active: true,
        failed: false,
        completed: true,
      },
      {
        title: "Task 3",
        description: "Update the software documentation.",
        taskDate: "2024-10-24",
        category: "Documentation",
        active: false,
        failed: false,
        completed: true,
      },
      {
        title: "Task 4",
        description: "Conduct code review.",
        taskDate: "2024-10-26",
        category: "Development",
        active: false,
        failed: true,
        completed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Schedule client calls.",
        taskDate: "2024-10-23",
        category: "Client Management",
        active: true,
        failed: false,
        completed: false,
      },
      {
        title: "Task 2",
        description: "Submit project status report.",
        taskDate: "2024-10-22",
        category: "Project Management",
        active: false,
        failed: false,
        completed: true,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Design the UI mockups.",
        taskDate: "2024-10-25",
        category: "Design",
        active: true,
        failed: false,
        completed: false,
      },
      {
        title: "Task 2",
        description: "Review competitor products.",
        taskDate: "2024-10-24",
        category: "Market Research",
        active: true,
        failed: false,
        completed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Organize the team building event.",
        taskDate: "2024-10-26",
        category: "Human Resources",
        active: true,
        failed: false,
        completed: false,
      },
      {
        title: "Task 2",
        description: "Plan next month's budget.",
        taskDate: "2024-10-27",
        category: "Finance",
        active: true,
        failed: false,
        completed: false,
      },
      {
        title: "Task 3",
        description: "Prepare payroll documents.",
        taskDate: "2024-10-28",
        category: "Finance",
        active: true,
        failed: false,
        completed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = localStorage.getItem('employees');
   const admin = localStorage.getItem("admin");
}