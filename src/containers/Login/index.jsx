// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import { Container, LoginScreen, Wallpaper, InputLogin, InputContainer, LabelForm, H1text, Form, } from './styles'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import {api} from '../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
import paths from '../../constants'



export function Login() {

    const {putUserData} = useUser()
    const navigate = useNavigate()

    const schema = yup.object({
        email: yup.string().email('Digite um Email válido.').required('O email é obrigatório.'),
        password: yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres.').required('Você precisa de uma senha'),
    })
    .required();

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema),
      });

    
    


    const onSubmit =  async clientdata => {
     
     const {data} = await toast.promise(
        api.post('/session', {
            email: clientdata.email,
            password: clientdata.password,
            
        }),
        
        {
            success: {
                render(){
                    setTimeout(() => {

                        if(data.admin){
                            toast.success(
                                navigate(paths.Order)
                            )
                           
                        } else{
                            toast.success(
                                navigate('/')
                            )
                        }
                      
                    }, 1000)
                    return 'Seja Bem-vindo(a)'
                },
            },
            pending: 'Efetuando login',
            error: 'Email ou Senha Incorretos',
        },
     )
     
     putUserData(data)
 
    };


    return (
        <Container>

            <Wallpaper>
                <img src={Logo} alt='Img-forno' />
            </Wallpaper>


            <LoginScreen>

                <img src={Logo} />
                <H1text>Seja Bem-Vindo à <span>Pizzaria  Prediletta!</span> </H1text>
                <h3>Faça login para realizar seus pedidos.</h3>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <LabelForm >Email</LabelForm>
                        <InputLogin type='email' {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <LabelForm>Senha</LabelForm>
                        <InputLogin type='password' {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit" >Entrar</Button>
                </Form>

                <p className='paragrafoFinal'>Ainda não possui conta? <a href='/register'>Clique Aqui</a></p>
            </LoginScreen>
        </Container>
    );

}



