import styled from "styled-components";


export const Header = styled.header`
 height: 70px;
 width: 100%;
 background-color: rgba(0, 0, 0, 0.548);
 justify-content: space-around;
 display: flex;
 justify-content: start;


 .nav{
    width: 40%;
    display: flex;
    margin-left: 100px;

    ul{
        display: flex;
        list-style: none;

        a{
            text-decoration: none;
            margin: 10px;
            color: rgb(255, 72, 0);
            font-size: 15px;
        }
        a:hover{
            color: rgb(255, 145, 0);
        }
    }
 }
/** 
 .link-redes{
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;

    div{
        display: flex;
        width: 60%;
        height: 10vh;
        justify-content: space-between;
        align-items: center;
    }
    section{
        width: 38%;
        height: 10vh;
        background-color: blueviolet;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: space-between;

        button{
            width: 45%;
            background-color: azure;
        }
    }
 }*/
`
