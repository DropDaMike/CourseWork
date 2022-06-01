import React, { Component } from "react";
import TableRow from "./TableRow";

export  class CourseTable extends Component {
  
  render() {
    const name = this.props.name;
    const credit = this.props.credit;

    const writingCourses = this.props.writingCourses;
    const speakingCourses = this.props.speakingCourses;
    
    

    const writingRows = [];
    const speakingRows = [];

    console.log("--- CourseTable ---");
    console.log ("Name:" + name);
    console.log ("Credit:" + credit);
    writingCourses.forEach((c) => {
      console.log("Received a course: " + c.id + " "+ c.prefix + " "+ c.number);

      if (c.id === 1) {
        console.log("--course 1 " + c.course);
        writingRows.push(
          <TableRow
            course={c}
            key={c.id} 
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 2 && credit < 71 ) {
        console.log("--course 2 " + c.course);
        writingRows.push(
          <TableRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 3 && credit < 41) {
        console.log("--course 3 " + c.course);
        writingRows.push(
          <TableRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
        
    });

    speakingCourses.forEach((c) => {
      console.log("Received a WRITING course: " + c.id + " "+ c.prefix + " "+ c.number);

      
      
      if (c.id === 1) {
        console.log("--course 1 " + c.course);
        speakingRows.push(
          <TableRow
            course={c}
            key={c.id} 
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 2 && credit < 71 ) {
        console.log("--course 2 " + c.course);
        speakingRows.push(
          <TableRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
      if (c.id === 3 && credit < 41) {
        console.log("--course 3 " + c.course);
        speakingRows.push(
          <TableRow
            course={c}
            key={c.id}
            editCallback= { this.props.editCallback }
          />
        );
      }
        
    });
   
    console.log({name});
    console.log({credit});
    return (
      <table className="table table-sm table-striped table-bordered">
        <thead>
          <tr>
            <th colSpan="7" className="bg-primary text-white text-center h4 p-2">
              Writing Emphasis for {name}
            </th>
          </tr> 
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
            <th>Editing</th>
          </tr>
        </thead>
        <tbody>{writingRows}</tbody>

        <thead>
        <tr>
            <th colSpan="7" className="bg-primary text-white text-center h4 p-2">
              Speaking Emphasis for {name}
            </th>
          </tr> 
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Semester</th>
            <th>Prefix</th>
            <th>Number</th>
            <th>Grade</th>
            <th>Editing</th>
          </tr>
        </thead>
        <tbody>{speakingRows}</tbody>
      </table>

    );
  }
}