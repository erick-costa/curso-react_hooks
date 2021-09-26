import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num) 

    if(n < 0) return -1
    if(n === 0) return 1
    return calcFatorial(n - 1) * n
}

function calcStatus(num) {
    const n = parseInt(num)

    if (n % 2 === 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [status, setStatus] = useState('par')
    const [num, setNum] = useState(0)

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        if (fatorial > 1000000) {
            document.title = 'Mais de 1M!'
        }   
    }, [fatorial])

    useEffect(() => {
        setStatus(calcStatus(num))
    }, [num])

    //setFatorial(calcFatorial(number))

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercício #01'/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não Existe!' : fatorial}</span>
                </div>
                <input type="number" value={number} className='input' onChange={e => setNumber(e.target.value)}/>
            </div>
            <SectionTitle title='Exercício #02'/>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
                <input type="number" className="input" value={num} onChange={e => setNum(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
