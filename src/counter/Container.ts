import {Counter} from './Counter';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import * as CounterModule from './module';

export class ActionDispatcher {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch
  }

  public increment(amount: number) {
    this.dispatch(CounterModule.increment(amount))
  }

  public decrement(amount: number) {
    this.dispatch(CounterModule.decrement(amount))
  }
}

function mapStateToProps(state: any){
  return {value: state.counter}
}

function mapDiptchToProps(dispatch: Dispatch<any>){
  return {actions: new ActionDispatcher(dispatch)}
}

export default connect(
  mapStateToProps,
  mapDiptchToProps
)(Counter);