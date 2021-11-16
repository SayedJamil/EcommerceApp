import '../App.css'
import axios from "axios";
import React, { useEffect, useState } from "react";

import ProductCard from './ProductCard'
function Center() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
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
