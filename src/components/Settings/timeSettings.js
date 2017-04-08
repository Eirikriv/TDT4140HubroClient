import React from 'react'
import styled from 'styled-components'
import Outer from '../outerComponent'
import colors from '../../assets/colorSchema'
import Toggle from 'react-toggle'
const Table = styled.table`
text-align:left;
width:100%;
margin-left:30%;
`
const TR = styled.tr`
`
const TD = styled.td`
`
const TH = styled.th`
width:600px;
`

const DIV = styled.div`
width:100%;
height:7vh;
background-color:#e5e5e5;
`
const TITLE = styled.div`
font-size:25px;
text-align:center;
padding-top: 1vh;
`
const Input = styled.input`
type:text;
width:50px;
border-radius:5px;
height:20px;
border-style:solid;
boreder-width:1px;
border-color: ${colors.blue};
padding:5px;
text-align:center;
`

export default class Time extends React.Component{
    render(){
      return(
        <Outer>
          <DIV>
            <TITLE>
            Import Settings
          </TITLE>
          </DIV>
        <Table>
          <TH>
            Platforms to import
          </TH>
          <TR>
            <TD>
              It's learning
            </TD>
            <TD>
              <Toggle/>
            </TD>
          </TR>
          <TR>
            <TD>
              BlackBoard
            </TD>
            <TD>
              <Toggle/>
            </TD>
          </TR>
          <TR>

            <TD>
              Fronter
            </TD>
            <TD>
              <Toggle/>
            </TD>
          </TR>



          <TH>
            Courses to import
          </TH>
          <TR>
            <TD>
              TDT4140
            </TD>
            <TD>
              <Toggle/>
            </TD>
          </TR>
          <TR>
            <TD>
              TDT4140
            </TD>
            <TD>
              <Toggle/>
            </TD>
          </TR>
          <TR>

            <TD>
              TDT4140
            </TD>
            <TD>
              <Toggle/>
            </TD>
          </TR>
        </Table>
        <DIV>
          <TITLE>
          Time settings
        </TITLE>
        </DIV>
        <Table>
          <TH>
          Average time spent on assignments
          </TH>
          <TR>
            <TD>
              TDT4140
            </TD>
            <TD>
              <Input placeholder="hh"/>
            </TD>
          </TR>
          <TR>
            <TD>
              TDT4140
            </TD>
            <TD>
              <Input placeholder="hh"/>
            </TD>
          </TR>
          <TR>

            <TD>
              TDT4140
            </TD>
            <TD>
              <Input placeholder="hh"/>
            </TD>
          </TR>
          <TH>
          Time interval where events should be added
        </TH>
          <TR>
            <TD>
              Start
            </TD>
            <TD>
              <Input placeholder="hh:mm"/>
            </TD>
          </TR>
          <TR>
            <TD>
              End
            </TD>
            <TD>
              <Input placeholder="hh:mm"/>
            </TD>
          </TR>

        </Table>


        </Outer>
      )
    }
  }
