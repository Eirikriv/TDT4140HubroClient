import React from 'react'
import {graphql} from 'react-apollo'

import {getSettings} from '../../../graphql/queries'
import Courses from './courseSettings'
import Lines from './typesSettings'
import CircularProgress from 'material-ui/CircularProgress';

class ImportSettings extends React.Component{
  constructor(props){
    super(props)
    this.state = {studentId:props.studentId}
  }

componentWillReceiveProps(nextprops){

}
    render(){
      if(!this.props.data.loading){
          return(
              <section className="section-block" id="section-settings-import">
                <h1>Import settings</h1>
              <Lines settings={this.props.data.user.studentSettings}/>
              <Courses courses={this.props.data.user.courseSelected} studentId={this.state.studentId}/>
              </section>
            )
          }
          return(
            <section className="section-block" id="section-settings-import">
              <h1>Import settings</h1>
              <CircularProgress size={100} thickness={5} className="progress-mui"/>
            </section>
          )
    }
  }


export default graphql(getSettings,{
  options: ({ studentId }) => ({ variables: { studentId } }),
})(ImportSettings)
