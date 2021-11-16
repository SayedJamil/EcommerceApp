

function CheckoutProduct({imgUrl, name, price}) {
    return (
        <div className="checkoutProduct">
            <img src={imgUrl} class="card-img-top productCardImage" alt="..." />
            <div>
                <h5>{ }</h5>
            </div>
        </div>
    )
}

export default CheckoutProduct
