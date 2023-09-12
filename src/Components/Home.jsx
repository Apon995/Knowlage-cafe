import React, { useEffect, useState } from 'react'
import Blog from './Blog';
import Bookmarks from './Bookmarks';
import { json } from 'react-router';



function Home() {
  

  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [readtime, setReadtime] = useState(0);
  const [isShowBookmark, setShowBookmark] = useState(false);




  const toggleShowbookmarks = () => {
    setShowBookmark(current => !current)
  }

  const handleReadtime = (time, id) => {
   
 
 
    let newtime = parseInt(readtime) + parseInt(time);
    setReadtime(newtime)
    let reamining = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(reamining)
  }


  const handleBookmarks = (blog, e, isShowBookmark, id) => {

   
    
    if (isShowBookmark) {
      e.target.classList.remove('fa-solid')
      let reamining = bookmarks.filter(bookmark => bookmark.id !== id);
      setBookmarks(reamining)

    }
    else {
      e.target.classList.add('fa-solid')
      let newArr = [...bookmarks, blog];
      setBookmarks(newArr);
    }



  }

  useEffect(() => {
    fetch('Blog.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error(error))
  }, [])
  return (
    <>

      <h1 className='text-black text-4xl font-semibold md:py-2 py-4'>Total Blog : {blogs.length} </h1>

      <div className='flex gap-4 md:flex-row flex-col-reverse'>
        <div className='md:w-[70%] space-y-6'>
          {
            blogs.map((blog, index) => <Blog key={index} blog={blog} toggleShowbookmarks={toggleShowbookmarks} handleBookmarks={handleBookmarks} handleReadtime={handleReadtime} isShowBookmark={isShowBookmark} />)
          }
        </div>
        <div className='md:w-[30%]'>
          <Bookmarks bookmarks={bookmarks} readtime={readtime} />
        </div>
      </div>
     <br />

    </>
  )
}

export default Home