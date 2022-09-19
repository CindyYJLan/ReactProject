import "./App.css";
import ProductPrice from "./ProductPrice";
import img1 from "./img/flowers.jfif";
import img2 from "./img/apology.jfif";
import img3 from "./img/wedding.jfif";

function App() {
  return (
    <div>
      <h1>Fancy Florist</h1>
      <ProductPrice
        name="Congratulations Bouquet"
        description="The perfect bouquet for a celebration such as a birthday or graduation."
        price={70}
        sale={true}
        img={img1}
      />
      <ProductPrice
        name="Apology Bouquet"
        description="You need something extra when you know you messed up."
        price={150}
        sale={true}
        img={img2}
      />
      <ProductPrice
        name="Wedding Bouquet"
        description="Beautiful collection of flowers to turn heads on your special day!"
        price={200}
        sale={false}
        img={img3}
      />
    </div>
  );
}

export default App;
