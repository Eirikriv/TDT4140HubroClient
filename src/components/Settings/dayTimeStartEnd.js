import React from 'react'
import styled from 'styled-components'
import {compose, graphql} from 'react-apollo'
import {updateTimeEnd, updateTimeStart} from '../../graphql/mutations'
import _ from 'lodash'
class DayTimeStartEnd extends React.Component{
  constructor(props){
    super(props)
    let start = _.split(props.start, ':', 3)
    let end = _.split(props.end, ':', 3)
    start = `${start[0]}:${start[1]}`
    end = `${end[0]}:${end[1]}`
    this.state = {start, end,prevStart:start, prevEnd:end, studentId:props.studentId, settingsId:props.settingsId }
    this.handleChange = this.handleChange.bind(this)
    this.handleKey = this.handleKey.bind(this)
  }

  handleKey(event){
    if (event.target.name == "start"){
    if ((this.state.start != this.state.prevStart) && (event.target.value.length == 5)){

      this.props.newStartTime({
        variables:{studentId:this.state.studentId, settingsId:this.state.settingsId, start:`${this.state.start}:00`}
      }).then(({data})=>{
        let start = data.updateStartTime.start
        start = _.split(start, ':', 3)
        start = `${start[0]}:${start[1]}`
        this.setState({start:start, prevStart:start})
      })
    }
  }else if (event.target.name == "end") {
    if ((this.state.end != this.state.prevEnd) && (event.target.value.length == 5)){
      this.props.newEndTime({
        variables:{studentId:this.state.studentId, settingsId:this.state.settingsId, end:`${this.state.end}:00`}
      }).then(({data})=>{
        let end = data.updateEndTime.end
        end = _.split(end, ':', 3)
        end = `${end[0]}:${end[1]}`
        this.setState({end:end, prevEnd:end})
      })
    }
  }

  }
handleChange(event){
  if(event.target.value.length <= 5){
    let re =''
    let change = false
    let len = event.target.value.length
    switch (len) {
      case 0:
        change = true
        break;
      case 1:
        re = new RegExp('[0-2]')
        change = re.test(event.target.value)
        break;
        case 2:
          re = new RegExp('[0-2][0-9]')
          change = re.test(event.target.value)
          break;
        case 3:
        re = new RegExp('[0-2][0-9]\:')
        change = re.test(event.target.value)
          break;
          case 4:
            re = new RegExp('[0-2][0-9]\:[0-5]')
            change = re.test(event.target.value)
            break;
            case 5:
              re = new RegExp('[0-2][0-9]\:[0-5][0-9]')
              change = re.test(event.target.value)
              break;
      default:
      break;

    }
if(change){

  if(event.target.name == "start"){
    this.setState({start:event.target.value})
  }else{
    this.setState({end:event.target.value})
  }
}

}
}
    render(){
      return(
        <div>
        <h3>
          time settings
        </h3>
        <table>
          <tbody>
            <tr>
              <td>
                start
              </td>
              <td>
                <input type="text" value={this.state.start} name ="start" onChange={this.handleChange} onKeyUp={this.handleKey}/>

              </td>
            </tr>
            <tr>
              <td>
                end
              </td>
              <td>
                <input type="text" value={this.state.end} name="end" onChange={this.handleChange} onKeyUp={this.handleKey}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      )
    }
  }

  const withMutation = compose(
    graphql(updateTimeStart, {name:'newStartTime'}),
    graphql(updateTimeEnd, {name:'newEndTime'})
  )(DayTimeStartEnd)
export default withMutation
