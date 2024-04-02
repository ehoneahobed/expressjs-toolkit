# Express.js Toolkit CLI

The Express.js Toolkit CLI is a powerful command-line tool designed to accelerate the development of Express.js applications. It allows developers to quickly scaffold new projects, integrate essential backend functionalities like database connections (currently supporting Mongoose), authentication, error handling, logging, and monitoring with minimal setup.

## Features

- **Quick Project Initialization**: Scaffold a new Express.js project with a basic setup or an MVC structure.
- **Modular Component Installation**: Add essential backend functionalities like Mongoose for MongoDB connections as modular components.
- **Customizable Project Structure**: Generated code is placed directly into the project directory, allowing for easy customization to suit specific needs.

## Prerequisites

- Node.js (version 12.x or higher)
- npm (included with Node.js)

## Installation

This CLI tool is designed to be used with `npx`, so you don't need to install it globally. To use the tool, simply prefix the command with `npx` followed by the package name:

```bash
npx expressjs-toolkit <command>
```

## Usage

### Initializing a New Project

To create a new Express.js project, run:

```bash
npx expressjs-toolkit init <project-name>
```

This command creates a new directory with the given project name, sets up a basic Express.js application, and installs necessary dependencies.

### Adding Components

To add specific components to your project, use the `add` command. For example, to add Mongoose support:

```bash
npx expressjs-toolkit add mongoose
```

This will install Mongoose and create a basic database connection setup in the `utils/` directory of your project.

## Project Structure

- **Basic Project**:
  - `app.js`: Entry point for the Express.js application.

- **MVC Project (if initialized with MVC structure)**:
  - `app.js`: Application entry point.
  - `routes/`: Contains route definitions.
  - `controllers/`: Contains controller logic.
  - `models/`: Contains Mongoose models.
  - `utils/`: Utility functions and common setup, like the database connection.

## Contributing

We welcome contributions to the Express.js Toolkit CLI! Whether you're looking to add more components, improve existing functionality, or fix bugs, your help is appreciated. To contribute:

1. **Fork** the repository on GitHub.
2. **Clone** your forked repository to your local machine.
3. **Create a new branch** for your contribution.
4. **Make your changes** and test them thoroughly.
5. **Commit** your changes with clear, concise commit messages.
6. **Push** your changes to your fork.
7. **Submit a pull request** to the main repository, detailing the changes made and any other relevant information.

## About the Author

**Dr. Ehoneah Obed**

I'm a software engineer passionate about creating tools to improve backend development workflows. The Express.js Toolkit CLI is a project I developed to help streamline the setup and configuration of Express.js applications.

For inquiries or collaborations, reach out to me at:
- Email: ehoneahobed@hotmail.com
- GitHub: [@ehoneahobed](https://github.com/ehoneahobed)
- Twitter: [@ehoneahobed](https://twitter.com/ehoneahobed)


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

