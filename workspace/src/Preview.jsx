import { Component } from "react";

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
        <section>
          <p>Name: { name }</p>
          <p>Email: { email } </p>
          <p>Phone Number: { number }</p>
        </section>

        <section>
          <p>School: { school } </p>
          <p>Course: { course }</p>
          <p>Last year attended: { year }</p>
        </section>

        <section>
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