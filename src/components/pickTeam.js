import React from 'react';
import _ from 'lodash';

const PickTeam = React.createClass({
  getInitialState(){
    return{
      teamsize: 1,
      teams: []
    }
  },
  pickTeam(){
    let students = this.props.students;
    let teamName = _.chunk(_.shuffle(students), this.state.teamsize);
    let teams = teamName.map((team, index)=>{
      let ul = <ul key={index}>
      <h3> Team {index + 1}</h3>
      {
        team.map(student =>{
          return <li key ={student.id}>{student.name}</li>
        })
      }
      </ul>
      return ul
    });
    this.setState({teams: teams});
  },
  onInputChange(event){
    this.setState({teamsize: event.target.value})
  },
  render(){
    return(
      <div>
        <input type="text" value={this.state.timesize} onChange={this.onInputChange}/>
        <button className='btn btn-success' onClick={this.pickTeam}>Pick</button>
        <div><TeamList teamNames={this.state.teams}/></div> 
      </div>
    )
  }
});

const TeamList = React.createClass({
  render(){
    let teamNames = this.props.teamNames;
    return(
      <div>
        {teamNames}
      </div>
    )
  }
});

export default PickTeam;
