import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

interface Props {}

interface State {
  point: number
}

export class App extends React.Component<Props, State> {

  constructor() {
    super();
    this.state = {
      point: 0
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Point: ${this.state.point}`}
        </Text>
        <Button
          onPress={() => this.setState({point: this.state.point + 3})}
          title="Increment"
        />
        <Button
          onPress={() => this.setState({point: this.state.point - 2})}
          title="Decrement"
        />
      </View>
    );
  }
}

