import React from 'react'
import {graphql} from 'react-apollo'
import {UserQuery} from '../../../graphql/queries'
import {UpdateCalendars} from '../../../graphql/mutations'
class InsertNewEvents extends React.Component{
  constructor(props){
    super(props)
    let studentId = props.studentId;    //
     this.state = {studentId}
     this.onClickHandler =this.onClickHandler.bind(this)
  }
  onClickHandler(event){
    this.props.mutate({variables:{studentId:this.state.studentId},
    refetchQueries:[{query:UserQuery,
    variables:{studentID:this.state.studentId}}]}).then((data)=>console.log(data))
  }
  render(){
    if(!this.props.data.loading){
      return(
        <section className="section-block" id="setting-event">
          <h1>Welcome, <span>{this.props.data.user.studentName}</span> </h1>
          <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </article>
          <h6>Hubro updated this calendar on: {this.props.data.user.updatedCalendars}</h6>
          <button onClick={this.onClickHandler}> Klikk på meg</button>
        </section>
      )
    }
    return(
      <section className="section-block" id="setting-event">

      </section>
    )
  }
}
InsertNewEvents = graphql(UpdateCalendars)(InsertNewEvents)
export default graphql(UserQuery,{
  options: (props) => { return { variables: { studentID: props.studentId } } }
})(InsertNewEvents)
