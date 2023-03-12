const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: [
    'veryimportantsecret',
    'notsoimportantsecret',
    'highlyprobablysecret',
  ],
  cookie: {
    httpOnly: true,
    secure: true,
    maxAge: 600000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening at https://localhost:${PORT}`)
  );
});
