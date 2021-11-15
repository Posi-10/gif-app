export const CardItem = ({id, title, url, des}) => {
    return(
        <>
            <div className="col">
                <div className="card" style={{width: "18rem"}}>
                    <img src={url} className="card-img-top" alt={id}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}