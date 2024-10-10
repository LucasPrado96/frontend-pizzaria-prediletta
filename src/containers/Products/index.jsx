import { Container, OptionsProducts, ContainerProducts, Categories} from './styles'
import BgProducts from '../../assets/wallpaper2.jpg'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'


export function Products() {

    const [optionCategory, setOptionCategory] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getCategory() {
            const { data } = await api.get('/categories')
            console.log(data)
            setOptionCategory(data)
        }

        async function getProducts(){
            const {data} = await api.get('/products')
           
            setProducts(data)
        }

        getCategory()
        getProducts()
    }, [])





    return (


        <Container>
            <img src={BgProducts} />

            <Categories>
                {optionCategory && optionCategory.map(option =>
                    <OptionsProducts key={option.id}>{option.name}</OptionsProducts>
                )}

            </Categories>

            <ContainerProducts>
               
            </ContainerProducts>

        </Container>
    )

}