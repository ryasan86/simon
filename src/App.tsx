import React, { useState, useEffect } from 'react'

import { App } from './styles'
import BoardPage from './pages/Board'
import HomePage from './pages/Home'

const AppComponent: React.FC = () => {
    const [selected, setSelected] = useState('/')

    const navigate = (path = '/') => () => {
        setSelected(path)
        window.history.pushState({}, path, path)
    }

    const handlePop = () => {
        const { pathname } = window.location
        setSelected(pathname)
    }

    useEffect(() => {
        window.addEventListener('popstate', handlePop)
        return () => window.removeEventListener('popstate', handlePop)
    }, [])

    useEffect(() => {
        setSelected(window.location.pathname)
    }, [])

    // prettier-ignore
    return (
        <App>
            <HomePage selected={selected === '/'} onNavigate={navigate} />
            <BoardPage selected={selected.includes('board')} onNavigate={navigate} />
        </App>
    )
}

export default AppComponent
