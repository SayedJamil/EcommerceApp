import '../App.css'
// import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import { useDispatch } from 'react-redux';

function Center() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getData = async () => {
        const res = await fetch('https://fakestoreapi.com/products/category/electronics');
        const jsonData = await res.json();
        setData(jsonData);
        setLoading(false);
        // dispatch()
    }

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
                <h3></h3>
                <div class="row">
                    <div class="col">
                        <ProductCard key={data[0].id} name={data[0].title} imgUrl={data[0].image} price={data[0].price} description={data[0].desciption} />
                    </div>
                    <div class="col">
                        <ProductCard key={data[1].id} name={data[1].title} imgUrl={data[1].image} price={data[1].price} description={data[1].desciption} />
                    </div>
                </div>
                <div class="row mt">
                    <div class="col">
                        <ProductCard key={data[1].id} name={data[2].title} imgUrl={data[2].image} price={data[2].price} description={data[2].desciption} />
                    </div>
                    <div class="col">
                        <ProductCard key={data[3].id} name={data[3].title} imgUrl={data[3].image} price={data[3].price} description={data[3].desciption} />
                    </div>
                    <div class="col">
                        <ProductCard key={data[4].id} name={data[4].title} imgUrl={data[4].image} price={data[4].price} description={data[4].desciption} />
                    </div>
                </div>
            </div>
        )
    }
}



export default Center;
