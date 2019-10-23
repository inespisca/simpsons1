import React, {Component} from 'react';

class homerWorks extends Component {
    constructor(props)
      {super(props);
      this.state = {
      on: false
       };
    }

      homerWorks = () => {
        console.log('h');
      };
      render() {
    const light = homerWorks.props.on ? 'on': 'off';
    return (
      <div className="homerWorks">
        <button className={light}>{light.toUpperCase()}</button>
        <button onClick={this.handleClick} className={light}>{light.toUpperCase()}</button>
        <figure className={light} />
      </div>
    );
  }
}

export default homerWorks;

