/**
 * expressjs-toolkit
 * 
 * This file is part of the Express.js Toolkit CLI, developed by Dr. Ehoneah Obed.
 * 
 * Author: Dr. Ehoneah Obed
 * Contact: ehoneahobed@hotmail.com
 * GitHub: https://github.com/ehoneahobed
 */

const fs = require("fs-extra");
const path = require("path");
const { execSync } = require("child_process");

const components = {
  mongoose: async (projectPath) => {
    // Define the destination path for db.js within the utils directory
    const destinationPath = path.join(projectPath, "utils");

    // Ensure the utils directory exists
    await fs.ensureDir(destinationPath);

    const templatePath = path.join(__dirname, "../../templates/mongoose/db.js");
    try {
      // Copy the db.js file specifically to the utils/ directory
      await fs.copy(templatePath, path.join(destinationPath, "db.js"));
      console.log("Mongoose component template added to utils directory.");
      
      // Navigate to the project directory and install mongoose
      process.chdir(projectPath);
      console.log("Installing Mongoose...");
      execSync("npm install mongoose", { stdio: "inherit" });
      console.log("Mongoose installed.");
    } catch (error) {
      console.error(`Error adding Mongoose component: ${error}`);
    }
  },
  // Other components can be added here
};

const addComponent = async (componentName, projectPath) => {
  const componentFunction = components[componentName];
  if (componentFunction) {
    await componentFunction(projectPath);
  } else {
    console.log(`Component ${componentName} not found.`);
  }
};

module.exports = addComponent;
