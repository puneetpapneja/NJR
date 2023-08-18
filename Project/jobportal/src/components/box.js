function Box(props) {
  return (
    <>
      <div
        className="boxes"
        style={{
          backgroundColor: props.backgroundColor, // Use the value passed via props
        }}
      >
        <h1>{props.title}</h1>
        <h3> {props.content}</h3>
      </div>
    </>
  );
}
export default Box;
