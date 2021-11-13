import React, { Component,Suspense  } from 'react';
import { Container,Button,Form,Table,Col,Row,Image } from 'react-bootstrap';
import { connect } from "react-redux";

class AgregarTrabajador extends Component {
  state = {
    id:0,
    Nombres: "",
    email: "",
    codigo: "",
    fecha: "",
    sistemaOperativo:"",
    tipo:"",
    nombreProducto:""
  }
  componentWillMount(){
    const { addDotacion,Asignado,DeleteDotacion } =this.props;
    console.log(Asignado.value);
    this.setState({
      id:Asignado.value.id,
      Nombres:Asignado.value.nombres,
      email:Asignado.value.correo
    })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: Asignado.value.id})
  };
    fetch("http://127.0.0.1:3001/showDotacion",requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          console.log(result);
          DeleteDotacion([]);
          for (let index = 0; index < result.length; index++) {
            addDotacion({
              id:result[index].id,
              codigo: result[index].codigo,
              fecha: result[index].fecha,
              sistemaoperativo: result[index].sistemaoperativo,
              tipo: result[index].tipo,
              nombreproducto: result[index].nombreproducto,
            });}
          
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  handleSubmit = (event) => {
    const { addDotacion } =this.props;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id:this.state.id,
        codigo: this.state.codigo,
        fecha: this.state.fecha,
        sistemaoperativo: this.state.sistemaoperativo,
        tipo: this.state.tipo,
        nombreproducto: this.state.nombreproducto
      })
  };
    fetch("http://127.0.0.1:3001/addDotacion",requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(result);
          alert(result.mensaje);
          if (result.dotacion == null) {
            
          } else {
            addDotacion({id:result.dotacion.user_id,codigo: result.codigo,
              fecha: result.dotacion.fecha,
              sistemaoperativo: result.dotacion.sistemaoperativo,
              tipo: result.dotacion.tipo,
              nombreproducto: result.dotacion.nombreproducto,
            });
            
          }
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    console.log(event.target.value);
  };
  Eliminar = (event) => {
    console.log(event.value.id);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id :event.value.id,
      })
  };
    fetch("http://127.0.0.1:3001/DeleteDotacion",requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
          });
          console.log(result);
          
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  Regresar = (event) => {
    const { estado,addAsignado } =this.props;
    estado(0);
  }
  
  render(){
    return (
      <div className="login">
        <Container>          
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre Trabajador</Form.Label>
                    <Form.Control type="text" placeholder="Nombres" defaultValue={this.state.Nombres} disabled/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>email</Form.Label>
                  <Form.Control 
                  type="email" 
                  placeholder="Correo Electronico" 
                  defaultValue={this.state.email} 
                  disabled/>
                  </Form.Group>
                </Col>
                <Col xs={6} md={4}>
                  <Form.Group className="mb-3" controlId="formNombreProducto">
                      <Form.Label>Nombre Producto</Form.Label>
                      <Form.Control 
                      name="nombreproducto" 
                      type="text" 
                      placeholder="Nombre Producto"
                    onChange={this.handleChange}/>
                    </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4}>
                  <Form.Group className="mb-3" controlId="formCodigo">
                      <Form.Label>Codigo</Form.Label>
                      <Form.Control 
                      name="codigo" 
                      type="text" 
                      placeholder="Codigo"
                    onChange={this.handleChange}/>
                    </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formFecha">
                    <Form.Label>Fecha asignacion</Form.Label>
                    <Form.Control 
                    name="fecha" 
                    type="date" 
                    /*error={errors.date_of_birth} ref={register}*/
                    onChange={this.handleChange} />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formSistema">
                    <Form.Label>Sistema operativo</Form.Label>
                    <Form.Select
                    name="sistemaoperativo"
                    defaultValue="Escoger..."
                    onChange={this.handleChange}>
                      <option>Escoger</option>
                      <option>Windows</option>
                      <option>Linux</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group as={Col} controlId="formTipo">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control 
                    name="tipo" 
                    type="text"
                    onChange={this.handleChange}/>
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" onClick={this.Regresar}>
                Regresar
              </Button>
              <Button variant="primary" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
           
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre Dotacion</th>
                      <th>Codigo dotacion</th>
                      <th>Sistema operativo</th>
                      <th>Tipo</th>
                      <th>Fecha</th>
                      <th>Editar - Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.props.Dotacion.map((value, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{value.nombreproducto}</td>
                        <td>{value.codigo}</td>
                        <td>{value.sistemaoperativo}</td>
                        <td>{value.tipo}</td>
                        <td>{value.fecha}</td>
                        <td><Button onClick={()=>this.Eliminar({value,index})}>Eliminar</Button></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Usuario: state.usuario.usuario,
  Asignado: state.usuario.asignado,
  Dotacion: state.usuario.dotacion,
})
const mapDispatchToProps = dispatch => {
  return {
    addDotacion: (dotacion) => dispatch({
                                type: 'agregar_dotacion',
                                dotacion:dotacion
                              }),
    DeleteDotacion: (dotacion) => dispatch({
                                type: 'borrar_dotacion',
                                dotacion:dotacion
                              }),
    addUsuario: (usuario) => dispatch({
                                type: 'usuario',
                                usuario:usuario
                              }),
  
    addAsignado: (asignado) => dispatch({
                                type: 'asignado',
                                asignado:asignado
                              }),
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AgregarTrabajador)