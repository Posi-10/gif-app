import { useState } from 'react'

import { AddCategory } from './AddCategory'
import {GridCard} from './GridCard'

export const GifApp = () => {
    const [category, setCategory] = useState([''])
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="p-5 my-4 bg-dark bg-gradientshadow-lg text-light rounded-3">
                            <div className="container-fluid py-5">
                                <h1 className="display-5 fw-bold">Gif App</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <AddCategory setCategory={setCategory}/> 
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {
                            category.map((cat) => {
                                return(
                                    <GridCard key={cat} category={cat}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}