import React from 'react'
import DisplaySomething from './DisplaySomething'
import DataFromApi from '../context/DataFromApi'

export default function App(){
    return(
        <DataFromApi>
            <DisplaySomething/>
        </DataFromApi>
    )
}