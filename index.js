const app = require('express')();
require('./services/passport');
require('./routes/authRoutes')(app);

app.listen(process.env.PORT || 5000);
