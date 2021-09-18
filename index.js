express = require('express');
const path = require('path');
const cityRouter = require("./routes/city");
const countryRouter = require("./routes/country");
const statesRouter = require("./routes/states");

// we are reading .env file here.
const dotenv = require('dotenv').config({path: path.join(__dirname, '.env')});
const cors = require('cors');
const app = express();


const logger = (req, res, next) => {
    console.log(req.json);
    next();
};
app.use(logger);

app.use(cors({
    origin: '*'
}));

const bodyParser = require("body-parser");

const port = 4000;

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));


app.use("/igloo/api/v1/city", cityRouter);
app.use("/igloo/api/v1/country", countryRouter);
app.use("/igloo/api/v1/states", statesRouter);


app.listen(port,()=>{
    console.log("listenning to the port " + port)
})

// app.get('/get/api/example', (req, res) =>{
//     res.json({'Hello API': 10});
// })

// app.post('/post/api/example', (req, res) =>{
//     const reqBody = req.body;
//     console.log(reqBody);
//     res.json({'Hello API':1});
// })


