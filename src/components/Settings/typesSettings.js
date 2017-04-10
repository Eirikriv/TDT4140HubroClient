import React from 'react'
import {graphql} from 'react-apollo'
import {getSettings} from '../../graphql/queries'
import {updateTypeSettings} from '../../graphql/mutations'
import _ from 'lodash'
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
   handleChange(event){
     const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const id = event.target.id

    this.props.mutate({
          variables: { studentId: this.state.studentID , settingsId:event.target.name , settingsName:event.target.id, settingsValue:value}
        }).then(({data})=>{
        let prevStateSettings = this.state
        let updatedSettings = data.updateUserSettings
        prevStateSettings.settings.map((el)=>{
          if (el.name == id){
            el.value = updatedSettings.value

          }
          return el
        })

        this.setState({settings:prevStateSettings.settings})
      }
      )

   }
   renderList(){

     return(
       this.state.settings.map((element)=>{
         return(
           <tr key={element.name}>
           <td>
             {element.name}
           </td>
           <td>
             <input id={element.name} name={element.settingsID} type="checkbox" checked={element.value} onChange={this.handleChange}/>
           </td>

           </tr>
         )
       })
     )

   }
    render(){
      return(
        <table>
        <tbody>
        {this.renderList()}
        </tbody>
        </table>
      )
    }
  }



  export default graphql(updateTypeSettings)(Lines)
