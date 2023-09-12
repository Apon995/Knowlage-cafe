import React from 'react'

function Bookmarks({bookmarks,readtime }) {


    
  return (
    <>
     <div className='border-[1px] border-[#6047EC] bg-[#6047ec1a] px-2 py-4 rounded-md'>
        <p className='text-[#6047EC] lg:text-xl md:text-base text-base font-medium '>Spend time on read : {readtime}min</p>
     </div>
     <br />
     <div className='bg-[#1111110d] px-4 py-3 rounded-md'>
        <h1 className='text-black lg:text-xl md:text-base text-base font-bold pb-4'>Bookmarks Blogs : {bookmarks.length} </h1>
        <ul className='space-y-2'>
            {
                bookmarks.map((bookmark,index) => <li key={index} className='bg-[#FFF] text-base text-[#111] font-medium px-2 py-2 rounded-md'>{bookmark.title}</li>)
            }
           
        </ul>
     </div>
    
    
    </>
  )
}

export default Bookmarks