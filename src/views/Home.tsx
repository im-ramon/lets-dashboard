import PageTitle from "../components/PageTitle";

function Home() {
    return (
        <>
            <PageTitle title="Página inicial" subtitle="Algumas informações relevantes." />
            <section id="home">
                <h2>Olá, Letícia!</h2>
                <h3>Desenvolvi este painel para você conseguir enviar notificações (mensagens) aos usuários do <span className="primary">Let's!</span>, além de ter acesso a alguns dados estatísticos.</h3>
                <h4>- Ramon</h4>

                <div id="home-observacoes">
                    <h3>Alguma observações: </h3>
                    <ul>
                        <li>Por segurança, só é possível enviar uma mensagem por hora.</li>
                        <li>Revise <b>bem</b> a mensagem antes de enviar, pois não será possível apagá-la.</li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Home;