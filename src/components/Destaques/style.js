import styled from "styled-components";
import Img1 from '../../assets/img/sujbanner3.jpg'

export const Container = styled.header`
 height: 520px;
 width: 100%;
 background-image: url(${Img1});
 background-size: cover;

 .container-title-banner{
    width: 75%;
    height: 440px;
    padding-left: 140px;
    display: flex;
    align-items: center;
 }

 .Title-banner{
   text-align: justify;
    width: 50%;
    height: 50vh;
    padding-left: 10px;
    color: white;
 }

`
