import { useEffect, useState } from 'react'
import {api} from '../../services/api'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container,  ContainerItens, } from './styles'
import { useNavigate } from 'react-router-dom'


function CategoryCarroussel(){

    const [categories, setCategories] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
      async  function getCategories(){
            const {data} = await api.get('/categories')
            setCategories(data)
           
        }
        getCategories()
    },[])


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
           
           <Carousel 
           responsive={responsive}
           infinite = {true}
           itemClass='class-item'
           removeArrowOnDeviceType={["tablet", "mobile"]}
           >
                {categories && categories.map(category => 
                     <ContainerItens onClick={() => {navigate({
                      pathname: '/products',
                      search: `?categoria=${category.id}`
                     })}}
                      key={category.id} image={category.url}>
                      
                        <p>{category.name}</p>

                     </ContainerItens>
                 )}
           </Carousel>
        </Container>


    )
}


export default CategoryCarroussel