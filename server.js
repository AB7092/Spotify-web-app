const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const spotifyApi = require('spotify-web-api-node'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/refresh',(req,res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/callback',
        clientId: '1a3137d54dc145f991803efb4a5c4bed',
        clientSecret: '4beeaa28f8594b35bb595f18e07edc17',
        refreshToken
    })
    
    spotifyApi
    .refreshAccessToken()
    .then(data => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
        })
    })
    .catch(() => {
        res.sendStatus(400)
    })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/callback',
        clientId: '1a3137d54dc145f991803efb4a5c4bed',
        clientSecret: '4beeaa28f8594b35bb595f18e07edc17'
    })

    spotifyApi.authorizationCodeGrant(code).then(data =>{
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch((err) => {
        res.sendStatus(400)
    })
})

app.listen(3001)