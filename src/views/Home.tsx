import PageTitle from "../components/PageTitle";

function Home() {
    return (
        <>
            <PageTitle title="Página inicial" subtitle="Algumas informações relevantes." />
            <section id="home">
                <h2>Olá, Letícia!</h2>
                <h3>Desenvolvi este painel para você conseguir enviar notificações (mensagens) aos usuários do <span className="primary">Let's!</span>, além de ter acesso a alguns dados estatísticos.</h3>
                <h4>- Ramon</h4>
            </section>
        </>
    );
}

export default Home;