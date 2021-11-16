import '../App.css'
// import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';


import ProductCard from './ProductCard'
function Center() = ({ products }) => {
    const [loading, setLoading] = useState(true);
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
        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false);

    }
    // console.log(data[0].title);
    useEffect(() => {
        getData();
    }, []);

    if (loading) {
        return (
            <div>
                Loading..
            </div>
        )
    } else {
        return (
            <div class="centerComp">
                <div class="row">
                    <div class="col">
                        <ProductCard name={data[0].title} imgUrl={data[0].image} price={data[0].price} description={data[0].desciption} />
                    </div>
                    <div class="col">
                        <ProductCard name={data[1].title} imgUrl={data[1].image} price={data[1].price} description={data[1].desciption} />
                    </div>
                </div>
                <div class="row mt">
                    <div class="col">
                        <ProductCard name={data[2].title} imgUrl={data[2].image} price={data[2].price} description={data[2].desciption} />
                    </div>
                    <div class="col">
                        <ProductCard name={data[3].title} imgUrl={data[3].image} price={data[3].price} description={data[3].desciption} />
                    </div>
                    <div class="col">
                        <ProductCard name={data[4].title} imgUrl={data[4].image} price={data[4].price} description={data[4].desciption} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.products,
    };
};


export default connect(mapStateToProps)(Center);
