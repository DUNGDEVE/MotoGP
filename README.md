MOTOGP CLONE WEBSITE USING NODE JS

# Project Setup Guide

## Step 1: Install Node.js and Verify Installation

1. Download and install Node.js from the official website: [Node.js](https://nodejs.org/).
2. To verify that Node.js and npm are installed, open a terminal (or GitBash) and run the following commands:

```bash
node -v
npm -v
```

Both commands should return a version number, indicating Node.js and npm are successfully installed.

## Step 2: Install Git and GitBash

1. Download and install Git from the official website: [Git](https://git-scm.com/).
2. Install GitBash if you're on Windows for a better command-line experience: [GitBash](https://gitforwindows.org/).

## Step 3: Install MySQL Server and MySQL Workbench

1. Download and install MySQL Server from [MySQL Community Downloads](https://dev.mysql.com/downloads/mysql/).
2. Install MySQL Workbench for easier database management: [MySQL Workbench](https://dev.mysql.com/downloads/workbench/).

## Step 4: Configure the Database

1. Open MySQL Workbench and click on the icon **"Open a SQL Script file in a new query tab"**.
2. Navigate to the `db.sql` file located in the project directory at `src/databasefile/db.sql`.
3. Run the following commands in the query tab to set up the database:

```sql
CREATE DATABASE motogp;
USE motogp;
```

4. Run the remaining SQL commands from the `db.sql` file to complete the database setup.

## Step 5: Configure the Project

1. Install the **Live Server** extension in Visual Studio Code (VS Code).
2. Open the project folder in VS Code.
3. Set up the environment variables in the `.env` file. Configure the following variables:

   - `PORT`
   - `HOST_NAME`
   - `DB_HOST`
   - `DB_USER`
   - `DB_PWD`
   - `DB_PORT`

   The `DB_NAME` should be set to `motogp` by default.

4. Open the terminal in VS Code (or use GitBash).
5. Run the following commands to install the project dependencies and start the development server:

```bash
npm i
npm run dev
```

6. Finally, open the `index.html` file in VS Code and click **"Go Live"** in the bottom-right corner to start the local server.
