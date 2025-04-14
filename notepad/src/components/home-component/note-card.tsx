'use client';

import { Note } from '@/type/index';
import React, { useEffect, useState } from 'react'
import DOMPurify from 'dompurify';

const NoteCards = ({ title, content, createdAt, updatedAt }: Note) => {
  const [safeHTML, setSafeHTML] = useState('');
  console.log(content);
  useEffect(() => {
    if (typeof content === 'string') {
      setSafeHTML(DOMPurify.sanitize(content));
    }
  }, [content]);

  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className='relative flex flex-col space-y-3 border p-5 w-64 h-80 rounded-xl'>
        <div>
            <p className="font-bold text-lg">{title}</p>
        </div>
        <div 
          className="overflow-hidden prose prose-invert max-w-none" 
          dangerouslySetInnerHTML={{ __html: safeHTML }} 
        />
        <div className='absolute bottom-2 right-2 text-xs text-gray-500'>{formattedDate}</div>
    </div>
  )
}

export default NoteCards