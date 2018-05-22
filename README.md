# Burger Eater Express/MySQL/Handlebars App

Burger Eater is a simple Express, MySQL and Handlebars app that utilizes MVC architecture to take in new database information (adding a burger to a menu list) and update values in the database when various button click events occur. The DOM is dynamically updated as we update our database values. The front-end webpage uses the Bootstrap framework for the final visuals.

## Getting Started

1. Clone the GitHub project repo to your computer 
2. Navigate to the project's root directory in the bash terminal and enter 'npm install' to download all the necessary node modules listed in the package.json
3. Burger Eater utilizes a MySQL local database. You will need to create a '.env' file in the root directory of the project that contains your respective identifier information in this format:
    1. DB_PW=[put-local-mysql-password-here]

## Running the app

The app is run by running 'node server.js' in the terminal within the root directory of the project. The application will then be listening on localhost:8080. Once on the page a user can:
1. Add a burger to the available burger list by typing in a new burger name and click the submit button.
2. A burger on the available list can be devoured by clicking the 'Devour' button next to the burger name.
3. More stock and be added to a burger that has already been devoured by pressing the respective '+' button next to a devoured burger name.

All button click events will dynamically add or update values in the MySQL database and update the DOM accordingly. 

Here is a [live demo](https://desolate-hollows-50197.herokuapp.com/)

## Authors

* **Majid Jamaleldine** - [Taxlife](https://github.com/taxlife)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
