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

    <div className='min-h-screen w-full flex flex-col lg:flex-row'>
      <GridAside className='hidden lg:flex w-48' />
      <main className="flex-1 border-slate-800 lg:border-x-2 items-center justify-center min-w-0">
        <header className='w-full border-b border-slate-800 p-2 sm:p-4 flex flex-col items-center gap-4'>
          <div className='flex items-center gap-2 sm:gap-4'>
            <img src="./scrap-2.png" alt="img" className='w-16 sm:w-24 md:w-32 aspect-square rounded-md animate-float hover:scale-105 transition-all duration-100' />
            <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-red-500/80 mb-2 cursor-pointer whitespace-nowrap'>
              J2Courier
            </h1>
            <img src="./scrap-1-1-2.png" alt="img" className='w-16 sm:w-24 md:w-32 aspect-square rounded-md animate-float-alt' />
          </div>

          <div className="w-full p-2 rounded-md bg-gray-900/50">
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
              <button className={`whitespace-nowrap hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base ${activeTab === 'profile' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
              <button className={`whitespace-nowrap hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base ${activeTab === 'myworks' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('myworks')}>My Works</button>
              <button className={`whitespace-nowrap hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base ${activeTab === 'favsongs' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('favsongs')}>Fav Songs</button>
              <button className={`whitespace-nowrap hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base ${activeTab === 'favanime' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('favanime')}>Fav Anime</button>
              <button className={`whitespace-nowrap hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base ${activeTab === 'favmovie' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('favmovie')}>Fav Movies</button>
              <button className={`whitespace-nowrap hover:bg-indigo-800/30 hover:text-white transition-all duration-100 active:scale-95 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md cursor-pointer text-sm sm:text-base ${activeTab === 'mmm' ? 'bg-indigo-900 text-white' : ''}`} onClick={() => setActiveTab('mmm')}>Fav MMM</button>
            </div>
          </div>
        </header>
        <section className="w-full">
          {activeTab === 'profile' && <Profile />}
          {activeTab === 'myworks' && <Myworks />}
          {activeTab === 'favsongs' && <Favsongs />}
          {activeTab === 'favanime' && <Favanime />}
          {activeTab === 'favmovie' && <Favmovie />}
          {activeTab === 'mmm' && <MMM />}
        </section>
      </main>
      <GridAside className='hidden lg:flex w-48' />
    </div>

  )
}

export default App
