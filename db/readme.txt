1.Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.

2.Run the schema.sql and seeds.sql files into the mysql server from the command line
3.Now you're going to run these SQL files.

a.Make sure you're in the db folder of your app.
b.Start MySQL command line tool and login: mysql -u root -p.
c.With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.
d.Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.
e.Close out of the MySQL command line tool: exit.