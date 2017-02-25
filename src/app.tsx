import * as React from 'react';
import Counter from './counter/Container';
import {Provider} from 'react-redux';
import store from "./Store";

export class App extends React.Component<{}, {}> {

  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

