function Side(props) {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "#151932",
        width: "20%",
        height: "400px",
        padding: "20px",
      }}
    >
      <p>Home</p>
      <p>
        Home {props.name}, {props.age}, {props.phone}
      </p>
      <p>About</p>
      <p>Contact</p>
    </div>
  );
}

export default Side;
