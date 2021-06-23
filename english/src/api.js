export async function getProducts() {        
    const productApiUrl = "https://fakestoreapi.com/products";
    const productData = await fetch(productApiUrl)
    .then(response => response.json());
    await localStorage.setItem('productCatalog', JSON.stringify(productData));    

}