import { Component } from 'react'
import GeneralInfo from './components/GenInfo'
import Education from './components/Education'
import Preview from './Preview'
import './styles/app.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      genInfo: {
        name: '',
        email: '',
        number: '',
      }, 

      school: {
        schoolName: '',
        course: '',
        year: '',
      }
    }
  }

  // GenInfo logics
  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleNumber = (e) => {
    this.setState({
      number: e.target.value
    })
  }

  handleSchool = (e) => {
    this.setState({
      schoolName: e.target.value
    })
  }

  handleCourse = (e) => {
    this.setState({
      course: e.target.value
    })
  }

  handleYear = (e) => {
    this.setState({
      year: new Date(e.target.value).toDateString()
    })
  }

  render() {
    return (
      <div id="mainContainer">
        <form id="form">
          <h1> General Info </h1>
          <GeneralInfo 
            name={this.handleName}
            email={this.handleEmail}
            number={this.handleNumber}
            />

          <h1> Education </h1>  
          <Education school={this.handleSchool}
                     course={this.handleCourse}
                     lastYear={this.handleYear}/>
        </form>

        <Preview 
            name={this.state.name}
            email={this.state.email}
            number={this.state.number}
            school={this.state.schoolName}
            course={this.state.course}
            year={this.state.year}
            />
      </div>
      
    )
  }
}

export default App
