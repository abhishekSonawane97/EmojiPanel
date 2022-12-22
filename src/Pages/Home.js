import React,{useState} from 'react'
import Emojilayout from '../Components/Emojilayout'
import Navbar from '../Components/Navbar'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Home = () => {

  const [showEmoji, setShowEmoji] = useState(false);

  const [selectedEmojis, setSelectedEmojis] = useState('');

  const toggleEmojiPanel=()=>{

    setShowEmoji(!showEmoji)
    setSelectedEmojis('')
  }

  return (
    <div >
      <Navbar/>

      <Stack spacing={2} direction="column">
      <Button variant="outlined" color="error" onClick={toggleEmojiPanel}
      style={{textDecoration:'underline'}}>
        Click To Open / close Emoji Panel
        </Button>
        

      <div style={{display:'flex', justifyContent:'center', textAlign:'center'}}>

      {showEmoji && <Emojilayout onEmojiClicked={emoji=>setSelectedEmojis(selectedEmojis + emoji)}/>}

      <div style={{width:'40vw'}}>
        <h1 >{selectedEmojis}</h1>
      </div>

</div>
</Stack>
      
    </div>
  )
}

export default Home
