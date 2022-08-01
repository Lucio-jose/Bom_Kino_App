import React from "react";
import{Container} from './style.js'
import { Link } from "react-router-dom";
import Head from '../Header/index'

function Banner(){
return(
    <>
     <Container>
      <Head/>
      <div className="container-title-banner">
      <div className="Title-banner">
        <div>
          <h1>Bem vindo ao site Bom-Kino</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veniam, totam necessitatibus commodi omnis cupiditate, obcaecati delectus error soluta nisi quidem neque! Ea autem amet, expedita sapiente magnam similique veritatis.</p>
        </div>
      </div>
      </div>
    </Container>
    </>
)
}
export default Banner;