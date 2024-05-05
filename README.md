This project prioritizes user information security, providing a secure environment for users to access their data with robust authentication measures in place. Users are required to create an account to access the website, ensuring controlled access. Once logged in, users can engage in various activities securely.

Key features include:

1. Authentication: Users must create an account to log in, preventing unauthorized access.
2. Secure Login/Logout: Users can securely log in and out of the platform.
3. Access Monitoring: Users can view their login/logout history and device information, enhancing transparency and control over their data.
4. Account Protection: Security measures are implemented, such that after three unsuccessful login attempts, the user's account is temporarily blocked for a minute to safeguard against unauthorized access attempts and maintain efficiency.

Additionally, the project incorporates an administrative dashboard, granting administrators comprehensive access to user data and activities. Administrators can monitor user login/logout history, view device information, and manage user data effectively. They hold the authority to permanently block or unblock users as necessary, ensuring overall system integrity and security.

This project focuses on enhancing user security, trust, and reliability through robust authentication and authorization mechanisms. Its primary goal is to instill a sense of safety and confidence in users during their interactions with the platform.

Key Features:

1. User Authentication and Authorization: The platform offers secure login and logout capabilities, utilizing token-based authentication for enhanced security. Users can access their personalized dashboard to manage personal information and track activity securely.
2. Admin Dashboard: Administrators have comprehensive oversight, enabling them to monitor user activity, manage user accounts (including blocking/unblocking), and access all user data for efficient management.
3. Redux Integration: Redux integration optimizes state management, minimizing unnecessary API calls and bolstering performance and scalability.
Technologies Utilized:

Frontend:

• React
• Redux


Backend:

• Node.js
• Express.js
• MongoDB
• JSON Web Token (JWT) for token-based authentication
• SHA-1 for password hashing to fortify user security

Getting Started:
To begin, follow these steps:

1. Clone the repository from the provided link and execute the command 'npm i' to install additional dependencies.
2. Run the assignment file using the command 'npm run dev'.
3. Launch the backend server by executing 'nodemon app' or 'node app.js' in the command prompt.
4. Ensure successful database connection before proceeding.
5. Users must register before accessing the platform.
6. Upon registration, users can navigate to their profile to review login/logout records and device information.
7. Access the admin panel via '/adminlogin'.
8. Use the provided email and password ('admin@gmail.com', '672004') to log in as an administrator.
9. Explore the admin dashboard to leverage advanced functionalities, with ongoing enhancements in progress.

