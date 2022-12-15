export const getGifs = async ( category ) => {
    console.log("Hola");
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TzsRDvzf0FQguHh68pVsuYzLbx4UwTc4&q=${category}&limit=10`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    
    return gifs;
}