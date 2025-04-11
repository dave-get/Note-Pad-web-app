import React from 'react'

const NoteCards = () => {
  return (
    <div className='relative flex flex-col space-y-3 border p-5 w-64 h-80 rounded-xl'>
        <div>
            <p>Header</p>
        </div>
        <div>
            some notes
        </div>
        <div className='absolute bottom-2 right-2'>Last-edit-on: Jan 10</div>
    </div>
  )
}

export default NoteCards