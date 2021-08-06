import { useEffect,useState } from 'react';
import './App.css';
import Filters from './Components/Filter/Filters';
import Navigation from './Components/Navigation';


function App() {

  const [src,setSrc] = useState('https://assets.imgix.net/blog/woman-hat.jpg')
  const [adjustment,setAdjustment] = useState(false)
  const [rotation,setRotation] = useState(false)
  const [size,setSize] = useState(false)
  
  const updateImg = () => {
    let userInp =  document.getElementById('ingresarManualmente').value;
    setSrc(userInp)
  }

function upload(evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;
    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            setSrc(fr.result);
        }
        fr.readAsDataURL(files[0]);
    }
  }

  return (
    <div className="App">  
      <img src={src + '?w=500'} alt="imigix" id="img"></img><br/>
      <label htmlFor="ingresoManual">Ingresar Manualmente:</label><input type="text" id="ingresarManualmente" ></input> <button id="enter" onClick={updateImg}>Enter</button><br/>
      <div class="button-wrapper">
        <span class="label">
          Upload File
        </span>
        <input type="file" name="upload" id="upload" class="upload-box" onChange={upload} />
      </div>

      <div>
        <Navigation setSize={setSize} setAdjustment={setAdjustment} setRotation={setRotation}></Navigation>
        <Filters src={src} size={size} rotation={rotation} adjustment={adjustment}></Filters>
      </div>
    </div>
  );
  }

export default App;
