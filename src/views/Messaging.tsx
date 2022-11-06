import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from "../services/api";

import PageTitle from "../components/PageTitle";
import messaging from '../assets/images/svg/messaging.svg'
import loading from '../assets/images/svg/loading.svg'

function Messaging() {
    const [messageTitle, setMessageTitle] = useState<string>('')
    const [messageBody, setMessageBoby] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function handleChangeTitle(event: any) {
        setMessageTitle(event.target.value)
    }

    function handleChangeBody(event: any) {
        setMessageBoby(event.target.value)
    }

    async function handleSend(event: any) {
        event.preventDefault()

        if (messageTitle !== '' && messageBody !== '') {
            setIsLoading(true)
            await api.post('/send_push_notification',
                {
                    user: "leticia",
                    password: "123",
                    title: messageTitle,
                    body: messageBody

                })
                .then(response => {
                    toast.success(`Mensagem enviada! ${response.data.total} usuários foram alcançados!`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setMessageTitle('')
                    setMessageBoby('')
                })
                .catch(e => console.log(e))
                .finally(() => { setIsLoading(false) })



        } else {
            toast.warn('Preencha todos os campos do formulário!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <>
            <PageTitle title="Enviar mensagens" subtitle="Envie mensagens para todos os usuários do Let's!" />
            <form id="messaging">
                <h3>Preencha o formulário com a mensagem que deseja enviar aos usários.</h3>
                <h4>- use com moderação 😅</h4>

                <fieldset>
                    <label htmlFor="">Título de mensagem</label>
                    <input type="text" name="title" id="title" value={messageTitle} onChange={handleChangeTitle} />
                </fieldset>

                <fieldset>
                    <label htmlFor="">Corpo de mensagem</label>
                    <input type="text" name="messageBody" id="messageBody" value={messageBody} onChange={handleChangeBody} />
                </fieldset>

                <button className="button-primary" onClick={handleSend}>
                    <span>Enviar</span>
                    <img src={isLoading ? loading : messaging} alt={isLoading ? "loading" : "messaging"} />
                </button>
            </form>

            <ToastContainer />
        </>
    );
}

export default Messaging;