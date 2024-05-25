import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import StarRatings from "react-star-ratings";
import { addToCart } from "../Redux/actions/actions";


const ProductsList = () => {
  const Products = useSelector((state) => state.products.product); // [{},{}]
  const carts = useSelector((state) => state.cartsList.cartsList); // [{},{}]
console.log("carts", carts)

  const [toggleBuyBtn, setToggleBuyBtn] = useState(-1)

   const dispatch = useDispatch()




const handleClick = (element, i) => {
dispatch(addToCart(element))
setToggleBuyBtn(i)

}



  return (
    <ul className=" container w-90 p-4 m-auto d-flex flex-wrap gap-5 justify-content-between">
      {Products &&
        Products.map((ele, index) => (
          <article className="card w-25 p-3" key={index}>
            <img className="card-img-top" src={ele.image} alt={ele.title} />

            <div className="card-body">
              <h5 className="card-title">{ele.title}</h5>
              <h6 class="card-text">$ {ele.price}</h6>
              <div className="py-2">
              <StarRatings
                rating={ele.rating.rate}
                starDimension="20px"
                starSpacing="5px"
                starRatedColor="blue"
                numberOfStars={5}
              />
              </div>
             <button onClick={() => handleClick(ele, index)} className="btn btn-primary" >Add to Cart</button>
            </div>
          </article>
        ))}
    </ul>
  );
};

export default ProductsList;
