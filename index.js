const app = require('express')();
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);

app.listen(process.env.PORT || 5000);
