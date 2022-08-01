import React from "react";
import{Container} from './style.js'
import { Link } from "react-router-dom";
import Head from '../Header/index'

function Banner(){
return(
    <>
     <Container>
      <Head/>
      <div>
        <div><h1>Ola Mundo</h1></div>
      </div>
    </Container>
    </>
)
}
export default Banner;