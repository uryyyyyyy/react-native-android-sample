import * as React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {CounterState} from './module';
import {ActionDispatcher} from './Container';

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

interface Props {
  value: CounterState;
  actions: ActionDispatcher;
}

export class Counter extends React.Component<Props, {}> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Point: ${this.props.value.num}`}
        </Text>
        <Button
          onPress={() => this.props.actions.increment(3)}
          title="Increment"
        />
        <Button
          onPress={() => this.props.actions.decrement(2)}
          title="Decrement"
        />
      </View>
    );
  }
}

