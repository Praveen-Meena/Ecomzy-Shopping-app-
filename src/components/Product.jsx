
const Product = ({post}) => {

  

  return (
    <div >
      <div>
        <p >{post.title}</p>
      </div>
      <div>
        <p >{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div >
        <img src={post.image} alt="Product Image"  />
      </div>

      <div>
        <p >${post.price}</p>
      </div>
      
      <button>
          {
            true? <p>Add to Cart</p>: <p>Remove from Cart</p>
          }
      </button>
        

    </div>
  );
};

export default Product;
