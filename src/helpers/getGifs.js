export const getGifs = async (category) => {
    const apiKey = 'jCmvCXa60Ekh1fyuTpnhYESkqV8kgU72'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=8`
    const hhtpRequest = await fetch(url)
    const {data} = await hhtpRequest.json()
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url,
        }
    })
    return gifs
}