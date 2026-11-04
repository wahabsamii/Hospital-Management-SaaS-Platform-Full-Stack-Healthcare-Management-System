# 🏥 Prescripto – Full Stack Doctor Appointment Booking System

Prescripto is a full-stack doctor appointment booking platform designed to make healthcare services more accessible and convenient. Patients can explore doctors, view their profiles, and book appointments online. Doctors and administrators can manage appointments and oversee platform activities through dedicated dashboards.

## 🚀 Features

### 👤 User / Patient

- User registration and secure login.
- Browse and explore available doctors.
- View doctor profiles and specializations.
- Book doctor appointments.
- Manage and view appointments.
- Cancel appointments.
- Secure authentication.

### 👨‍⚕️ Doctor Dashboard

- Doctor authentication.
- Manage doctor profile information.
- View scheduled appointments.
- Manage appointment availability.
- Track appointment status.

### 🔐 Admin Dashboard

- Secure admin login.
- Add and manage doctors.
- View registered doctors.
- Manage appointments.
- Monitor platform activities.

## 🛠️ Tech Stack

**Frontend**

- React.js
- JavaScript
- Tailwind CSS / CSS
- Axios
- React Router DOM

**Backend**

- Node.js
- Express.js
- RESTful APIs
- JWT Authentication
- bcrypt.js

**Database**

- MongoDB
- Mongoose

**Other Tools**

- Git & GitHub
- Cloudinary (image management, if configured)
- Postman (API testing)

## 📁 Project Structure

```text
Prescripto/
│
├── admin/              # Admin dashboard
│
├── frontend/           # Patient-facing application
│
├── backend/            # Express backend and APIs
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

```bash
cd Prescripto
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add other environment variables required by your configuration, such as Cloudinary credentials.

### 3. Start the Backend

```bash
npm run server
```

### 4. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm run dev
```

### 5. Install Admin Dependencies

Open another terminal:

```bash
cd admin
npm install
```

Start the admin dashboard:

```bash
npm run dev
```

## 🔑 Environment Variables

Configure the required environment variables before running the application.

| Variable              | Description                     |
| --------------------- | ------------------------------- |
| PORT                  | Backend server port             |
| MONGODB_URI           | MongoDB connection string       |
| JWT_SECRET            | JWT authentication secret       |
| CLOUDINARY_NAME       | Cloudinary cloud name (if used) |
| CLOUDINARY_API_KEY    | Cloudinary API key (if used)    |
| CLOUDINARY_SECRET_KEY | Cloudinary API secret (if used) |

Never upload your `.env` file or expose private credentials on GitHub.

## 🌐 Application Modules

| Module         | Description                                 |
| -------------- | ------------------------------------------- |
| Patient Portal | Registration, login and appointment booking |
| Doctor Portal  | Appointment and profile management          |
| Admin Portal   | Doctor and appointment administration       |
| Backend API    | Business logic and authentication           |
| Database       | Persistent application data                 |

## 🔒 Security

- JWT-based authentication.
- Password hashing using bcrypt.
- Protected API routes.
- Role-based access control.
- Environment-based configuration.

## 📸 Screenshots

Add your project screenshots here:

```text
screenshots/
├── home.png
├── doctors.png
├── appointment.png
├── admin-dashboard.png
└── doctor-dashboard.png
```

## 🚀 Future Improvements

- Online payment integration.
- Email and appointment notifications.
- Doctor availability calendar.
- Patient appointment history.
- Online consultation support.

## 👨‍💻 Author

**Abdul Wahab**

Full Stack Developer

## 📄 License

This project is developed for educational and portfolio purposes.
