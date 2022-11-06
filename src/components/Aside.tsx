function Aside() {
    return (
        <>
            <aside className="bg-BLACK">
                <div id="logo" className="my-2 bg-BACKGROUND_1 py-2">
                    <img alt="Vue logo" className="logo mr-2" src="@/assets/icon.png" />
                    <p className="text-center">Let's! | Especialista <span className="primary">X</span></p>
                </div>

                <nav>
                    <a className="routerlink"><img src="./assets/icons/home.svg" alt="Home" />Home</a>
                    <a className="routerlink"><img src="./assets/icons/dashboard.svg" alt="Home" />Dashboard</a>
                    <a className="routerlink"><img src="./assets/icons/bell.svg" alt="Home" />Enviar notificação</a>
                </nav>

                <div className="mt-auto">
                    Precisando de ajuda?
                </div>
            </aside>

            <main className="flex-1">
                <a />
            </main>
        </>
    );
}

export default Aside;