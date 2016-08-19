import React from 'react';
import uuid from 'uuid';
import PickOne from './pickOne';
import PickTeam from './pickTeam';

const NewStudent = React.createClass({
  getInitialState(){
    return{
      name:''
    }
  },
  addAStudent(){
    let name = this.state.name.split(',');
    this.props.addStudent(name);
    this.setState({name:''});
  },
  onInputChange(event){
    this.setState({name: event.target.value})
  },
  render(){
    return (
      <div>
        <h1>Student Names</h1>
          <input type="text" id="inputText" value={this.state.name} onChange={this.onInputChange}/>
          <button className='btn btn-primary' onClick={this.addAStudent}>Add</button>
      </div>
    )
  }
})

// const Shuffle = React.createClass({
//   getInitialState: function(){
//     try{
//       var students = JSON.parse(localStorage.students)
//     }catch(err){
//       var students =[];
//     }
//     return {students};
//   },
//   componentDidUpdate(){
//     localStorage.students = JSON.stringify(this.state.students);
//   },
//   studentShuffle: function(){
//     let currentIndex = students.length;
//     let temporaryValue, randomIndex;

//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {

//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;

//       // And swap it with the current element.
//       temporaryValue = students[currentIndex];
//       students[currentIndex] = students[randomIndex];
//       students[randomIndex] = temporaryValue;
//     };
//     this.setState({studentsList : this.students})
//   },
//   render: function(){
//     return (
//       <div>
//         <StudentList students ={this.state.studentsList}/>
//       </div>
//     )
//   }
// })

const Student = React.createClass({
  render(){
    return (<li key={this.props.id}>{this.props.name}</li>)
  }
})

const StudentList = React.createClass({
  render(){
    let students = this.props.students.map(student=>{
      return <Student key={student.id} name={student.name} id={student.id}/>
    });
    return(
      <ul>
        {students}
      </ul>
    )
  }
})

const StudentBoard = React.createClass({
  getInitialState(){
    try{
      var students = JSON.parse(localStorage.students)
    }catch(err){
      var students =[];
    }
    return {students};
  },
  componentDidUpdate(){
    localStorage.students = JSON.stringify(this.state.students);
  },
  addStudent(name){
    let studentNew = name.map(studentName=>{
      let student ={};
      student.name = studentName;
      student.id = uuid();
      return student;
    });
    this.setState({
      students: this.state.students.concat(studentNew)
    })
  },
  render(){
    return(
      <div>
        <NewStudent addStudent={this.addStudent} />
        <StudentList students ={this.state.students} />
        <PickOne students = {this.state.students} />
        <PickTeam students = {this.state.students} />
      </div>
    )
  }
})

const AddStudents = React.createClass({
  render(){
    return(
      <StudentBoard />
    )
  }
});


export default AddStudents;
