import { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { company, position, tasks, duration } = this.props

    return ( 
      <>
      <label>Company: 
        <input type="text"
               id="company"
               onChange={company}/>
      </label>

      <label htmlFor="">Position:
        <input type="text" 
               id="position" 
               onChange={position}/>
      </label>

      <label>Tasks:
        <input type="text" 
               id="tasks" 
               onChange={tasks}/>
      </label>

      <label htmlFor="">Duration (Year/Months):
        <input type="text"
               id="duration"
               onChange={duration} />
      </label>
      </>
    )
  }


}

export default Experience