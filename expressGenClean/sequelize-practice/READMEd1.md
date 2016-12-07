Week 12 SQL:  (shamelessly ripped off from Sequelize themselves - https://github.com/sequelize/express-example)

This is to learn about express-generator and orm's, but mostly a little practice in making a simple working app VERY quickly

part 1:  Create a 'Hello World' with express-generator

	- npm init
	- sudo npm install -g express-generator  
	- express -f
	- npm install
	- node ./bin/www


pre-part 1.5: Command Line Interfaces
	You will be using Sequelize's CLI for the following exercise. The Sequelize command to create your animal table is executed by Sequelize, not node or express or npm. 
	

part 1.5:  connect an sqlite3 db

	- follow the command line commands to install Sequelize, Sequelize-cli, sqlite3
		- npm install --save sequelize sequelize-cli sqlite3
	- intialize sequelize
	  - 'node_modules/.bin/sequelize init'
	  - (why can't this be done after cd'ing into n-m/.bin/sequelize?)
	- use the sequelize command line interface to create the appropriate tables
	  - node_modules/.bin/sequelize model:create --name dogsAndCatsILiveWith --attributes 'name:string, breed:string, bio:text' 

  	Challenge:  
  		By reusing and modifying the original Sequelize app, make this a fully functional animal-tracking app.



