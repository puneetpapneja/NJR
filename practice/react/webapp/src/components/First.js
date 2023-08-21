import "./First.css";
const First = (props) => {
  const { list: First } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {First?.map((First) => (
            <tr>
              <td>{First.First}</td>
              <td>{First.brand}</td>
              <td>{First.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default First;