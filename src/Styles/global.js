import {createGlobalStyle} from 'styled-components'


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all .23s ease-in-out;
        
     }
     

     body{
        background: #f8f9fa;
        font-size: 14px;
        color: #444;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow-x: hidden;
        ::-webkit-scrollbar{
         width: 5px;
        }
        ::-webkit-scrollbar-track{
            background: rgba(0,0,0,.1);
        }
        ::-webkit-scrollbar-thumb{
            background: rgba(0,0,0,.1);
            &:hover{
                background: rgba(0,0,0,.4);
            }

        }

        }
        
     
`