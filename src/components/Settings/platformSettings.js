import React from 'react'
import {gql, graphql} from 'react-apollo'
import  {Table, TR, TD, TH, DIV, TITLE, Input, Outertable} from './utils'
import settingsQuery from './importSettings'
import Toggle from './ToggleButton'
export class PlatformSettings extends React.Component{
constructor(props){
  super(props)
}


componentWillMount(){
  console.log('mount');
}
    render(){
      return(

          <Table>
              <TH>
                Platforms to import
              </TH>
              <TR>

          <TD>
            It's learning
          </TD>
          <TD>
            <Toggle checked ={this.props.studenSetting.itlearning}/>
          </TD>
        </TR>
          </Table>
      )
    }
  }

//TODO lag en måte å oppdatere et fag 
