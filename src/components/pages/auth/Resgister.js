import {useState} from 'react'
import Input from '../../form/Input'
import styles from '../../form/Form.module.css'
import { Link } from 'react-router-dom'

function Register() {
    const [user, setUser] = useState({})
    
    function handleChange(e) {
        setUser({...user, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        // enviar o usuario para o banco
        console.log(user)
    }
    
    return (
        <section className={styles.form_container}>
            <h1>Registrar</h1>
            <form onSubmit={handleSubmit} >
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu Telefone"
                    handleOnChange={handleChange}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite o seu E-mail"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite a sua senha"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Confirmação de Senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Digite a sua senha novamente!"
                    handleOnChange={handleChange}
                />
                <input type="submit" value="Cadrastrar" />
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Register