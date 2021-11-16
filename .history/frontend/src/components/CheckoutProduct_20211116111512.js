

function CheckoutProduct({imgUrl, name, price}) {
    return (
        <div className="checkoutProduct">
            <img src={imgUrl} class="card-img-top productCardImage" alt="..." />
            <div>
                <h5>{name}</h5>
                <p></p>
            </div>
        </div>
    )
}

export default CheckoutProduct
