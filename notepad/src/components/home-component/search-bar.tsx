import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='w-[70%] flex'>
        <input type="text" className='border  px-10 border-[#5C63FF] w-full p-2 rounded-l-4xl outline-none' placeholder='search here . . .'/> 
        <button type="submit"  className='border border-[#5C63FF] rounded-r-4xl px-4 cursor-pointer'><Search /></button>
    </div>
  )
}

export default SearchBar