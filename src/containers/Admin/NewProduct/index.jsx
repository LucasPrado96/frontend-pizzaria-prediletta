import { Container, Label, Form, InputText, InputOffer, SelectStyled, LabelUpLoad, Erros } from './styles'
import { Button } from '../../../components/Button'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { useEffect } from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import paths from '../../../constants'



export function NewProduct() {
    const navigate = useNavigate()
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])


    const schema = yup.object().shape({
        name: yup.string().required('Insira um nome para o produto'),
        price: yup.string().required('Insira um preço para o produto'),
        file: yup.mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value?.length > 0
    }).test('fileSize', 'Carregue um arquivo até 5mb', value => {
        return value[0]?.size <= 5242880
    }),
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

       await toast.promise( api.post('/products', productFormData), {
        pending: 'Criando Produto...',
        success: 'Produto Criado!',
        error:'Falha ao Criar Produto',
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

            <h2>Crie seu produto</h2>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>

               
                <InputText  placeholder='Nome do Produto' type='text' {...register("name")} />
                <Erros>{errors.name?.message}</Erros>
               
                <InputText placeholder='Preço do Produto' type='number'  {...register("price")} />
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


               
                <textarea placeholder='Descrição do Produto...' {...register("description")}></textarea>
                <Erros>{errors.description?.message}</Erros>    
                {/* <Label>Selecione a Categoria</Label> */}

                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => {
                        return (
                            <SelectStyled
                                {...field}
                                options={categories}
                                getOptionLabel={lb => lb.name}
                                getOptionValue={lb => lb.id}
                                placeholder='Selecione a Categoria'

                            />
                        )
                    }}
                ></Controller>
                <Erros>{errors.category?.message}</Erros>

                <div className='offer'>
                    <Label >Está em Oferta?</Label>
                    <InputOffer type='checkbox' {...register("offer")} />
                </div>
                <Button type='submit'>Criar Produto</Button>
            </Form>
        </Container>
    )
}
