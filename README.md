# WEB322 Assignment 1 - Climate Solutions Web App

## Student Information
- **Name:** Yi Liang Chen
- **Student ID:** 108551250
- **Date:** Oct 3, 2025

## Project Description
This is a Node.js/Express web application that serves climate solution data from Project Drawdown. The application provides RESTful API endpoints to access information about various climate solutions and their sectors.

## Features
- RESTful API endpoints for climate solutions data
- Promise-based data processing
- Sector-based project filtering
- JSON data responses
- Express.js web server

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Starting the Server
```bash
npm start
```
or
```bash
node server.js
```

The server will start on the port specified by the `PORT` environment variable, or default to port 8080.

### API Endpoints

#### GET /
Returns a welcome message with student information.

#### GET /solutions/projects
Returns all climate solution projects with their sector information.

#### GET /solutions/projects/id-demo
Demonstrates the getProjectById functionality by returning a specific project (ID: 9).

#### GET /solutions/projects/sector-demo
Demonstrates the getProjectsBySector functionality by returning all projects in the agriculture sector.

## Project Structure
```
WEB322Assignment1/
├── data/
│   ├── projectData.json    # Climate solution project data
│   └── sectorData.json     # Sector classification data
├── modules/
│   └── projects.js         # Data processing module
├── server.js               # Main Express server
├── package.json            # Node.js dependencies
└── README.md              # This file
```

## Dependencies
- Express.js - Web application framework for Node.js

## Academic Integrity
This assignment is completed in accordance with Seneca's Academic Integrity Policy.

## Data Source
The climate solution data is based on information from Project Drawdown (https://drawdown.org), which identifies and analyzes climate solutions.

