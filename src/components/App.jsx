import React from 'react'
import DisplaySomething from './DisplaySomething'
import DataFromApi from '../context/DataFromApi'
import Navigation from './Navigation'

export default function App() {
    return (
        <DataFromApi>
            <Navigation />
            <DisplaySomething />
        </DataFromApi>
    )
}