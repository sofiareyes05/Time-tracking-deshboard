export const User = ({ nombre, horas, anterior, color }) => {
  return (
    <div className={`card-container ${color}`}>
      {/* Este div servirá para mostrar el icono decorativo de fondo */}
      <div className="icon-background"></div>
      
      <div className="card-content">
        <div className="card-header">
          <span className="title">{nombre}</span>
          <button className="dots-btn">...</button>
        </div>
        <div className="card-body">
          <h2 className="current-hours">{horas}</h2>
          <p className="previous-stats">Last Week - {anterior}</p>
        </div>
      </div>
    </div>
  );
};