const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { ZingMp3 } = require("zingmp3-api-full")
const app = express();


//setup
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
dotenv.config();
app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000
    })
)

const URL = 'http://localhost:8000'


//routes
app.get('/api/playlist/:encodeId', (req, res) => {
    try {
        ZingMp3.getDetailPlaylist(req.params.encodeId).then((data) => {
            res.status(200).json(data)
          })
    } catch (error) {
        res.status(500).json(error);
    }
})


app.get('/api/song/:encodeId', (req, res) => {   
    try{
        ZingMp3.getSong(req.params.encodeId).then((data) => {
            res.status(200).json(data)
        })
    }
    catch(error){
        res.status(500).json(error);
    }

})

app.get('/api/home/1',  (req, res) => {
    try{
        ZingMp3.getHome("1").then((data) => {
            res.status(200).json(data)
        })
        // res.status(200).json(Home1)
    }
    catch(error){
        res.status(500).json(error);
    }
})  

app.get('/api/home/2', (req, res) => {
    try{
        ZingMp3.getHome(2).then((data) => {
            res.status(200).json(data)
        })
    }
    catch(error){
        res.status(500).json(error);
    }
}
)

app.get('/api/home/3', (req, res) => {
    try{
        ZingMp3.getHome(3).then((data) => {
            res.status(200).json(data)
        })
    }
    catch(error){
        res.status(500).json(error);
    }
})

app.get('/api/chart-home', (req, res) => {
    try{
        ZingMp3.getChartHome().then((data) => {
            res.status(200).json(data)
        })
    }
    catch(error){
        res.status(500).json(error);
    }
})

// app.get('*', (req, res) => {
//     res.send('nhap sai link roi ban oi !!')
// })
//run server
app.listen(8000, () => {
console.log('Server is running on port 8000');
})