Week 12 SQL:  (shamelessly ripped off from Sequelize themselves - https://github.com/sequelize/express-example)


part 2: Cloning the app you will rebuild

git clone  the sequelize app - 
  - this contains all the necessary working files minus what you'll make in cl
  - it also contains incomplete versions of the files you'll have to modify


part 3: Your tasks
  The objective of part 3 is to recreate the original sequelize express-example project.  Starting from the hollow version on our github, these are the steps necessary to progress to the orignal final app.
  If you're into that, check out the original app first and refer to it along the way to make sure you're doing right.

  - 'npm start' will start the server
  - look through the app: models, migrations, config (that they don't exist), routes, routes/index.js (there is something commented out that will need to be commented back in ) ...
  - follow the command line commands to install Sequelize and friends
    -   npm install --save sequelize sequelize-cli sqlite3
  - intialize sequelize
    - 'node_modules/.bin/sequelize init'
    - this command is executed at top level but reaches down to sequelize to init
      - if run in sequelize folder, the initialized sequelize is not available at the top level
  - use the sequelize command line interface to create the appropriate tables
    - see appendix for visualization of end goal
    - node_modules/.bin/sequelize model:create --name User --attributes username:string
    - node_modules/.bin/sequelize model:create --name Task --attributes title:string
  - make a sketch of the tables necessary for this project
  - lookup 'associate', 'belongsTo' and 'hasMany'.  fix the task and user models accordingly
 



appendix: (ID's are created automatically.  userID is created automatically when 'belongsTo' and such are used)

 USER: 
  | ID | name |
  |----|------|
  |    |      |

 TASK:
  | ID | title | userID |
  |----|-------|--------|
  |    |       |        |

 

 Bonerus challenge:

  add a 'friend' table and allow users to have friends
  maybe users and friends can have appointments?
  and maybe every new friend is automatically a user
  and every appointment is automatically double-associated?



