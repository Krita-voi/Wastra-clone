function Card({ Cloth }) {
  return (
    <div className="cloth-card">
      <div className="cloth-poster">
        <img src={Cloth.link} alt={Cloth.name} />
      </div>
      <div className="cloth-info">
        <h3>{Cloth.name}</h3>
        <h3>
          <b>{Cloth.price}</b>
        </h3>
      </div>
    </div>
  );
}

export default Card;
