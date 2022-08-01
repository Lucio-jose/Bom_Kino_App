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
        <div><h3>Ola Mundo</h3></div>
      </div>
    </Container>
    </>
)
}
export default Banner;