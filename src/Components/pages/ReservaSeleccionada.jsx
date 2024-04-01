const ReservaSeleccionada = ({ id }) => {
    const [publicacion, setPublicacion] = useState(null);
  
    useEffect(() => {
      const fetchPublicacion = async () => {
        try {
          const response = await fetch(`http://tu-api.com/publicaciones/${id}`);
          if (response.ok) {
            const data = await response.json();
            setPublicacion(data);
          } else {
            console.error('Error al obtener la publicación');
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
      };
  
      fetchPublicacion();
    }, [id]);
  
    return (
      <div>
        <h2 className="text-center font-bold text-2xl underline mb-4">Reserva Seleccionada</h2>
        {publicacion ? (
          <PublicacionCard publicacion={publicacion} />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  };
  
  export default ReservaSeleccionada;