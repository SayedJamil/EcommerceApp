

function CheckoutProduct({ imgUrl, name, price }) {
    return (
        <div className="checkoutProduct">
            <img src={imgUrl} class="card-img-top imageCheckoutProductSizing" alt="..." />
            <div>
                <h5>{name}</h5>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default CheckoutProduct
