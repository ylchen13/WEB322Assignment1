/********************************************************************************
* WEB322 – Assignment 01
*
* I declare that this assignment is my own work in accordance with Seneca's
* Academic Integrity Policy:
*
* https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
*
* Name: Yi Liang Chen Student ID: 108551250 Date: Oct 3, 2025
*
********************************************************************************/

const express = require('express');
const projectData = require("./modules/projects");

const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// Middleware to parse JSON requests
app.use(express.json());

// Route: GET "/"
app.get('/', (req, res) => {
    res.send('Assignment 1: Yi Liang Chen - 108551250');
});

// Route: GET "/solutions/projects"
app.get('/solutions/projects', (req, res) => {
    projectData.getAllProjects()
        .then(projects => {
            res.json(projects);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// Route: GET "/solutions/projects/id-demo"
app.get('/solutions/projects/id-demo', (req, res) => {
    // Using project ID 9 as demonstration
    projectData.getProjectById(9)
        .then(project => {
            res.json(project);
        })
        .catch(error => {
            res.status(404).send(error);
        });
});

// Route: GET "/solutions/projects/sector-demo"
app.get('/solutions/projects/sector-demo', (req, res) => {
    // Using "agriculture" as demonstration for "Food, Agriculture, and Land Use"
    projectData.getProjectsBySector("agriculture")
        .then(projects => {
            res.json(projects);
        })
        .catch(error => {
            res.status(404).send(error);
        });
});

// Initialize the projects data and start the server
projectData.initialize()
    .then(() => {
        app.listen(HTTP_PORT, '0.0.0.0', () => {
            console.log(`Server listening on: http://localhost:${HTTP_PORT}`);
        });
    })
    .catch(error => {
        console.error("Failed to initialize project data:", error);
        process.exit(1);
    });

