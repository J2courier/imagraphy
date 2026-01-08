import React from 'react'
import Profile from './components/Profile';
import Myworks from './components/Myworks';
import Favsongs from './components/Favsongs';
import Favanime from './components/Favanime';
import Favmovie from './components/Favmovie';
import MMM from './components/MMM';
import GridAside from './components/GridAside';
import './App.css'; // Import the CSS file


function App() {
  const [activeTab, setActiveTab] = React.useState('profile');

  return (

    <div className='min-h-screen w-full flex '>
      <GridAside className='w-48'></GridAside>
      <main className="flex-1 border-x-2 border-slate-800 items-center justify-center">
        <header className='w-full  border-b border-slate-800 p-4 flex flex-col items-center'>
          <div className='flex items-center gap-4'>
            <img src="./scrap-2.png" alt="img" className='w-32 aspect-square rounded-md animate-float hover:scale-105 transition-all duration-100' />
            <h1 className='text-8xl font-bold text-red-500/80 mb-2 cursor-pointer'>
              J2Courier
            </h1>
            <img src="./scrap-1-1-2.png" alt="img" className='w-32 aspect-square rounded-md animate-float-alt' />

          </div>

          <div className="flex-1 gap-2 w-full  p-2 rounded-md flex items-center justify-center bg-gray-900/50">
            <button className={`hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-90 px-4 py-2 rounded-md hover:scale-100 cursor-pointer ${activeTab === 'profile' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
            <button className={`hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-90 px-4 py-2 rounded-md hover:scale-100 cursor-pointer ${activeTab === 'myworks' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('myworks')}>My Works</button>
            <button className={`hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-90 px-4 py-2 rounded-md hover:scale-100 cursor-pointer ${activeTab === 'favsongs' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('favsongs')}>Fav Songs</button>
            <button className={`hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-90 px-4 py-2 rounded-md hover:scale-100 cursor-pointer ${activeTab === 'favanime' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('favanime')}>Fav Anime</button>
            <button className={`hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-90 px-4 py-2 rounded-md hover:scale-100 cursor-pointer ${activeTab === 'favmovie' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('favmovie')}>Fav Movies</button>
            <button className={`hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-90 px-4 py-2 rounded-md hover:scale-100 cursor-pointer ${activeTab === 'mmm' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('mmm')}>Fav MMM</button>
          </div>
        </header>
        <section>
          {activeTab === 'profile' && <Profile />}
          {activeTab === 'myworks' && <Myworks />}
          {activeTab === 'favsongs' && <Favsongs />}
          {activeTab === 'favanime' && <Favanime />}
          {activeTab === 'favmovie' && <Favmovie />}
          {activeTab === 'mmm' && <MMM />}
        </section>
      </main>
      <GridAside className='w-48'></GridAside>


    </div>

  )
}

export default App
