function getProducts( searchQuery ) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/yunsungjoong/react-hnm-clone/products?q=${searchQuery}`;  // `http://localhost:4000/products?q=${searchQuery}`; 
        let response = await fetch(url);
        let data = await response.json();
        dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data }})
        console.log(data)
    };
}

export const productAction= {getProducts}