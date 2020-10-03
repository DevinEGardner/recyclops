import React, {useState} from 'react';
import QuestionScreen from './QuestionScreen'
import HomeScreen from './Homescreen'

const styles = {
    root:{
        background:'#5B2E48',
        color:'#E2B8A6',
        width:'100vw',
        height:'100vh',
        textAlign:'center',
        h1:{
            fontSize:39,
            padding: '70px 20px 0 20px'
        },
        h2:{
            fontSize: 25,
            paddingTop: '30px',
            paddingBottom:'30px',
            width:'195px',
            margin: 'auto'
        }
    },
    buttoncontainer:{
        overflow:'auto',
        height: '370px'
    },
    button: {
        background:'#519369',
        color:'#DBF1CB',
        fontSize: 25,
        width: '325px',
        height: '66px',
        margin:'8px auto auto auto',
        justifyContent:'center',
        alignItems:'center',
        display:'flex',
        borderRadius: 35,
    }
}

let test = {
    Title:"Let's Get Started!",
    Question: "What are you trying to recycle?",
    Options: [
        {text:'Bottles'},
        {text:'Boxes'},
        {text:'Paper'},
        {text:'Electronics'},
        {text:'Other'},
        {text:'Tires'},
        {text:'Stuff'}
    ]
}


export default function Screen(){

    let [ishome, goHome] = useState(true)
    let [activePage, changePage] = useState(test)

    return(
        <div>
        {   ishome 
            ? <div>
                <HomeScreen goHome={goHome} styles={{...styles, root:{...styles.root, background:'#519369',color:'#DBF1CB',}, button:{...styles.button, background:'#5F3850', color:'#DBF1CB',}}}/>
            </div> 
            : <div>
                <QuestionScreen {...activePage} changePage={changePage} goBack={()=>{goHome(true)}} styles={styles} />
            </div>
        }
        </div>
    )
}