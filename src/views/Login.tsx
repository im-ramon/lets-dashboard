import { useContext, useState } from 'react';
import logo from '../assets/images/img/logo.png';
import loading from '../assets/images/svg/loading.svg';
import unlock from '../assets/images/svg/unlock.svg';
import { AppContext } from '../contexts/appContext';
import { api } from '../services/api';
import { ToastContainer, toast } from 'react-toastify';


function Login() {
    const { setUser } = useContext(AppContext)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [id, setId] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function signIn(id: string, password: string) {
        setIsLoading(true)

        if (id === '' && password === '') {
            toast.warn('Preencha todos os campos para fazer login.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            return
        }

        try {
            const response = await api.post('/auth_user', {
                id, password
            })

            setTokenToAxios(response.data.token)

            setUser({
                name: response.data.name,
                token: response.data.token
            })

        } catch (error) {
            console.log('signIn:', error)

            toast.error('Não foi possível fazer login. Verifique os dados digitados', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } finally {
            setIsLoading(false)
        }
    }

    function setTokenToAxios(token: string) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    async function handleSend(event: any) {
        event.preventDefault()
        setIsLoading(true)

        await signIn(id, password)

        setIsLoading(false)
    }


    return (
        <div id="login_container">
            <div id="login_area">
                <div id="logo_area">
                    <img src={logo} alt="logo" />
                    <span>Let's! | Especialista<span className="primary">X</span></span>
                </div>

                <form id="messaging">
                    <h3>Login</h3>
                    <h4>- acesse aqui o Dashboard</h4>

                    <fieldset>
                        <label htmlFor="">Usuário</label>
                        <input type="text" name="chave1" id="chave1" value={id} onChange={(event) => setId(event.target.value)} />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="">Senha</label>
                        <input type="password" name="chave2" id="chave2" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </fieldset>

                    <button className="button-primary" onClick={handleSend}>
                        <span>Entrar</span>
                        <img src={isLoading ? loading : unlock} alt={isLoading ? "loading" : "messaging"} />
                    </button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;