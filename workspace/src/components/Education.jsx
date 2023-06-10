import { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const {school, course, lastYear} = this.props

    return (
      <>
        <label> Name of school:
          <input type="text"
                 id="school"
                 onChange={school}>
          </input>
        </label>

        <label> Course:
          <input type="text" 
                 id="course"
                 onChange={course}/>
        </label>

        <label>Last year attended:
          <input type="date"
                 id="year" 
                 onInput={lastYear}
                 />
        </label>
      </>
    )
  }
}

export default Education