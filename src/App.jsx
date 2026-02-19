import './App.css'
import { User } from './components/user'

export const App = () => {
  return (
    <div className="dashboard"> 
      {/* Tarjeta de Perfil (Jeremy) */}
      <div className="profile-card">
        <div className="profile-top">
          <img src="./public/images.png" alt="Jeremy" className="avatar" />
          <div className="profile-text">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>
        <div className="profile-menu">
          <button>Daily</button>
          <button className="active">Weekly</button>
          <button>Monthly</button>
        </div>
      </div>

      {/* Bloque de Actividades */}
      <User nombre="Work" horas="32hrs" anterior="36hrs" color="work" />
      <User nombre="Play" horas="10hrs" anterior="8hrs" color="play" />
      <User nombre="Study" horas="4hrs" anterior="7hrs" color="study" />
      <User nombre="Exercise" horas="4hrs" anterior="5hrs" color="exercise" />
      <User nombre="Social" horas="5hrs" anterior="10hrs" color="social" />
      <User nombre="Self Care" horas="2hrs" anterior="2hrs" color="self-care" />
    </div>
  )
}