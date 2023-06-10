import { Component } from 'react'
import GeneralInfo from './components/GenInfo'
import Education from './components/Education'
import Preview from './Preview'
import Experience from './components/WorkExp'
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
      },

      work: {
        company: '',
        position: '',
        tasks: '',
        duration: '',
      }
    }
  }

  // GenInfo events
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

  // Education events

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

  // Work events

  handleCompany = (e) => {
    this.setState({
      company: e.target.value
    })
  }

  handlePosition = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  handleTasks = (e) => {
    this.setState({
      tasks: e.target.value
    })
  }

  handleDuration = (e) => {
    this.setState({
      duration: e.target.value
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

          <h1> Work Experience </h1>
            <Experience company={this.handleCompany}
                        position={this.handlePosition}
                        tasks={this.handleTasks}
                        duration={this.handleDuration}/>

        </form>

        <Preview 
            name={this.state.name}
            email={this.state.email}
            number={this.state.number}
            school={this.state.schoolName}
            course={this.state.course}
            year={this.state.year}
            company={this.state.company}
            position={this.state.position}
            tasks={this.state.tasks}
            duration={this.state.duration}
            />
      </div>
      
    )
  }
}

export default App
