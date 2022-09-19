import "./ProductPrice.css";

function ProductPrice(props) {
  const saleItem = props.sale ? (
    <span className="redsale">"on sale!" </span>
  ) : null;

  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>{props.despription}</p>
      <img src={props.img} alt="flowers"></img>
      <p>${props.price}</p>
      <p>{saleItem}</p>
      <button>Buy now !</button>
    </div>
  );
}

export default ProductPrice;
