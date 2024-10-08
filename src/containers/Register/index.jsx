import { useState } from 'react'
import Logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import { Container, FormLogin, Wallpaper, InputLogin, InputContainer, LabelForm, H1text, Form } from './styles'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from '../../services/api'



import * as yup from "yup"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export function Register() {

    const navigate = useNavigate()

    const [phoneValue, setPhoneValue] = useState('');


    const phoneRegex = /^\(\d{2}\)\d{8,9}$/

    const schema = yup.object({
        name: yup.string().required('Insira um nome'),
        email: yup.string().email('Inserir um email válido').required('Insira um Email'),
        password: yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres').required(),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('Confirme a senha'),
        phone: yup.string().matches(phoneRegex, 'Número de telefone inválido').required('Insira seu número de celular'),


    })

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: yupResolver(schema),
    })


    const onSubmit = async (clientdata) => {
        try {
            const { status } = await api.post('/users', {
                name: clientdata.name,
                email: clientdata.email,
                password: clientdata.password,
                phone: clientdata.phone,
            },
                {
                    validateStatus: () => true,
                },

            )
            if (status === 201 || status === 200) {
                toast.success('Cadastro realizado com sucesso')
                navigate('/login')
            } else if (status === 409) {
                toast.error('Esse email já está cadastrado')
                
            } else {
                throw new Error();
            }
          console.log(status)
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            toast.error('Falha na cadastro, reveja os dados')
          
        }
        
    }





    function inputMask(e) {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 6) {
            value = value.replace(/(\d{2})(\d{7})/, "($1)$2");
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})/, "($1)");
        }


        setPhoneValue(value);
        setValue("phone", value);

    }




    return (
        <Container>

            <Wallpaper>
                <img src={Logo} alt='Img-forno' />
            </Wallpaper>


            <FormLogin>
                <H1text>Faça Seu Cadastro</H1text>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <LabelForm>Nome</LabelForm>
                        <InputLogin type='text'  {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <LabelForm>Email</LabelForm>
                        <InputLogin type='text'  {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <LabelForm>Senha</LabelForm>
                        <InputLogin type='password' {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <LabelForm>Confirme a Senha</LabelForm>
                        <InputLogin type='password' {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <LabelForm>Celular</LabelForm>
                        <InputLogin
                            type='text'
                            value={phoneValue}
                            onChange={inputMask}
                            placeholder='(xx)xxxxxxxxx'

                        />
                        <p>{errors?.phone?.message}</p>

                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>

                </Form>

                <p className='paragrafoFinal'>Já possui cadastro? <a href='/login'>Clique Aqui</a></p>



            </FormLogin>
        </Container>
    )

}



