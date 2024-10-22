import { Container, OptionsProducts, ContainerProducts, Categories, Buttom} from './styles'
import BgProducts from '../../assets/wallpaper2.jpg'
import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { formatedPrice } from '../../utils/formatPrice'
import VectorCart from '../../assets/Vector.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/CartContext'



export function Products() {

    const {putItemToCart} = useCart()
    const [optionCategory, setOptionCategory] = useState([])
    const [products, setProducts] = useState([])
    const [filteredproducts, setFilteredproducts] = useState([])
    // const [activeCategory, setActiveCategory] = useState(8)

    const navigate = useNavigate()
    const {search} = useLocation()

  const queryParamsId = new URLSearchParams(search)

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParamsId.get('categoria')

    if(categoryId){
        return categoryId
    } 
    return 8
   
  })

    useEffect(() => {
        async function getCategory() {
            const { data } = await api.get('/categories')
        
            setOptionCategory(data)
        }

        async function getProducts(){
            const {data} = await api.get('/products')
           
            setProducts(data)
        }

        getCategory()
        getProducts()
    }, [])


    useEffect(() =>{
        
        if(activeCategory){
            const filtered = products.filter((product ) => product.category_id  === activeCategory)
            setFilteredproducts(filtered)
        }
        
        
        
    },[activeCategory, products])



    return (


        <Container>
            <img src={BgProducts} />

            <Categories>
                {optionCategory && optionCategory.map(option =>
                    <OptionsProducts  $isActiveCategory={activeCategory === option.id} key={option.id} onClick={()=> {
                        navigate(
                            {
                            pathname: '/products',
                            search: `?categoria=${option.id}`,
                            },
                            {
                                replace: true,
                            },
                         )
                         setActiveCategory(option.id)
                    }}>
                        {option.name}
                    </OptionsProducts>
                )}

            </Categories>

            <ContainerProducts>
               {filteredproducts && filteredproducts.map( product => 
                <div key={product.id} className='allElements'>
                    <img src={product.url}/>

                    <div className='textsDoContainer'>
                        <h2>{product.name}</h2>
                        <strong>{formatedPrice(product.price)}</strong>
                        <p>{product.description}</p>
                        
                        <div>
                        <Buttom onClick={() => putItemToCart(product)}>
                            <img src={VectorCart}/>
                        </Buttom>
                        </div>
                    </div>
                    
                </div>
               )}
            </ContainerProducts>

        </Container>
    )

}