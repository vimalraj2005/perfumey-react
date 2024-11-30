import one from "../assests/image/one.jpg";
import two from "../assests/image/two.jpg";
import three from "../assests/image/three.jpg";


function Products() {
  return (
    <div className="Products">
      <div className="box">
        <img src={one} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          exercitationem!
        </p>
      </div>
      <div className="box">
        <img src={two} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          exercitationem!
        </p>
      </div>
      <div className="box">
        <img src={three} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          exercitationem!
        </p>
      </div>
    </div>
  );
}
export default Products;
