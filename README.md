
# Expense Tracker

A full-stack Expense Tracker application that helps users to record, categorize, and visualize their income and expenses. Built with React, Redux, Node.js, Express, and MongoDB.

## Features

- **Add Income & Expenses**: Record financial transactions and categorize them.
- **Data Visualization**: View your spending and income trends over time using charts.
- **Categorization**: Assign categories like Food, Entertainment, Transportation, etc., to each transaction.
- **Filter by Type**: View only income, only expenses, or both.
- **Persistent Data**: Data stored in MongoDB, allowing you to access it from anywhere.

## Tech Stack

- **Frontend**: React, Redux, Chart.js, Tailwind CSS
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB (using MongoDB Atlas for cloud storage)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (use MongoDB Atlas for cloud-based MongoDB)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/apervashov/expense_tracker.git
   cd expense_tracker
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   # Backend
   cd Backend
   npm install

   # Frontend
   cd ../Frontend
   npm install
   ```

3. Create a `.env` file in the `Backend` directory and add the following variables:

   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

### Running the Application

1. Start the backend server:

   ```bash
   cd Backend
   npm run dev
   ```

2. In a separate terminal, start the frontend:

   ```bash
   cd Frontend
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## API Endpoints

| Method | Endpoint               | Description                     |
| ------ | ----------------------- | ------------------------------- |
| GET    | `/api/transactions`     | Fetch all transactions          |
| POST   | `/api/transactions`     | Create a new transaction        |
| DELETE | `/api/transactions/:id` | Delete a transaction by ID      |
| PUT    | `/api/transactions/:id` | Update a transaction by ID      |

## Project Structure

```
ExpenseTracker/
├── Backend/                  # Express server
│   ├── models/               # Mongoose models
│   ├── routes/               # API routes
│   ├── config/               # Database and environment configuration
│   └── server.js             # Main server file
│
├── Frontend/                 # React application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Main application pages
│   │   ├── redux/            # Redux slices and store configuration
│   │   └── App.js            # Root component
│   └── public/               # Public assets
│
└── README.md                 # Project documentation
```

## License

This project is licensed under the MIT License.
