/**
 * @author: alexandercd
 * @date: 22/septiembre/2021
 * @description: 
**/

export const getGifs = async (category, limit = 10) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=1ME1Xmhdxls4VbBA604N93Nl77WzLTYT`
    const response = await fetch( url );
    const { data } = await response.json();
    const newData = data.map((item, index) => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url
        };
    });   
    return newData; 
}
