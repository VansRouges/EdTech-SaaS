# EdTech Frontend

This repository contains the frontend for the EdTech application, designed to facilitate communication and academic performance tracking between parents, teachers, and students. The application provides dashboards, event updates, attendance records, and more.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Dashboard Overview:** Real-time academic performance metrics.
- **Notifications:** Memo and announcement system for teachers and parents.
- **Event Management:** Track and manage school events.
- **Attendance Tracking:** Monitor student attendance.
- **Parental Communication:** Dedicated section for parent-teacher interactions.
- **Role-based Access Control:** Different views for admins, teachers, and parents.

## Tech Stack
- **Framework:** Next.js
- **Styling:** TailwindCSS, ShadCN UI
- **Authentication:** Clerk.js
- **Authorization:** Permit.io
- **Backend as a Service:** Appwrite
- **Containerization:** Docker

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/edtech-frontend.git
   cd edtech-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Usage

- **Admin:** Can send memos, manage teachers, and oversee events.
- **Teachers:** View schedules, receive notifications, and track student performance.
- **Parents:** Monitor their children's academic progress and communicate with teachers.

## Environment Variables
Create a `.env.local` file in the root of the project and add the following variables:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
NEXT_PUBLIC_PERMIT_API_KEY=your_permit_api_key
```

## Folder Structure
```
├── components/        # Reusable UI components
├── pages/             # Application routes
├── styles/            # Global styles and theme
├── public/            # Static files
├── utils/             # Utility functions
└── docker/            # Docker configurations
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---

For any queries, please contact evansagina57@gmail.com.

