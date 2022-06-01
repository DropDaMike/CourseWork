import React, { Component } from "react";
import { TableEditor } from "./TableEditor";
import { CourseTable } from "./CourseTable";

export default class TableViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEditor: false,
            selectedCourse: null
        }
    }

    startEditing = (course) => {
        this.setState({ showEditor: true, selectedCourse: course })
    }

    createCourse = () => {
        this.setState({ showEditor: true, selectedCourse: {} })
    }

    cancelEditing = () => {
        this.setState({ showEditor: false, selectedCourse: null })
    }

    saveCourse = (course) => {
        this.props.saveCallback(course);
        this.setState({ showEditor: false, selectedCourse: null })        
    }

    render() {
        if (this.state.showEditor) {
            return <TableEditor 
                key={ this.state.selectedCourse.id || -1 }
                course={ this.state.selectedCourse } 
                saveCallback={ this.saveCourse }
                cancelCallback={ this.cancelEditing } />
        } else {
            console.log("-- in CourseDisplay --");
            return <div className="m-2">
                <CourseTable 
                    name = { this.props.name }
                    speakingCourses = {this.props.speakingCourses }
                    writingCourses={ this.props.writingCourses }
                    credit = { this.props.credit }
                    editCallback={ this.startEditing }
                    deleteCallback={ this.props.deleteCallback } />                     
            </div>

            
        }
    }
}