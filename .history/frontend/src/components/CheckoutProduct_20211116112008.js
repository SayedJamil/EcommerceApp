

function CheckoutProduct({ imgUrl, name, price }) {
    return (
        <div className="checkoutProduct">
            <img src={imgUrl} class="card-img-top imageCheckoutProductSizing" alt="..." />
            <div>
                <h5>{name}</h5>
                <p>${price}</p>
                <button type="button" class="btn btn-outline-primary">Remove    </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
