import CheckoutProduct from "./CheckoutProduct"
import Header from "./Header"

function Checkout() {
    return (
        <div>
            <Header />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Cameras/BuyingGuide/Header/DSLR_BG_section1_01._CB483353607_.jpg" class="img-fluid imageCheckoutSizing" alt=" "></img>
            <div className="checkoutCenter">
                <div>
                    
                </div>
                <h2>Items in cart</h2>
                <CheckoutProduct name="Something" imgUrl="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" price="599" />
                <div className="checkoutRight">
                    <h2>Subtotal</h2>
                </div>
            </div>
           
        </div >
    )
}

export default Checkout