import React, { Component,Suspense  } from 'react';
import { Container,Button,Form,Table,Col,Row,Image } from 'react-bootstrap';
import { connect } from "react-redux";

class AgregarTrabajador extends Component {
  state = {
    nombres: "",
    correo: "",
    trabajadores:[],
    isLoaded: false
  }
  componentDidMount() {
    const { addUsuario,DeleteUsuario } =this.props;
    fetch("http://127.0.0.1:3001/allTrabajadores")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(result.length);
          DeleteUsuario([]);
          for (let index = 0; index < result.length; index++) {
            const element = result[index];
            addUsuario({id:result[index].id,nombres: result[index].nombres,
              correo: result[index].correo});
            
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
  }

  handleChange = (event) => {
    const { addUsuario } =this.props;
    this.setState({[event.target.name]: event.target.value})
    console.log(event.target.value);
  };
  handleSubmit = (event) => {
    const { addUsuario } =this.props;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombres: this.state.nombres,correo: this.state.correo })
  };
    fetch("http://127.0.0.1:3001/addTrabajadores",requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(result);
          addUsuario({id:result.id,nombres: result.nombres,
            correo: result.correo});
          
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

  selectUser = (valor)=> {
    const { estado,addAsignado } =this.props;
    estado(1);
    addAsignado(valor)
    console.log(valor);
  }
  render(){
    return (
      <div>
        <Container> 
          <div style={{padding:"5% 20% 5% 20%",border: '1px solid rgba(0, 0, 0, 0.05)'}}> 
            <Form>
              <Row>             
              <Col>
                <Form.Group className="mb-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                      required 
                      name="nombres"
                      type="text" 
                      placeholder="Nombre Completo" 
                      onChange={this.handleChange}
                      />
                  </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formcorreo">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control 
                    required 
                    name="correo"
                    type="email" 
                    placeholder="Enter email" 
                    onChange={this.handleChange}/>
                </Form.Group>
              </Col>
              </Row>
                <Button variant="primary" onClick={this.handleSubmit}>
                  Agregar
                </Button>
            </Form>   
          </div>      
          <Form>
            <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombres Trabajador</th>
                      <th>Email</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>                    
                    {this.props.Usuario.map((value, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{value.nombres}</td>
                        <td>{value.correo}</td>
                       <td>Table cell </td>
                        <td><Button onClick={()=>this.selectUser({value,index})}>asignar</Button></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
          </Form>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Usuario: state.usuario.usuario,
  Asignado: state.usuario.asignado,
})
const mapDispatchToProps = dispatch => {
  return {
    addempresa: (empresa) => dispatch({
                                type: 'ADD_TO_EMPRESA',
                                empresa:empresa
                              }),
    addUsuario: (usuario) => dispatch({
                                type: 'usuario',
                                usuario:usuario
                              }),
    DeleteUsuario: (usuario) => dispatch({
                               type: 'borrar_usuario',
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