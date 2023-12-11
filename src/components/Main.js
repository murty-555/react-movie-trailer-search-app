import React from 'react'
import Header from './Header'
import loadingGif from '../images/loading.gif'
import '../styles/Main.css';
import Dashboard from './Dashboard';

const Main = () => {
    const isLoading = false;
    // const blurBG = { backgroundImage: "url(" + bgImage + ")" };
  return (
    <div className='main'>
      {/* <div className="blur-bg" style={blurBG}></div> */}
        <Header/>
        {isLoading && (
                <div className="loading-gif">
                    <img src={loadingGif} alt="loading..." />
                </div>
            )}
            {!isLoading && <Dashboard />}
    </div>
  )
}

export default Main