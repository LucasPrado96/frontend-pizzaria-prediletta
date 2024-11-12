// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Container, Content, Logo, Banner, Status, StyledCircle} from "./styles";
import bghome from '../../assets/pizzaWallpaper.jpg'
import CategoryCarroussel from "../../components/CategoryCarrousel";
import OfferCarroussel from "../../components/OfferCarrousel";
import LogoMain from '../../assets/logo.png'



export function Home(){
    const [isOpen, setIsOpen] = useState(true)




    useEffect(() => {
        function getHours(){
            const currentHour = new Date().getHours()
            const open = 18
            const closet = 24

            if(currentHour > open && currentHour < closet){
                setIsOpen(true)
            } else {
                setIsOpen(false)
            }
        }
        getHours()
    },[])

    return(
        <Container>
         
            <img src={bghome}/>

            <Banner>
            <Logo src={LogoMain}/>

                     <Status $isOpen={isOpen}>
                    {isOpen ? 'ABERTO!' : 'FECHADO'}
                   <StyledCircle $isOpen={isOpen}/>
                   </Status>

            </Banner>
           

            <Content>
         <CategoryCarroussel/>
         </Content>

         <Content style={{marginTop: '4px'}}>
         <OfferCarroussel />
            </Content>
        </Container>
    )
}