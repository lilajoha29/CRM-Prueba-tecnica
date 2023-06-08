import './App.css';
import { useState } from 'react';


function App() {

  const clientes = [
    { id: 1, nombres: "Juan Dario", apellidos: "Castellanos Arias", telefono: 3253628596, direccion: "calle 50 # 23 90", fecha: "2022-07-25" },
    { id: 2, nombres: "Manuel Ricardo", apellidos: "Marciales Lopez", telefono: 3112334455, direccion: "carrera 12 # 34 45", fecha: "2022-02-15" },
    { id: 3, nombres: "Maria Fernanda", apellidos: "Rodriguez Peña", telefono: 3515129586, direccion: "calle 24 # 62 52", fecha: "2022-06-04" },
    { id: 4, nombres: "Liz Gabriela", apellidos: "Gonzalez Forero", telefono: 3568567854, direccion: "carrera 45 # 53 56", fecha: "2022-08-10" },
    { id: 5, nombres: "Sebastian", apellidos: "Forero Martinez", telefono: 3652896754, direccion: "carrers 52 # 52 23", fecha: "2022-09-14" },
    { id: 6, nombres: "Daniela Alexandra", apellidos: "Ortiz Caceres", telefono: 3125468759, direccion: "calle 35 # 63 74", fecha: "2022-03-30" },
    { id: 7, nombres: "Ramiro", apellidos: "Martinez Orjuela", telefono: 3215848695, direccion: "calle 53 # 85 96", fecha: "2022-01-17" }
  ]

  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [fechasFiltradas, setFechasFiltradas] = useState([]);
  const [nombreCliente, setNombreCliente] = useState("");
  const [nombreFiltrado, setNombreFiltrado] = useState([]);

  const handleChangeFechaInicio = (event) => {
    setFechaInicio(event.target.value);
  };

  const handleChangetFechaFin = (event) => {
    setFechaFin(event.target.value);
  };
  const handleChangeNombreCliente = (event) => {
    setNombreCliente(event.target.value);
  };

  const [habilitar, setHabilitar] = useState(true);

  const handleClick = () => {
    setHabilitar(false);

    const fechasFiltradas = clientes.filter((clientes) => {
      return clientes.fecha >= fechaInicio && clientes.fecha <= fechaFin;
    });
    setFechasFiltradas(fechasFiltradas);

    const nombreFiltrado = clientes.filter((clientes) => {
      return clientes.nombres === nombreCliente;
    });
    setNombreFiltrado(nombreFiltrado);
  };


  return (
    <div className="App">
      <h1 className='titulo'>Lista de Clientes - CRM</h1>
      <div>
        <table className='tabla'>
          <thead className='cabecera'>
            <tr>
              <th className='cabecera'>Nombres</th>
              <th className='cabecera'>Apellidos</th>
              <th className='cabecera'>Teléfono</th>
              <th className='cabecera'>Dirección</th>
              <th className='cabecera'>Fecha de inscripción</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td className='contenido'>{cliente.nombres}</td>
                <td className='contenido'>{cliente.apellidos}</td>
                <td className='contenido'>{cliente.telefono}</td>
                <td className='contenido'>{cliente.direccion}</td>
                <td className='contenido'>{cliente.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p>Buscar por:</p>
          <div className='fecha'>
            <div className='filtro'>
              <label>Fecha inicio</label>
              <input type='date' value={fechaInicio} onChange={handleChangeFechaInicio}></input>
            </div>
            <div className='filtro'>
              <label>Fecha fin</label>
              <input type='date' value={fechaFin} onChange={handleChangetFechaFin}></input>
            </div>
          </div>
          <div className='filtro'>
            <label>Nombre</label>
            <input value={nombreCliente} onChange={handleChangeNombreCliente}></input>
          </div>
        </div>
        <button onClick={handleClick} disabled={!habilitar}> Buscar </button>
        <div className='fechasFiltrada'>
          <table className='tabla'>
            {fechasFiltradas.map((cliente) => (
              <tr key={cliente.id}>
                <td className='contenido'>{cliente.nombres}</td>
                <td className='contenido'>{cliente.apellidos}</td>
                <td className='contenido'>{cliente.telefono}</td>
                <td className='contenido'>{cliente.direccion}</td>
                <td className='contenido'>{cliente.fecha}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className='nombreFiltrado'>
          <table className='tabla'>
            {nombreFiltrado.map((cliente) => (
              <tr key={cliente.id}>
                <td className='contenido'>{cliente.nombres}</td>
                <td className='contenido'>{cliente.apellidos}</td>
                <td className='contenido'>{cliente.telefono}</td>
                <td className='contenido'>{cliente.direccion}</td>
                <td className='contenido'>{cliente.fecha}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
