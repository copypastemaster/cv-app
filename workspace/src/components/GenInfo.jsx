import { Component } from "react";


class GeneralInfo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, email, number, } = this.props

    return (
      <div >
        <label>Name:
          <input type="text" 
                 name="name"
                 onChange={name}
                 id="name" />
         </label>
         
         <label htmlFor="">Email:
          <input type="email"
                 id="email"
                 onChange={email} 
                  />
         </label>

         <label>Phone number:
            <input type="number" 
                   id="number"
                   onChange={number}
                   minLength={5}
                   maxLength={12}/>
         </label>
      </div>
    )
  }
}

export default GeneralInfo