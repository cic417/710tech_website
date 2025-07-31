function Card(props) {
  return (
    <div
      className="card"
      style={{
        maxWidth: "350px",
        margin: "2rem auto",
        borderRadius: "16px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        background: "#fff",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <img
        alt="card-img"
        src={props.img}
        className="img-fluid"
        style={{
          borderRadius: "12px",
          width: "100%",
          maxHeight: "180px",
          objectFit: "cover",
          marginBottom: "1.5rem",
        }}
      />
      <h3
        className="card-title"
        style={{
          color: "#10b981",
          fontWeight: "700",
          fontSize: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        {props.title}
      </h3>
      <p
        className="card-text"
        style={{
          color: "#222",
          fontSize: "1rem",
          lineHeight: "1.6",
        }}
      >
        {props.text}
      </p>
    </div>
  );
}
export default Card;