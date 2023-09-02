import React, {useState} from 'react';
import axios from 'axios';

const Contacto = (props) =>{ 

const initialForm = {
  nombre: '',
  apellido: '',
  email: ''
}
 
const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);

const handleChange = e => {
  const {name, value} = e.target;
  setFormData(oldData=>({
    ...oldData,
    [name]: value
  }));
}

const handleSubmit = async e => {
  e.preventDefault();
  setMsg('');
  setSending(true)
  const response = await axios.post('http://localhost:3000/api/contacto', formData);
  setSending(false);
  setMsg(response.data.message);
  if( response.data.error === false) {
    setFormData(initialForm)
  }
}


  return(  
   
  <div className='container'> 
  <form className='formulario' onSubmit={handleSubmit}>
  <p>
  <label> Nombre</label>
  <input type="text" name="nombre" value={formData.nombre}
  onChange={handleChange} />
  </p>
  <p>
    <label>Apellido</label>
    <input type='text' name='apellido' value={formData.apellido}
    onChange={handleChange} />
  </p>
  <p>
    <label> Email</label>
<input type="text" name ="email" value={formData.email}
onChange={handleChange} />
</p>
   {sending ? <p> Enviando...</p>:null}
   {msg ? <p> {msg}</p>: null}
   <p className="centrar"> <input type="submit" value="Enviar" />
   
   </p>
  
  </form>
    </div>
)

}

export default Contacto;