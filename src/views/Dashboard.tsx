import PageTitle from "../components/PageTitle";
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { api } from "../services/api";
import loading from '../assets/images/svg/loading.svg'
import reload from '../assets/images/svg/reload.svg'

function Dashboard() {
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalRelapses, setTotalRelapses] = useState(0)
    const [totalReasons, setTotalReasons] = useState(0)
    const [listaReasons, setListaReasons] = useState([{ reason: "Ainda não há nada por aqui." }])
    const [isLoading, setIsLoading] = useState(false)
    const [chartData, setChartData] = useState([{}])

    async function getStatistics() {
        setIsLoading(true)
        const data = localStorage.getItem('@lets:statistics')

        if (!data) {
            await api.post('/statistics', { user: "leticia", password: "123" })
                .then(response => {
                    localStorage.setItem('@lets:statistics', JSON.stringify(response.data))
                    console.log('Dados externos carregados')
                    updateStates(response.data)
                })
        } else {
            updateStates(JSON.parse(data))
            console.log('Dados locais carregados')
        }

        convertDates(listaReasons)
        setIsLoading(false)
    }

    function updateStates(obj: any) {
        setTotalUsers(obj.totalUsers)
        setTotalRelapses(obj.totalRelapses)
        setTotalReasons(obj.totalReasons)
        setListaReasons(obj.listReasons)
        setChartData(convertDates(obj.listReasons))
    }

    function handleRestartData() {
        localStorage.removeItem('@lets:statistics');
        getStatistics()
    }

    function convertDates(list: any) {
        const listMonths = list.map((el: { reason: string, created_at: Date }) => {
            return new Date(el.created_at).getMonth() + 1
        })

        let data = [
            {
                name: 'J',
                total: listMonths.filter((el: number) => el == 1).length,
            },
            {
                name: 'F',
                total: listMonths.filter((el: number) => el == 2).length,
            },
            {
                name: 'M',
                total: listMonths.filter((el: number) => el == 3).length,
            },
            {
                name: 'A',
                total: listMonths.filter((el: number) => el == 4).length,
            },
            {
                name: 'M',
                total: listMonths.filter((el: number) => el == 5).length,
            },
            {
                name: 'J',
                total: listMonths.filter((el: number) => el == 6).length,
            },
            {
                name: 'J',
                total: listMonths.filter((el: number) => el == 7).length,
            },
            {
                name: 'A',
                total: listMonths.filter((el: number) => el == 8).length,
            },
            {
                name: 'S',
                total: listMonths.filter((el: number) => el == 9).length,
            },
            {
                name: 'O',
                total: listMonths.filter((el: number) => el == 10).length,
            },
            {
                name: 'N',
                total: listMonths.filter((el: number) => el == 11).length,
            },
            {
                name: 'D',
                total: listMonths.filter((el: number) => el == 12).length,
            },
        ]

        return data
    }

    const listItems = listaReasons.map((item, index) =>
        <li key={index}>{item.reason}</li>
    );

    useEffect(() => {
        getStatistics()
    }, [])


    return (
        <>
            <div id="header-dashboard">
                <PageTitle title="Dashboard" subtitle="Algumas informações sobre seus usuários." />
                <img onClick={() => { handleRestartData() }} src={reload} alt="reload" title="Recarregar dados" />
            </div>
            <section id="dashboard">
                {isLoading ? <img src={loading} alt="loading" />
                    : (
                        <>
                            <div className="line1">
                                <div className="dashboard-item">
                                    <h3>Usuários do <span className="primary">Let's!</span></h3>
                                    <h2 className="dashboard-item-qtd">{totalUsers}</h2>
                                </div >
                                <div className="dashboard-item">
                                    <h3>Quantidade de recaídas</h3>
                                    <h2 className="dashboard-item-qtd">{totalRelapses}</h2>
                                </div>
                                <div className="dashboard-item">
                                    <h3>Total de motivos para recair</h3>
                                    <h2 className="dashboard-item-qtd">{totalReasons}</h2>
                                </div>
                            </div >
                            <div className="line2">
                                <div className="dashboard-item">
                                    <h3>Quantidade de recaídas por mês</h3>
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                            width={500}
                                            height={400}
                                            data={chartData}
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
                        </>
                    )}
            </section >

        </>
    );
}

export default Dashboard;