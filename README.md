# Weekly Calendar with Session Display

Welcome to our Weekly Calendar React application! This application is designed to help you manage your weekly sessions and easily filter through them to find the ones you need.

## Features

- **Weekly Calendar**: View your weekly schedule at a glance.

- **Session List**: Get a detailed list of your sessions, including activity, date, duration, location, and coach details.

- **Filtering**: Quickly filter sessions based on your preferences or search criteria.

## Getting Started

Follow these simple steps to get started with our application:

1. **Clone the Repository**: Clone this repository to your local machine.

   ```shell
   git clone 
2. **Add .env file in app root directory**: Open app root folder and create new file called .env. Then you need to add and fill environment variables:

   ```shell
   VITE_TOKEN='please add valid token'
   VITE_COMPANY_ID='please add valid number'
   VITE_API_URI='* please add valid api */api/v1/'
2. **Install Dependencies and Run the Application:**: Navigate to the project directory, install the required dependencies, and start the development server to run the application locally.

   ```shell
   cd weekly-calendar-app
   npm install
   npm start
3. **Access the Application:**: Open your web browser and access the application at 

   ```shell
   http://localhost:5173/calendar

## Usage

- **Weekly Calendar**: The weekly calendar provides an overview of your sessions for the entire week. Click on individual days to see more details.

- **Session List**: The session list displays all your sessions. Use the filter bar to search for specific sessions or filter them based on your preferences.

- **Filtering**: To filter sessions, type your filter criteria in the input box, and the list will update in real-time to display matching sessions.

## License

This project is licensed under the MIT License.