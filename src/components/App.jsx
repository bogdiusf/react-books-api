import React from 'react'
import DataFromApi from '../context/DataFromApi'
import Navigation from './Navigation'

export default function App() {
    return (
        <DataFromApi>
            <Navigation />
        </DataFromApi>
    )
}