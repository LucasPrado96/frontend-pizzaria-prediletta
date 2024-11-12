import { Container, Label, Form, InputText, InputOffer, SelectStyled, LabelUpLoad, Erros } from './styles'
import { Button } from '../../../components/Button'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../../services/api'
import { toast } from 'react-toastify'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

import { useEffect } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import paths from '../../../constants'



export function EditProducts() {
    const navigate = useNavigate()
    const location = useLocation()
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const productData = location.state.product
   
    console.log(productData)

    const schema = yup.object().shape({
        name: yup.string().required('Insira um nome para o produto'),
        price: yup.string().required('Insira um preço para o produto'),

        description: yup.string().required('Coloque uma descrição para o produto'),
        category: yup.object().required('Coloque seu produto em uma categoria'),
        offer: yup.bool(),
    })

    const { register, handleSubmit, control, formState: { errors }, } = useForm({
        resolver: yupResolver(schema)
    })
    
    const onSubmit = async data => {
        const productFormData = new FormData() 

        productFormData.append('name', data.name)
        productFormData.append('price', data.price)
        productFormData.append('file', data.file[0])
        productFormData.append('description', data.description)
        productFormData.append('category_id', data.category.id)
        productFormData.append('offer', data.offer)

       await toast.promise( api.put(`/products/${productData.id}`, productFormData), {
        pending: 'Editando Produto...',
        success: 'Produto Editado!',
        error:'Falha ao Editar Produto',
       })

       setTimeout(() => {
        navigate(paths.Products)
       }, 2000)
        
    }


    useEffect(() => {
        async function loadCategory() {
            const { data } = await api.get('/categories')
            setCategories(data)

        }
        loadCategory(paths.Products)
    }, [])


    return (
        <Container>

            <h2>Edite seu produto</h2>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>

               
                <InputText  placeholder='Nome do Produto' type='text' {...register("name")} defaultValue={productData.name} />
                <Erros>{errors.name?.message}</Erros>
               
                <InputText placeholder='Preço do Produto' type='number'  {...register("price")} defaultValue={productData.price}/>
                <Erros>{errors.price?.message}</Erros>


                <LabelUpLoad>

                    {fileName || (

                        <>
                            <CloudUploadIcon fontSize='large' />
                            Carregue Foto do Produto
                        </>
                    )}


                    <input type='file' accept='image/png, image/jpeg'
                    {...register("file")} 
                        onChange={value => (setFileName(value.target.files[0]?.name))}
                    />
                </LabelUpLoad>
                <Erros>{errors.file?.message}</Erros>


               
                <textarea placeholder='Descrição do Produto...' {...register("description")} defaultValue={productData.description}></textarea>
                <Erros>{errors.description?.message}</Erros>    
                {/* <Label>Selecione a Categoria</Label> */}

                <Controller
                    name="category"
                    defaultValue={productData.category}
                    control={control}
                    render={({ field }) => {
                        return (
                            <SelectStyled
                                {...field}
                                options={categories}
                                getOptionLabel={lb => lb.name}
                                getOptionValue={lb => lb.id}
                                placeholder='Selecione a Categoria'
                                defaultValue={productData.category}
                            />
                        )
                    }}
                ></Controller>
                <Erros>{errors.category?.message}</Erros>

                <div className='offer'>
                    <Label >Está em Oferta?</Label>
                    <InputOffer type='checkbox' {...register("offer")} defaultChecked={productData.offer} />
                </div>
                <Button type='submit'>Criar Produto</Button>
            </Form>
        </Container>
    )
}
