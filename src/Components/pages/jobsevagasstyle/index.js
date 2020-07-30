import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`
export const Button = styled.button`
    padding: 0 20px 0 20px;
    height: 35px;
    margin: 5px;
    background: #01438f;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
        background:#014ccf;
        
    }
`

export const OppButtons = styled.div`
    display: flex;

`
export const OppAreas = styled.div`
    width: 90%;
    display:flex;
    flex-direction: column;


`
export const EachThing = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

`

export const BoxItem = styled.div`
    min-height: 260px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 10px;
`
export const ItemImage = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    span{
        height: 100px;
        width: 100px;
        border-radius: 100%;
        border: 2px solid #bbb;
        display: flex;
        justify-content: center;
        align-items: center;
        }
`
export const DetailsItem = styled.span`
     display: flex;
    flex-direction: column;
    min-height: 35%;
    background: #fff;
    border-radius: 0 0 5px 5px ;
    border-top: 1px solid #ddd;
    text-align: center;

    
        
        strong{
            font-size: 18px;
            text-align: center;
        }
        i{
            font-size: 14px;
            
        }
    
`
export const VisitDate = styled.span`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    


    button{
        background: #01438f;
        border: none;
        width: 70px;
        height: 25px;
        border-radius: 3px;
        color: #fff;
        cursor: pointer;

        &:hover{
            background: #004ea7;
        }
        

    }
    i{
        font-size: 12px;
        font-weight: 500;
    }
`

//=====================================================================================
// Jobs and Vagas Viewer

export const DataArea = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px; 
    padding: 20px;
    /* align-items: center; */
    min-height: 500px;
`
export const ContentChild = styled.div`
    width: 90%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    
    
    div{
        margin-left: 20px;

        p{
            font-size: 10pt;
        }
    }

    textarea#visualizador{
        min-width: 80%;
        max-width: 80%;
        min-height: 300px;
        border: none;
        font-size: 11pt;
        padding: 20px;
        outline: none;
    }

`

export const AboutData = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px 
`