import React, { Component } from 'react'
import styles from "../Components/button.module.css"
export class Body extends Component {
  constructor(props) {
    super(props)
    this.state = {
       style:"Main",
       textButton:"Change Style"
    }
    this.ChangeStyle=this.ChangeStyle.bind(this)
  }
  ChangeStyle(){
    this.setState({style:"theme",textButton:""})
  }
  render() {
    return (
      <div className={this.state.style} >
          <img className="img" alt="stock" src={this.props.url_image} height="250px" width={300} />
          <h1> {this.props.company} </h1>
          <ul>
  
              <li className="list">Market Cap : {this.props.marketCap}</li>
              <li className="list">Country : {this.props.country}</li>
              <li className="list">Ticker : {this.props.ticker}</li>
          </ul>
          <button className={styles.styleButton} style={{backgroundColor:"orange"}} onClick={this.ChangeStyle}>{this.state.textButton}</button>
      </div>
    )
  }
}
// onClick={()=>this.ChangeStyle()}
export default Body