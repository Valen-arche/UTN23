import React,{useState, useEffect} from 'react';
import axios from 'axios';
import PrediccionItem from '../Componentes/predicciones/prediccionItem';


const Predicciones = (props)=> {

  const [loading, setLoading] = useState(false);
  const [predicciones, setPredicciones] = useState([]);

  useEffect(() =>{
    const cargarPredicciones = async () => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/predicciones');
      setPredicciones(response.data);
      setLoading(false);
    };
    cargarPredicciones();
  },[]);

  return (
    <section className='holder'>
      <h1> Predicciones </h1>
      {loading ? (
        <p>Cargando...</p>
      ):(
        predicciones.map(item => <PrediccionItem key={item.id}
          user={item.user} body={item.body} />)
      )}
    </section>
    
  );
}

export default Predicciones;