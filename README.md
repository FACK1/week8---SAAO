# week8---SAAO
Week 8 - Express app. 

### What our app is:

Our app's idea revolves around displaying images with descriptions while enabling the user to add images with descriptions of their own.

### On Heroku: [MyPics](http://profileimge.herokuapp.com/)

### Endpoints:

```
1- 1st end-point / => Home page.
GET request. => respond with html that already has the data attached to it before being sent to the client, then let it call the css once it renders in the browser.

Display images with descriptions/have a form to add your own image.

2- 2nd end-point /add => add images with des.
POST request.
send image to the server.
Server then queries the database.
add an image to db and return a response.
Then redirect to home page with the new posted image. aka ( respond with html that already has the data attached to it before being sent to the client, then let it call the css once it renders in the browser.)

```

### Design

#### Homepage: 

Header: which will have the title of our app, and a form to submit pics of your own.
Section: Where you can browse existing pictures.
Footer: (optional) maybe a copyrights. 


### How to run our site on your machine. 


1- Clone this repo.

#### NOTE: you need to have psql and pgcli installed on your machine. (Keep in mind that pgcli is actually optional, but we're going to use it here for its simple commands and nice layout of data).

##### It should be noted that you need to run pgcli in your terminal before proceeding. To do this: type in `pgcli` in your terminal, and hit enter.

2- Go the root directory ("week8--SAAO" in this case), make a file "config.env".
3

3-Now run the command `CREATE DATABASE` image; on your terminal, after you cd into the repo you just cloned. This command will create a database. Notice how there should be a semi-colon after every command.

4- Then, run the command `CREATE USER imager with password '0000'`;. This will create a user called imager, with a password of 0000.

5- Then, run `GRANT ALL PRIVILEGES ON DATABASE image to imager`;. This command will grant our imager with all priviliges and rights to use and access the database.

6- Go the root directory ("week8--SAAO" in this case), make a file "config.env".

5- Copy paste this into the file: `DB_URL = postgres://imager:0000@localhost:5432/image`. This is to establish connection between our server and database. And it is used throughout the code of the app.

7- Now, we need to install two modules that our app relies on to funciton. Those are pg and env2. Run the command `npm i pg env2` to install them in one go.

8- Now we have a file called "db_build.js" in the repo. Which is basically what builds our database. So, run this command `node <path to the file/>` which in our case it's `node src/database/db_build.js`. It should show a message of "success" on your terminal.

9- Go to your browser, and in the URL field, write: localhost:8000 and hit enter.

10- Now you should have our app running!

If you are having trouble with running the app let us know by making an issue! And if you think we missed anything also let us know!
