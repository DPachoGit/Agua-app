import '../styles/background.css'; // Asegúrate de crear un archivo de estilo Background.css para personalizar el fondo y los estilos

function Background() {
  return (
    <div className="background">
      {/* Logo */}
      <img src="logo.png" alt="Logo" className="logo" />

      {/* Fondo */}
      <img src="header.png" alt="Fondo" className="background-image" />

    </div>
  );
}

export default Background;