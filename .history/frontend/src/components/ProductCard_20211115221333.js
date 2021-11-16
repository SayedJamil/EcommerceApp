function ProductCard({ name, imgUrl, price, description }) {
    return (
        <div>
            <div class="card">
                <img src=] class="card-img-top productCardImage" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <h4>$ 499.99</h4>
                </div>
                <div class="productCardButtons">
                    <div>
                        <button type="button" class="btn btn-primary me-2">Add to cart</button>
                        <button type="button" class="btn btn-outline-primary">Buy Now</button>
                    </div>
                    <div>
                        <button type="button" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
