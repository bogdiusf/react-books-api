import React from 'react'
import DataFromApi from './context/DataFromApi'
import Routes from './routes/Routes'

export default function App() {
    return (
        <DataFromApi>
            <Routes />
        </DataFromApi>
    )
}