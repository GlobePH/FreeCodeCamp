import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="container" style={{ minHeight: "75vh", padding: "25vh" }}>
      <div className="row">
        <h1>Checkout Page</h1>
        <div className="col-sm-4">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Create Your Account" />
          </form>
        </div>
        <div className="col-sm-4">
          <h2>Login</h2>
          <p>
            Have an account already? Click here to{" "}
            <Link to="/login">sign in</Link>.
          </p>
        </div>
        <div className="col-sm-4">
          <h2>Order Summary</h2>
          <table>
            <tody>
              <tr>
                <td>Order Subtotal</td>
                <td>₱ 28,980.00</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>Order Total</td>
                <td>₱ 28,980.00</td>
              </tr>
            </tody>
          </table>
          <Link to="/tracking-purchase">Place Your Order</Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
