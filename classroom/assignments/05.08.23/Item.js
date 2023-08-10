import "./Item.css";
const Item = () => {
  const items = [
    {
      item: "Bottle",
      brand: "Cello",
      price: "115",
    },
  ];

  return (
    <>
      <h1>Item Component</h1>
      <div id="container">
        <h6>Bottle</h6>
        <h6>Cello</h6>
        <h6>120/-</h6>
      </div>
    </>
  );
};

export default Item;

