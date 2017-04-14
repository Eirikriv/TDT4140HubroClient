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
    this.handleLoad = this.handleLoad.bind(this)
  }

componentWillReceiveProps(nextProps){
}
  handleLoad(){
    if(!this.props.data.loading){

      return(<section className="section-settings-import">
        <Lines settings={this.props.data.user.studentSettings}/>
        <Courses courses={this.props.data.user.courseSelected} studentId={this.state.studentId}/>
      </section>
    )
  }else {
    return(
      <CircularProgress size={100} thickness={5} />
    )
  }
  }
    render(){

      return(
        <section className="section-block-settings-import">
          <h3>Import settings</h3>
          <h5>- What do you want to import?</h5>
          {this.handleLoad()}
      </section>
      )
    }
  }


export default graphql(getSettings,{
  options: ({ studentId }) => ({ variables: { studentId } }),
})(ImportSettings)
