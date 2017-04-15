import React from 'react'
import {graphql} from 'react-apollo'
import {updateTypeSettings} from '../../../graphql/mutations'
import {getSettings} from '../../../graphql/queries'
import _ from 'lodash'
import Toggle from 'material-ui/Toggle';

 class Lines extends React.Component{
   constructor(props){
     super(props)
      let array = []
      let studentID = ''
      _.forEach(props.settings, (set)=>{
        studentID = set.studentID
          let settings = {
            name: set.name,
            settingsID: set.settingsID,
            value : set.value
          }
          array.push(settings)
      })
      this.state = {studentID, settings:array}
      this.renderList = this.renderList.bind(this)
      this.handleChange = this.handleChange.bind(this)
   }

   componentWillReceiveProps(nextProps){
     let array = []
     let studentID = ''
     _.forEach(nextProps.settings, (set)=>{
       studentID = set.studentID
         let settings = {
           name: set.name,
           settingsID: set.settingsID,
           value : set.value
         }
         array.push(settings)
     })
     this.setState({studentID, settings:array})
   }
   handleChange(event, isInputChecked){
     let settingsName = event.target.name
     let settingsId = event.target.id
     let settingsValue = isInputChecked

    this.props.mutate({
          variables: { studentId: this.state.studentID , settingsId, settingsName, settingsValue},
          refetchQueries:[{query:getSettings,
          variables:{studentId:this.state.studentID}}]
        }).then(({data})=>console.log(data)).catch(err => console.log('err'))

   }
   renderList(){
     return(
       this.state.settings.map((element)=>{
         return(
           <tr key={element.name}>
           <td>
             {element.name}
           </td>
           <td className="toggle-td">
             <Toggle
               id={element.settingsID}
               name={element.name}
               toggled={element.value}
               onToggle={this.handleChange}
               className="settings-toggle-type"/>
           </td>

           </tr>
         )
       })
     )

   }

    render(){
      return(
        <table >

        <tbody>
        {this.renderList()}
      </tbody>
    </table>
      )
    }
  }



  export default graphql(updateTypeSettings)(Lines)
