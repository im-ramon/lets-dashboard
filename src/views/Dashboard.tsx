import PageTitle from "../components/PageTitle";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'J',
        total: 4000,
    },
    {
        name: 'F',
        total: 3000,
    },
    {
        name: 'M',
        total: 2000,
    },
    {
        name: 'A',
        total: 2780,
    },
    {
        name: 'M',
        total: 1890,
    },
    {
        name: 'J',
        total: 2390,
    },
    {
        name: 'J',
        total: 3490,
    },
    {
        name: 'A',
        total: 3000,
    },
    {
        name: 'S',
        total: 2000,
    },
    {
        name: 'O',
        total: 2780,
    },
    {
        name: 'N',
        total: 1890,
    },
    {
        name: 'D',
        total: 2780,
    },
];

function Dashboard() {
    const numbers = [
        'Fotos antigas',
        'Instagram',
        'Sites xxx',
        'Fotos',
        'Conversar antigas',
        'Amigos',
        'Fotos antigas',
        'Instagram',
        'Sites xxx',
        'Fotos',
        'Conversar antigas',
        'Amigos',
        'Sites xxx',
        'Fotos',
        'Conversar antigas',
        'Amigos',
        'Fotos antigas',
        'Instagram',
        'Sites xxx',
        'Fotos',
        'Conversar antigas',
        'Amigos',
    ];
    const listItems = numbers.map((numbers) =>
        <li>{numbers}</li>
    );


    return (
        <>
            <PageTitle title="Dashboard" subtitle="Algumas informações sobre seus usuários." />
            <section id="dashboard">
                <div className="line1">
                    <div className="dashboard-item">
                        <h3>Usuários do <span className="primary">Let's!</span></h3>
                        <h2 className="dashboard-item-qtd">2.520</h2>
                    </div>
                    <div className="dashboard-item">
                        <h3>Quantidade de recaídas</h3>
                        <h2 className="dashboard-item-qtd">189</h2>
                    </div>
                    <div className="dashboard-item">
                        <h3>Total de motivos para recair</h3>
                        <h2 className="dashboard-item-qtd">150</h2>
                    </div>
                </div>
                <div className="line2">
                    <div className="dashboard-item">
                        <h3>Quantidade de recaídas por mês</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="1 1" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="step" dataKey="total" stroke="#c9382b" fill="#c15147" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="dashboard-item list">
                        <h3>Motivos que leveram a recair</h3>
                        <ul>{listItems}</ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dashboard;