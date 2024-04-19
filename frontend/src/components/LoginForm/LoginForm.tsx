import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import './LoginForm.css'
import porquinho from '../../assets/porquinho.png'
import { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useUser } from '../../hooks/useUser'
import Swal from 'sweetalert2'
function LoginForm() {
    const { login } = useUser()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        console.log(formData);
    }, [formData]);



    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const { email, password } = formData

        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Preencha todos os campos!',
                timer: 1500,
            })
            return
        }
        const loginResponse = await login(formData)
        if ('token' in loginResponse && 'user' in loginResponse) {
            Swal.fire({
                title: "Login realizado com sucesso!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                window.location.href = '/'
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email ou senha incorretos!',
                timer: 1500,
            })
        }
    }

    const register = () => {
        Swal.fire({
            icon: 'error',
            title: 'Em construção!',
            text: 'A fazer!',
            timer: 1500,
        })
    }

    const forgotPassword = () => {
        Swal.fire({
            icon: 'error',
            title: 'Em construção!',
            text: 'A fazer!',
            timer: 1500,
        })
    }

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => setShowPassword(!showPassword)
    const handleMouseDownPassword = () => setShowPassword(!showPassword)

    return (
        <div className='main-login-div'>
            <form
                onSubmit={handleSubmit}
            >
                <img src={porquinho} alt="Porco" className='pa-logo' />
                <TextField
                    className='form-input'
                    fullWidth
                    label="Email"
                    name="email"
                    onChange={handleFormChange}
                    required
                    type="email"
                    variant="outlined"
                    color='success'
                    margin='normal'
                />
                <TextField
                    className='form-input'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge='end'
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    fullWidth
                    label="Senha"
                    name="password"
                    onChange={handleFormChange}
                    required
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    color='success'
                    margin='normal'
                />
                <Button
                    className='form-button'
                    style={{
                        marginBottom: '10px',
                        marginRight: '16px',
                        backgroundColor: 'green',
                    }}
                    type="submit"
                    variant="contained"
                >
                    Login
                </Button>
                <div
                    className='form-buttons-div'
                >
                    <Button
                        className='form-button'
                        style={{
                            backgroundColor: 'green',
                        }}
                        type="submit"
                        variant="contained"
                        onClick={() => register()}
                    >
                        Registrar
                    </Button>
                    <Button
                        className='form-button'
                        style={{
                            backgroundColor: 'green',
                            marginRight: '16px',
                        }}
                        type="submit"
                        variant="contained"
                        onClick={() => forgotPassword()}
                    >
                        Esqueci a senha
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm