import React from 'react';
import PreView from './Preview';
import FormWrapper from './FormWrapper.jsx';

const style = Object.assign({},{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  height: '100%'
});

const View = React.createClass({
  getInitialState() {
    return {
      changedValue: "",
      text: "",
      name: "",
      to: "",
      cc: "",
      division: "",
      ids: [ {id: '', password: "", content: "", index: 0}],
      game: ""
    };
  },
  changeText(changeset) {
    switch(changeset.key) {
    case 'name':
      this.setState({name: changeset.value, changedValue: changeset.key});
      break;
    case 'to':
      this.setState({to: changeset.value, changedValue: changeset.key});
      break;
    case 'cc':
      this.setState({cc: changeset.value, changedValue: changeset.key});
      break;
    case 'game':
      this.setState({game: changeset.value, changedValue: changeset.key});
      break;
    case 'division':
      this.setState({division: changeset.value, changedValue: changeset.key});
      break;
    case 'ids':
      this.setState({ids: changeset.value, changedValue: changeset.key});
      break;
    }
  },
  render() {
    return(
      <div style={style}>
	<FormWrapper
           onChange={this.changeText}
           name={this.state.name}
           to={this.state.to}
           cc={this.state.cc}
           game={this.state.game}
           division={this.state.division}
           />
        <PreView
           name={this.state.name}
           to={this.state.to}
           cc={this.state.cc}
           game={this.state.game}
           division={this.state.division}
           ids={this.state.ids}
           changedValue={this.state.changedValue}
           />
      </div>
    );
  }
});

export default View;
