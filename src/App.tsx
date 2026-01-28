import { useState } from 'react'
import './App.css'
import { AppContext } from './AppContext'
import Twitter from './components/Twitter'
import Reddit from './components/Reddit'

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = () => {
    alert("Searching for: " + searchQuery)
  }

  return (
    <AppContext.Provider value={{ searchQuery, setSearchQuery }}>
      <div className="w-full">
        <div className="relative flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
          </svg>

          <input
            className="max-w-sm min-w-[400px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Query..."
            value={searchQuery}
            onChange={handleInputChange}
          />

          <button
            className="cursor-pointer rounded-md bg-indigo-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-indigo-700 focus:shadow-none active:bg-indigo-700 hover:bg-indigo-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
          <div className="p-4 rounded-sm bg-sky-500/10">
            <Twitter />
          </div>
          <div className="p-4 rounded-sm bg-orange-500/10">
            <Reddit />
          </div>
          <div className="p-4 rounded-sm bg-pink-500/10">Tiktok</div>
          <div className="p-4 rounded-sm bg-blue-500/10">Facebook</div>
        </div>
        {/* <div className="my-4 h-px bg-gray-300 dark:bg-gray-700">
          <Twitter />
        </div> */}
      </div>
    </AppContext.Provider>
  )
}

export default App
