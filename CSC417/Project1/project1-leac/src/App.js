import React from 'react';

class ClassCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ClassRow extends React.Component {
  render() {
    const classInfo = this.props.class;
    const title = classInfo.took ?
      classInfo.title :
      <span style={{color: 'red'}}>
        {classInfo.title}
      </span>;

    return (
      <tr>
        <td>{classInfo.id}</td>
        <td>{title}</td>
        <td>{classInfo.grade}</td>
        <td>{classInfo.took ? "yes" : "no"}</td>
      </tr>
    );
  }
}

class ClassTable extends React.Component {
  render() {
    const filterText = this.props.filterText;

    const rows = [];
    let lastCategory = null;

    //The code below displays all rows when 'all' is typed
    if(filterText === 'all'){
      this.props.classes.forEach((classInfo) => {
        if (classInfo.category !== lastCategory) {
          rows.push(
            <ClassCategoryRow
              category={classInfo.category}
              key={classInfo.category} />
          );
          lastCategory = classInfo.category;
        }
        rows.push(
          <ClassRow
            class={classInfo}
            key={classInfo.id}
          />
        );
        lastCategory = classInfo.category;
      });
    }

    //This code filters search by letter grade
    this.props.classes.forEach((classInfo) => 
    {
      if(classInfo.grade.indexOf(filterText) === -1){
        return;
      }
      if(filterText === ''){
        return;
      }
      
      if (classInfo.category !== lastCategory) {
        rows.push(
          <ClassCategoryRow
            category={classInfo.category}
            key={classInfo.category} />
        );
        lastCategory = classInfo.category;
      }
      rows.push(
        <ClassRow
          class={classInfo}
          key={classInfo.id}
        />
      );
      lastCategory = classInfo.category;
    });

    return (
      <table width = "100%">
        <thead className="bg-info text-white text-left p-2 m-1">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Grade</th>
            <th>Took?</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );


  }
}

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e){
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <div className="bg-primary text-white text-center p-2 m-1">
          Enter a letter grade:
          <input type="text"
          placeholder="Enter A-D or all"
          value = {this.props.filterText}
          onChange = {this.handleFilterTextChange}/>

        </div>
      </form>
    );
  }
}


class FilterableClassTable extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterText: '',
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }


  handleFilterTextChange(filterText){
    this.setState({
      filterText: filterText
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText = {this.state.filterText}
          onFilterTextChange = {this.handleFilterTextChange}/>
        <ClassTable
          classes={this.props.classes}
          filterText = {this.state.filterText}/>
      </div>
    );
  }
}

function App(props) {
  return (
    <FilterableClassTable classes={CLASSES}/>
  )
}


const CLASSES = [
  {id: 1, title: 'CSC141', grade: 'A', took: true},
  {id: 2, title: 'CSC240', grade: 'A', took: true},
  {id: 3, title: 'CSC142', grade: 'B', took: true},
  {id: 4, title: 'CSC241', grade: 'A', took: false},
  {id: 5, title: 'ESS101', grade: '', took: false},
  {id: 6, title: 'ENG368', grade: 'C', took: true},
  {id: 7, title: 'BIO110', grade: '', took: true}
]

export default App;