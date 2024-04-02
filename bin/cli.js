#!/usr/bin/env node

/**
 * expressjs-toolkit
 * 
 * This file is part of the Express.js Toolkit CLI, developed by Dr. Ehoneah Obed.
 * 
 * Author: Dr. Ehoneah Obed
 * Contact: ehoneahobed@hotmail.com
 * GitHub: https://github.com/ehoneahobed
 */

const { program } = require("commander");
const initProject = require("../src/commands/init");
const addComponent = require("../src/commands/add");

program.version("1.0.0").description("An Express.js project toolkit");

program
  .command("init <project-name>")
  .description("Initialize a new project")
  .action(initProject);

program
  .command("add <component>")
  .description("Add a specific component to the project")
  .action((componentName) => {
    const projectPath = process.cwd(); // Gets the current working directory
    addComponent(componentName, projectPath); // Ensure this matches the expected function signature
  });

program.parse(process.argv);
