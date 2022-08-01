import React from "react";
import{Header} from './style.js'
import { Link } from "react-router-dom";
import Img1 from '../../assets/img/message.svg'

function Head(){
return(
    <>
     <Header>
      <div className="nav">
        <ul>
          <Link to="#"><li>HOME</li></Link>
          <Link to="#"><li>DESTAQUES</li></Link>
          <Link to="#"><li>SERVIÇOS</li></Link>
          <Link to="#"><li>PRODUCTS</li></Link>
          <Link to="#"><li>CONTACT</li></Link>
        </ul>
      </div>
{
   /*   <div className="link-redes">
        <div>
          <span><img src={Img1} alt="" />Facebook</span>
          <span><img src={Img1} alt="" />Facebook</span>
          <span><img src={Img1} alt="" />Facebook</span>
        </div>
        <section>
          <button id="btnlogin">Login</button>
          <button id="btncadaster">Cadastrar-se</button>
        </section>
      </div>*/}
    </Header>
    </>
)
}
export default Head;