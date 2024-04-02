/**
 * expressjs-toolkit
 * 
 * This file is part of the Express.js Toolkit CLI, developed by Dr. Ehoneah Obed.
 * 
 * Author: Dr. Ehoneah Obed
 * Contact: ehoneahobed@hotmail.com
 * GitHub: https://github.com/ehoneahobed
 */


const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const initProject = async (projectName) => {
  const projectPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, '../../templates/basic');

  try {
    await fs.copy(templatePath, projectPath);
    console.log(`Project initialized successfully in ${projectPath}`);

    // Navigate to the project directory and run npm install
    process.chdir(projectPath);
    console.log('Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
    console.log('Dependencies installed.');

  } catch (error) {
    console.error(`Error initializing project: ${error}`);
  }
};

module.exports = initProject;
