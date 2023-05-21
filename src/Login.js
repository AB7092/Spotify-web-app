import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=1a3137d54dc145f991803efb4a5c4bed&response_type=code&redirect_uri=http://localhost:3000/callback/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
        <a className="btn btn-sucess btn-lg" href={AUTH_URL} style={{border: "1px solid black"}}>Login With Spotify</a>
    </Container>
}