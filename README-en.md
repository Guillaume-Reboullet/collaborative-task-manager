# **Collaborative Task Management System**

## **Description**
The Collaborative Task Management System is a full-stack web application designed to help teams create, assign, and track tasks efficiently. Built with modern web technologies, it incorporates advanced design patterns to ensure scalability and maintainability.

## **Why I Made This Project?**
This project was developed to enhance my skills in:
- Implementing advanced design patterns such as Singleton, Factory, Builder, Facade, Adapter, Strategy, and Observer.
- Building a full-stack application using GraphQL and Apollo for seamless communication between front-end and back-end.
- Improving my understanding of TypeScript, OOP principles, and creating modular, reusable components.

## **Features**
- User Authentication: Secure login and signup using JWT.
- Team Management: Create and manage teams with role-based access control.
- Task Management: Create, assign, and update tasks with priorities and deadlines.
- Notifications: Real-time notifications for task updates and assignments.
- Analytics: Insights into task completion rates and overdue tasks.
- Responsive Design: Optimized for both desktop and mobile.

## **How to See the Project**

### **For Normal Users**
1. Visit the live application: [https://project.com](https://project.com)  
2. Sign up or log in to start managing your tasks.

### **For Developers**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/collaborative-task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd collaborative-task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     NODE_ENV=development
     PORT=4000
     JWT_SECRET=your_super_secret_key
     DATABASE_URL=postgresql://user:password@localhost:5432/task_manager
     ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the application in your browser at: [http://localhost:4000](http://localhost:4000)

## **Technologies Used**
- Front-End: React, TypeScript, Apollo Client, Tailwind CSS
- Back-End: Node.js, TypeScript, Apollo Server, GraphQL, Prisma
- Database: PostgreSQL
- Testing: Jest
- Design Patterns: Singleton, Builder, Factory, Facade, Adapter, Strategy, Observer