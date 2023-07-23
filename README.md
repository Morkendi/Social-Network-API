# Social Network API <!-- omit in toc -->

<div align="center">
<img src="https://img.shields.io/badge/License-MIT-blue"></img>
<img src="https://img.shields.io/github/repo-size/Morkendi/Social-Network-API?color=green&label=Repo%20Size"></img>
</div>

<div align="center"> <h2>Dependencies </h2> </div>

<div align="center"> 
    <img src="https://img.shields.io/badge/-moment.js-red"><img>
    <img src="https://img.shields.io/badge/-dotenv-orange"><img>
    <img src="https://img.shields.io/badge/-Express.js-blue"><img>
    <img src="https://img.shields.io/badge/-Mongoose-brightgreen"><img>
</div>

## Table of contents <!-- omit in toc -->

- [Description](#description)
- [Usage](#usage)
- [Mock Up](#mock-up)
- [Credits](#credits)
- [License](#license)
- [Links](#links)

## Description
This project creates an API for a social network based on sharing thoughts. The project uses the popular and powerful NoSQL database [mongoDB](https://www.mongodb.com/) to manage large amounts of unstructured data, along with Express.js for backend routing & Mongoose ODM to connect both.

### Features <!-- omit in toc -->
- Use CRUD operations to manage users, friends, thoughts, and reactions.
- Moment.js for easier date formatting.
- **Friends & Reactions:** Users can add friends to their profile and add reactions to other people's thoughts.

## Usage
1. Install the NPM packages used in this project. To do that, type the following command in your terminal:
    ```
    npm i
    ```
2. Once you install all necessary packages, run the following command to initialize the server and start using the app:
    ```
    npm start
    ```
## Mock Up
The following images demonstrate the functionality of the application.
<div align="center">
    <img src="./assets/GET%20all.png" alt="GET all users"></img>
        <h2>GET all</h2>
    <img src="./assets/GET%20single.png" alt="GET single user"></img>
        <h2>GET single</h2>
    <img src="./assets/POST%20new.png" alt="POST new user"></img>
        <h2>CREATE new user</h2>
    <img src="./assets/DELETE%20user.png" alt="PUT user with ID"></img>
        <h2>DELETE user</h2>
</div>

## Credits
- Code by: [Daniel Sanchez](https://github.com/Morkendi)

## License

This project utilizes an MIT License. [Read more](https://choosealicense.com/licenses/mit/)

## Links
- Link to [GitHub repo](https://github.com/Morkendi/Social-Network-API)
- Link to [Video Demo]()
