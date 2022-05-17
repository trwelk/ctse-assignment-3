const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://ifsapp:ifsapp@cluster0.cc6tj.mongodb.net/abc-product?retryWrites=true&w=majority', { useFindAndModify: false });
mongoose.set('debug', true);
mongoose.set('runValidators', true); // here is your global setting

const locationRoutes = require('./routes/LocationRoutes')

const app = new Koa();
app.use(bodyParser());
app.use(cors());

app.use(locationRoutes.routes())
.use(locationRoutes.allowedMethods());

app.listen(9090);

console.log('Application is running on port 9090');