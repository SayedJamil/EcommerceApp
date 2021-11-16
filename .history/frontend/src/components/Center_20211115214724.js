import '../App.css'
import axios from "axios";
import React, { useEffect, useState } from "react";

import ProductCard from './ProductCard'
function Center() {

    const options = {
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/category',
        params: { country: 'US' },
        headers: {
            'x-rapidapi-host': 'amazon24.p.rapidapi.com',
            'x-rapidapi-key': '52e79b23a4msh852ca5a19699b27p157ccejsnca2281634a80'
        }
    };
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);
    console.log(data);
    return (
        <div class="centerComp">
            <div class="row">
                <div class="col">
                    <ProductCard />
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
