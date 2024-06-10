
const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT||3000;

app.use(bodyParser.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
