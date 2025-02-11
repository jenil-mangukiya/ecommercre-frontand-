

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import axios from "axios";

import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import Cheakout from "./Cheakout";

function Cart() {
  const { id } = useParams();

  // const [i, seti] = useState('0');
  const [productId, setproductId] = useState([]);
  const [productImage, setproductImage] = useState([]);
  const [productTitle, setproductTitle] = useState([]);
  const [productPrice, setproductPrice] = useState([]);
  const [productDiscount, setproductDiscount] = useState([]);
  const [productQty, setproductQty] = useState([]);
  // const [id, setId] = useState("");
  const [data, setdata] = useState([]);

  const [uId, setuId] = useState('')
  const [p, setp] = useState(0)
  const [total, settotal] = useState(0)

  const [modalShow2, setModalShow2] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const[cid, setcid] = useState([]);
  useEffect(() => {
    console.log(p)
    if (!sessionStorage.getItem("userid")) {
      navigate("/login", { state: { path: location.pathname } });
    }
    axios
      .get(`${BASE_URL}/cart/getalldataofcart/${id}`, {
      })
      .then(async function (response) {
        console.log(response.data.addtocartdata.user.product);
        setdata(response.data.addtocartdata.user.product)
        setcid(response.data.addtocartdata.cartId )
        console.log(cid);
      })
      .catch(function (error) {
        console.log(error);

      });

    setuId(sessionStorage.getItem('userid'))
  }, [p,modalShow2]);



  const rem = ((a) => {

    console.log(uId);
    console.log(a);
    axios
      .delete(`${BASE_URL}/cart/remove-cart-item?user_id=${uId}&product_id=${a}`, {

      })
      .then(function (response) {
        console.log(response)
        setp(response)
      })
      .catch(function (error) {
        console.log(error);

      });
  })

  const checkout = (() =>{

    sessionStorage.setItem('cartid',cid)
    navigate('/cheakout', {state:{path: location.pathname}})
   
    setModalShow2(true);
  })




  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}

async function displayRazorpay() {
  const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
  }

  // creating a new order
  const result = await axios.post(`${BASE_URL}/checkout/createorderforallcart/${cid}`)
  if (!result) {
      alert("Server error. Are you online?");
      return;
  }

  console.log(result);

  // Getting the order details back
  const { amount, id: order_id, currency } = result.data.order;
  console.log(amount);

  const options = {
      key: "rzp_test_8KwQdyz1ygkX8x", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
          const data = {
              orderCreationId: order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
          };

          console.log(data);

          // const result = await axios.post("http://localhost:5000/payment/success", data);

          // alert(result.data.msg);
      },
      prefill: {
          name: "Soumya Dey",
          email: "SoumyaDey@example.com",
          contact: "9999999999",
      },
      notes: {
          address: "Soumya Dey Corporate Office",
      },
      theme: {
          color: "#61dafb",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

  
  return (
    <>
      
      
        
      <Header />
      <div className="container">
      <Cheakout
        show={modalShow2}
        onHide={() => setModalShow2(false)}
        productId={id}
        />
        <div className="my-5">
          <h1 className="text-center">Your Cart ( _ items )</h1>
        </div>
        <div className="card-body">
          <table id="" className="table table-bordered ">
            <thead>
              <tr>
                <th className="text-center">Item</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total</th>
                <th className="text-center">remove</th>
              </tr>
            </thead>
            {data.map((crt, index) => {

              return (
                <tbody key={index}>
                  <tr>
                    <td>
                      <div className="row">
                        <div className="col-12 col-xl-3">
                          <img
                            src={crt.productImage}
                            alt=""
                            className="td-item m-3"
                            style={{ height: "100px", width: "100px" }}
                          />
                        </div>
                        <div className="mt-4 col-12 col-xl-9">
                          <p className="fs-3 m-0 p-0 ">{crt.productTitle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-center pt-5 fs-4">${crt.productPrice}</td>
                    <td className="pt-5 d-flex fs-4 justify-content-center">
                      <div>
                        <GrSubtractCircle />
                      </div>
                      <div className="px-3 aa">
                        {crt.productQty}
                      </div>
                      <div>
                        <IoIosAddCircleOutline />
                      </div>
                    </td>
                    <td className="text-center pt-5 fs-4 ">
                      <div className="aa ps-5">${crt.productPrice * crt.productQty}</div>
                    </td>
                    <td className="text-center pt-5 fs-3 ">
                      <MdDeleteSweep onClick={() => rem(crt.productId)} />
                    </td>
                  </tr>
                </tbody>
              );
            })}
            <tbody>
              <tr>
                <td colSpan={3} className="text-center">Total</td>
                <td></td>

                <td className="text-center d-flex flex-column py-2">
                <button onClick={() => setModalShow2(true)} className="px-2 my-1 fs-5" >Cheack Out</button>
               {/* <Link to={`/checkout/${id}`}><button>Check Out</button></Link> */}
                <button onClick={displayRazorpay} className="pX-2 my-1 fs-5">Payment</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;