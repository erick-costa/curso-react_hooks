import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart: [],
    products: [],
    user: null,
    // foco...
    number: 0
}

function reducer(state, action) {
    switch(action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'number_multiply7':
            return { ...state, number: state.number * 7 }
        case 'number_divide25':
            return { ...state, number: state.number / 25 }
        case 'number_parseInt':
            return { ...state, number: parseInt(state.number) }
        case 'number_addN':
            return { ...state, number: state.number + action.payload }
        default: 
            return state
    }
}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem Usuário</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Beatriz' })}>Login</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_add2' })}>+2</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_multiply7' })}>x7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_divide25' })}>÷25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_parseInt' })}>arredondar</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: 'number_addN', payload: 10 })}>+10</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer