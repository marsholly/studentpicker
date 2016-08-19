import React from 'react';

const PickOne = React.createClass({
  getInitialState(){
    return {
      studentName: ''
    }
  },
  pickStudent(){
    let student = this.props.students;
    let index = Math.floor(Math.random()*student.length);
    let pick_student = student[index].name;
    this.setState({studentName: pick_student})
  },
  render(){
    return(
      <div>
        <button className='btn btn-danger' onClick={this.pickStudent}>Pick</button>
        <div>The Lucky One: {this.state.studentName}</div>
      </div>
    )
  }
});

export default PickOne;
