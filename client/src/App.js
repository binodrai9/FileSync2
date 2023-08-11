import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';
import applogo from './images/appLogo4.png';
import card1 from './images/card1.jpg';
import card2 from './images/card2.jpg';
import card3 from './images/card3.jpg';
import React from 'react';
import Typed from 'typed.js';

function App() {
  const MyComponent = () => {
    useEffect(() => {
      // Create a new instance of Typed.js
      const typeData = new Typed('.role', {
        strings: [
          ' Upload PDFs',
          'Upload Docx.',
          'Upload MP3.songs',
          'Upload MP4.videos',
          'Upload All File Formats.',
        ],
        loop: true,
        typeSpeed: 120,
        backSpeed: 80,
        backDelay: 1000,
      });

      // Clean up function to destroy Typed.js instance on component unmount
      return () => {
        typeData.destroy();
      };
    }, []);

    // Render nothing or additional components if needed
    return null;
  };

  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const logo =
    'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <div class='navbar'>
          <div class='logo-container'>
            <img src={applogo} class='applogo' />
            <div class='logo-text'> </div>
          </div>
          <div class='nav-items'>
            <div>
              <a href='#home'>Home</a>
            </div>
            <div>
              <a href='#about'>About</a>
            </div>
            <div>
              <a href='#contactme'>Contact Me</a>
            </div>
          </div>
        </div>

        <MyComponent /> {/* Render the MyComponent component here */}

        <h1>
          Welcome to FileSync! <span className='role'></span>
        </h1>
        <div class='gallery'>
          <figure class='card'>
            <img src={card1} alt='' />
            <figcaption>Share PDFs & <br /> Files!</figcaption>
          </figure>
          <figure class='card'>
            <img src={card2} alt='' />
            <figcaption>Share Images!</figcaption>
          </figure>
          <figure class='card'>
            <img src={card3} alt='' />
            <figcaption>Share MP3 <br /> Songs & Videos!</figcaption>
          </figure>
        </div>
        <p>Upload and share the download link.</p>
       
        <button onClick={onUploadClick}>Upload</button>
        <input
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target='_blank' rel='noopener noreferrer'>
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
