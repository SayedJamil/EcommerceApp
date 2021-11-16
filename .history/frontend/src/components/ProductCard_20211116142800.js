import { connect } from "react-redux";
import { addToCart } from "../Redux/Cart/cartActions";
import { useDispatch } from "react-redux";
const ProductCard = ({ id, name, imgUrl, price, description, addToCart }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div class="card">
                <img src={imgUrl} class="card-img-top productCardImage" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{description}</h5>
                    <p class="card-text">{name}</p>
                    <h4>$ {price}</h4>
                </div>
                <div class="productCardButtons">
                    <div>
                        <button type="button" class="btn btn-primary me-2"
                            onClick={() => dispatch(addToCart(id))}>Add to cart</button>
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
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(ProductCard);
