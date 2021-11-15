import { useState } from "react"

export const AddCategory = ({setCategory}) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length > 0) {
            setCategory((cats) => [inputValue, ...cats])
            setInputValue("")
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoria</label>
                    <input onChange={handleInputChange} value={inputValue} type="text" className="form-control" id="category" aria-describedby="categoryHelp"/>
                    <div id="categoryHelp" className="form-text">Escribe una categoria para buscar...</div>
                </div>
            </form>
        </>
    )
}
