import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import Emojipanel from './Emojipanel'

const Emojilayout = ({onEmojiClicked}) => {

  const [emojis, setEmojis] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{

    fetch('https://emoji-api.com/emojis?access_key=e517f75e3bd7de11501c635a0883022f12828e26').then((response)=> response.json()).then((data)=>setEmojis(data))
  },[])
  console.log(emojis);

  const getFilteredEmojis=()=>{

    if(search===''){
      return emojis.slice(0,100)
    }

return emojis.filter((emoji)=>


  emoji.unicodeName
  .toLowerCase().includes(search.toLowerCase())


  )

  }
  console.log(getFilteredEmojis().length)




  return (

    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{width:"40vw", border:'2px solid blue',  borderRadius:'5px',height:"45vh", overflow:"scroll", textAlign:'center'}}
    >




      <TextField id="outlined-basic" label="search emoji" variant="outlined" onChange={(e)=>setSearch(e.target.value)} value={search}/>
    


<div style={{display:'grid',gridTemplateRows:"repeat(12, 6vh)", gridTemplateColumns:'repeat(9, 4vw)', }}>
  
      {
        getFilteredEmojis().length>0?
      getFilteredEmojis().map((emoji)=>(
        <div 
          onClick={()=>onEmojiClicked     (emoji.character)} 
          key={emoji.unicodeName}
          style={{fontSize:'25px', cursor:'pointer'}}>
          {emoji.character}
        </div>
      )):<h1>No Emoji Found</h1>
        
      }
      </div>



{/* <Emojipanel/> */}
</Box>
    </>
  )
}

export default Emojilayout
