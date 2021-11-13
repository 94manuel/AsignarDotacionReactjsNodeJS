import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import reducer from './reductores'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import Inicio from './componentes/inicio/inicio';


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoLogin:false
    };
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Container>    
            <Inicio/>
          </Container>
        </div>
      </Provider>
      
    );
  }
}

export default App;
