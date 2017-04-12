import colors from '../../assets/colorSchema'
import styled from 'styled-components'
const Table = styled.table`
width:50%;
margin-left:25%;
font-size:18px;
`;

const TableBody = styled.tbody`
`;
const TableRowColumn = styled.td`
font-size:18px;
`

const TableRow = styled.tr``
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

const Outer = styled.div`
min-height:100vh;
width:100%;
background-color:${colors.mainBackground}
`

const Outertable = styled.div`
min-height: 20vh;
width:100%;
background-color:${colors.mainBackground}
`
export {Table, TR, TD, TH, DIV, TITLE, Input, Outertable, TableRow, TableRowColumn, TableBody, Outer}
