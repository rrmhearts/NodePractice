const express = require('express');
const app = express();

/*
	npm start             : start every time
	npx pm2 show server   : show info on app
*/
const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.set('view engine', 'pug');
