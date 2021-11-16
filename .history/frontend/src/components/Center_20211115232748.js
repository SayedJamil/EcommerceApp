import '../App.css'
// import axios from "axios";
import React, { useEffect, useState } from "react";

import ProductCard from './ProductCard'
function Center() {

    // const options = {
    //     method: 'GET',
    //     url: 'https://amazon24.p.rapidapi.com/api/product',
    //     params: {
    //         keyword: 'electronics',
    //         country: 'US',
    //         page: '1',
    //         filter: 'aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y'
    //     },
    //     headers: {
    //         'x-rapidapi-host': 'amazon24.p.rapidapi.com',
    //         'x-rapidapi-key': '52e79b23a4msh852ca5a19699b27p157ccejsnca2281634a80'
    //     }
    // };
    const [data, setData] = useState([]);
    const getData = async () => {
        const res = await fetch('https://fakestoreapi.com/products/category/electronics');
        const jsonData = await res.data;
        setData(jsonData);

    }
    console.log(data);
    getData();

    // // useEffect(() => {
    // //     axios.request(options).
    // //         then(function (response) {
    // //         console.log(response.data);
    // //         setData(response.data);
    // //     }).catch(function (error) {
    // //         console.error(error);
    // //     });
    // // }, []);
    // // console.log(data);
    // console.log(data.docs);
    // // console.log(data.docs[1]);
    // // product_image_main_url
    // // product_title
    // // product_detail_url
    // // app_sale_price
    return (
        <div class="centerComp">
            <div class="row">
                <div class="col">
                    {/* <ProductCard name={data[0].title} imgUrl={data[0].image} price={data[0].price} description={data[0].desciption} />   */}
                </div>
                <div class="col">
                    <ProductCard />
                </div>
            </div>
            <div class="row mt">
                <div class="col">
                    <ProductCard />
                </div>
                <div class="col">
                    <ProductCard />
                </div>
                <div class="col">
                    <ProductCard />
                </div>
            </div>
        </div>
    )
}

export default Center