import { Component } from "react";

class Preview extends Component { 
  constructor(props) {
    super(props)
  }

  render() {
    const { name, email, number, school, course, year } = this.props
   

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
      </>
    )
  }
}

export default Preview