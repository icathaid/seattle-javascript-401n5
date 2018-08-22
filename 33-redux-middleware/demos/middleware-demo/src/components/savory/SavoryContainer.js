import React from 'react';
import { connect } from 'react-redux';
import { addSavory } from '../../reducers/savory';

import SavoryForm from './SavoryForm';
import SavoryList from './SavoryList';

const SavoryContainer = (props) => {
  return (
    <section>
      <h2>Savory</h2>
      <SavoryForm buttonText="add savory" onComplete={props.addSavory} />
      <SavoryList savories={props.savories} />
    </section>
  );
};

const mapStateToProps = (state) => ({ savories : state.savoryState.savories });
const mapDispatchToProps = dispatch => {
  
  return {
    addSavory: savory => {
      const action = addSavory(savory);
      const cancel = dispatch(action);

      // what happens if line below is uncommented?
      // setTimeout(cancel, 1000);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavoryContainer);