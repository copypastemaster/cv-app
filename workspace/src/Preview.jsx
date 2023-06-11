import { Component } from "react";
import './styles/preview.css'


class Preview extends Component { 
  constructor(props) {
    super(props)
  }

  render() {
    const { name, email, number } = this.props
    const { school, course, year } = this.props
    const { company, position, tasks, duration } = this.props
   

    return (
      <>
        <section id="section1">
          <p>Name: { name }</p>
          <p>Email: { email } </p>
          <p>Phone Number: { number }</p>
        </section>

        <section id="section2">
          <p>School: { school } </p>
          <p>Course: { course }</p>
          <p>Last year attended: { year }</p>
        </section>

        <section id="section3">
          <p>Company: { company }</p>
          <p>Position: { position }</p>
          <p>Main tasks: { tasks }</p>
          <p>Duration: { duration }</p>
        </section>
      </>
    )
  }
}

export default Preview