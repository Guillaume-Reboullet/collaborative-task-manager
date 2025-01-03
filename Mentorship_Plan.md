# Comprehensive Mentorship Plan for Collaborative Task Manager

This document guides you step-by-step to complete the project. It includes detailed explanations for each task, focusing on TypeScript, GraphQL, and design patterns.

---

## **Phase 1: Backend Development**
### **Task 1: Implement User Management**
#### **1.1 Database Schema**
- **Goal:** Create a `User` model to manage user data securely.
- Add the following to `prisma/schema.prisma`:
  ```prisma
  model User {
    id       String   @id @default(uuid())
    name     String
    email    String   @unique
    password String
    role     Role
  }

  enum Role {
    Admin
    Manager
    Member
  }
  ```
- Run:
  ```bash
  npx prisma migrate dev --name add_user_model
  ```

#### **1.2 NestJS Module**
- **Goal:** Set up a NestJS module to handle user-related operations.
1. Create the module:
   ```bash
   nest generate module users
   ```
2. Generate the service and resolver:
   ```bash
   nest generate service users
   nest generate resolver users
   ```

#### **1.3 CRUD Methods**
- **Goal:** Implement user CRUD operations using Prisma.
1. **In `UsersService`**:
   - Use the Prisma client to add methods like `createUser`, `getAllUsers`, `updateUser`, `deleteUser`.
   - Example:
     ```typescript
     async createUser(data: CreateUserDto): Promise<User> {
       return this.prisma.user.create({ data });
     }
     ```

2. **In `UsersResolver`**:
   - Add GraphQL mutations/queries like `createUser`, `users`.
   - Example:
     ```typescript
     @Mutation(() => User)
     createUser(@Args('data') data: CreateUserDto) {
       return this.usersService.createUser(data);
     }
     ```

#### **1.4 Authentication**
- **Goal:** Add secure login and signup.
1. Hash passwords with `bcrypt` before saving them.
2. Use `jsonwebtoken` to generate a JWT token during login.

---

### **Task 2: Implement Team Management**
#### **2.1 Database Schema**
- Add the following `Team` model:
  ```prisma
  model Team {
    id      String   @id @default(uuid())
    name    String
    members User[]   @relation("UserTeams")
  }
  ```
- Migrate the database:
  ```bash
  npx prisma migrate dev --name add_team_model
  ```

#### **2.2 Team Module**
- Generate the module, service, and resolver:
  ```bash
  nest generate module teams
  nest generate service teams
  nest generate resolver teams
  ```

#### **2.3 CRUD Methods**
- **In `TeamsService`**:
  - Add methods for `createTeam`, `addMember`, `removeMember`.
- **In `TeamsResolver`**:
  - Add mutations/queries for creating and managing teams.

---

### **Task 3: Implement Task Management**
#### **3.1 Database Schema**
- Define the `Task` model:
  ```prisma
  model Task {
    id          String   @id @default(uuid())
    title       String
    description String
    priority    String
    deadline    DateTime
    assignee    User?    @relation(fields: [assigneeId], references: [id])
    assigneeId  String?
  }
  ```
- Migrate the database:
  ```bash
  npx prisma migrate dev --name add_task_model
  ```

#### **3.2 Task Module**
- Generate the module, service, and resolver:
  ```bash
  nest generate module tasks
  nest generate service tasks
  nest generate resolver tasks
  ```

#### **3.3 Methods**
- Add methods in `TasksService` for CRUD operations.
- Add GraphQL resolvers to manage tasks.

---

## **Phase 2: Frontend Development**
### **Task 4: Setup Frontend**
#### **4.1 Initialize Vite**
- Run:
  ```bash
  npm create vite@latest frontend --template react-ts
  cd frontend
  npm install
  ```

#### **4.2 Setup Apollo Client**
- Install Apollo Client:
  ```bash
  npm install @apollo/client graphql
  ```

- Create `src/apollo/client.ts`:
  ```typescript
  import { ApolloClient, InMemoryCache } from '@apollo/client';

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

  export default client;
  ```

---

### **Task 5: Implement Features**
#### **5.1 Authentication**
- Create `Login` and `Signup` components.
- Use GraphQL mutations for login/signup and store JWT.

#### **5.2 Teams**
- Fetch teams and create forms for managing members.

#### **5.3 Tasks**
- Fetch tasks and create forms for task creation and assignment.

---

## **Phase 3: Deployment**
1. Create Dockerfiles for backend and frontend.
2. Set up Docker Compose for container orchestration.
3. Add CI/CD workflows for automated deployment.

---

### **Final Steps**
- Write tests for all modules and components.
- Optimize backend and frontend for production.
- Add analytics to track task completion and overdue rates.
