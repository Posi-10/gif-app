import { useFetchGifs } from '../hooks/useFetchGifs'
import {CardItem} from './CardItem'

export const GridCard = ({category}) => {

    const {data, loading} = useFetchGifs(category)


    return(
        <>
            {
                loading ?
                (   
                    <>
                        <h3>{category}</h3>
                        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                            {
                                data.map(({id, title, url, des}) => {
                                    return(
                                        <CardItem key={id} id={id} title={title} url={url} des={des}/>
                                    )
                                })
                            }
                        </div>
                    </>
                ) : (
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )
            }
        </>
    )
}