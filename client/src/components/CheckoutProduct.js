

function CheckoutProduct({ imgUrl, name, price }) {
    return (
        <div className="checkoutProduct">
            <img src={imgUrl} class="card-img-top imageCheckoutProductSizing" alt="..." />
            <div className="productCheckoutText">
                <h5>{name}</h5>
                <p>${price}</p>

            </div>
            <button type="button" class="btn btn-outline-primary">Remove    </button>
        </div>
    )
}

export default CheckoutProduct
