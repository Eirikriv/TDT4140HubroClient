import {Link} from 'react-router'
import React from 'react'
import {SingleLinks} from './utils'


export default class PublicElements extends React.Component{
  constructor(props){
    super(props)
    this.state={loading:true}
  }
  render(){
    if(this.state.loading){
      return(
        <div>
          <SingleLinks>
            Blogg
          </SingleLinks>
        </div>
      )
    }
    return(
      <div>
      <Link to='/blogg'>
        <SingleLinks>
          Blogg
        </SingleLinks>
      </Link>
      </div>
    )
  }
}
