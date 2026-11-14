function Header() {
  return (
    <>
      <Header
        style={{
          backgrounColor: "Darkblue",
          color: "White",
          height: "60px",
          width: "100px",
          textAlign: "center",
          borderRadius: "12px",
        }}
      ></Header>
      <h1>Shop your essential</h1>
      <p>Explor every day Tech</p>
      <Header />
    </>
  );
}
export default Header;
