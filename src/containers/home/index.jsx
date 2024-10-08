// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Content } from "./styles";
import bghome from '../../assets/pizzaWallpaper.jpg'
import CategoryCarroussel from "../../components/CategoryCarrousel";
import OfferCarroussel from "../../components/OfferCarrousel";



export function Home(){


    return(
        <Container>
            <img src={bghome}/>

            <Content>
         <CategoryCarroussel/>
         </Content>

         <Content style={{marginTop: '4px'}}>
         <OfferCarroussel />
            </Content>
        </Container>
    )
}