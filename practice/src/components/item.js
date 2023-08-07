import "../CSS/item.css";

const Item = () => {
  const items = [
    {
      id: 0,
      item: "Bottel",
      brand: "Cello",
      Price: 115,
    },

    {
      id: 1,
      item: "Bottel",
      brand: "Cello",
      Price: 115,
    },

    {
      id: 2,
      item: "Bottel",
      brand: "Cello",
      Price: 115,
    },
  ];
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="main" key={index}>
            <div className="item">{item.item}</div>
            <div className="item">{item.brand}</div>
            <div className="item">{item.Price}</div>
          </div>
        );
      })}
    </>
  );
};

export default Item;
