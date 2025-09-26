const projectData = require("projectData");
const sectorData = require("sectorData");

let projects = [];

function initialize() {
    return new Promise((resolve, reject) => {
        try {
            // Clear the projects array first
            projects = [];
            
            // Process each project and add sector information
            projectData.forEach(project => {
                // Find the matching sector for this project
                const matchingSector = sectorData.find(sector => sector.id === project.sector_id);
                
                if (matchingSector) {
                    // Create a new project object with the sector name added
                    const enhancedProject = {
                        ...project,
                        sector: matchingSector.sector_name
                    };
                    projects.push(enhancedProject);
                } else {
                    // If no matching sector found, add project without sector
                    projects.push({
                        ...project,
                        sector: "Unknown"
                    });
                }
            });
            
            resolve();
        } catch (error) {
            reject("Failed to initialize projects data: " + error.message);
        }
    });
}

function getAllProjects() {
    return new Promise((resolve, reject) => {
        try {
            if (projects.length === 0) {
                reject("No projects available. Please initialize first.");
            } else {
                resolve(projects);
            }
        } catch (error) {
            reject("Error retrieving all projects: " + error.message);
        }
    });
}

function getProjectById(projectId) {
    return new Promise((resolve, reject) => {
        try {
            const foundProject = projects.find(project => project.id === parseInt(projectId));
            
            if (foundProject) {
                resolve(foundProject);
            } else {
                reject("Unable to find requested project with ID: " + projectId);
            }
        } catch (error) {
            reject("Error finding project by ID: " + error.message);
        }
    });
}

function getProjectsBySector(sector) {
    return new Promise((resolve, reject) => {
        try {
            const sectorLowerCase = sector.toLowerCase();
            const matchingProjects = projects.filter(project => 
                project.sector.toLowerCase().includes(sectorLowerCase)
            );
            
            if (matchingProjects.length > 0) {
                resolve(matchingProjects);
            } else {
                reject("Unable to find requested projects for sector: " + sector);
            }
        } catch (error) {
            reject("Error finding projects by sector: " + error.message);
        }
    });
}

module.exports = { initialize, getAllProjects, getProjectById, getProjectsBySector };

