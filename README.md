# ResQ-AI : An AI powered flood prediction & disaster response system.

## Description :
- This project is a web application that predicts flood risk based on weather and river data. It uses machine learning to provide alerts and insights.
- 
## Features
- Real-time flood risk prediction
- SMS alerts for high-risk areas
- Interactive map visualization
- Machine learning-based scoring system

## Installation and Setup :
### Clone the repository:
   ```
   git clone https://github.com/Dattatray98/ResQ_AI.git
   ```
   
### FrontEnd Setup
 1. Go to client folder
```
cd Client
```

 2. Install dependencies: 
```
npm install
```
 2. Start Frontend:
```
npm run dev
```

### BackEnd Setup:
 1. Go to the backend folder:
```
cd Server
```
 2. install dependencies:
```
npm install
```
- start Backend:
```
npm run dev
```

## Usage:
 1. Open the web site in the browser with the given link:
    ```
    link
    ```
 2. Click on Get Started and Singup.
 4. On the ResQ-AI Dashboard you will see the current weather details.
 3. To test the website --> Click on the "Test With Mock Data" Button.
 4. The alert pop-up will shown on the Dashboard.
 5. Click on "View Safety Instructions" button.
 6. The Safety instructions pop-up will shown on dashboard with the nearby safe locations.
 7. Click on any locations shown in the window to go to safe location.
 8. It will show the route on map and follow the route to reach the location with follwing the given safety instructions.

## Tech Stack Used:
### FrontEnd:
- React.js
- Tailwind CSS
- TypeScript
- axios

### BackEnd:
- Node.js
- Express.js
- TypeScript
- axios

### Machine Learning:
- scikit-learn==1.7.2
- pandas==2.3.2
- numpy==2.3.4
- fastapi
- uvicorn
- pydantic

>>>>>>> e0dd327bb152f21b47b63dcfcdf4e1710dbc6b7e
