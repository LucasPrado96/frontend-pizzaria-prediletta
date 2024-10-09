import { useEffect, useState } from 'react'
import {api} from '../../services/api'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, Title,  } from './styles'
import { CardProduct } from '../CardProduct'


function OfferCarroussel(){
    const [offers, setOffers] = useState([])

    useEffect(() => {
      async  function getProducts(){
            const {data} = await api.get('/products')
          
       const offersFiltred =  data.filter( dataoffer => dataoffer.offer)

       setOffers(offersFiltred)
      
           
        }
        getProducts()
    },[])


    const responsive = {
        superLargeDesktop: {
        
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }


      };

    return(
        <Container>
           <Title>Em Oferta</Title>
           <Carousel 
           responsive={responsive}
           infinite = {true}
           itemClass='class-item'
           removeArrowOnDeviceType={["tablet", "mobile"]}
           >
                {offers && offers.map(offer => 
                     <CardProduct key={offer.id} product={offer}>
                     
                    
                      
                     </CardProduct>
                
                 )}
                  
           </Carousel>
        </Container>


    )
}


export default OfferCarroussel