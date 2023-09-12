import React from "react";
import profile from "../assets/profile.png";



function Blog({blog,handleBookmarks, handleReadtime,toggleShowbookmarks,isShowBookmark}) {

  const {id,title , cover_img, author_name,hashtags,posted_date,reading_time} = (blog || 'none')
  let [a,b,c]=(hashtags || 'hashtag');
  return (
    <>
      <div>
        {/* --cover-img-- */}
        <img className="w-[100%] rounded-md"
          src={cover_img || 'https://images.unsplash.com/photo-1694383440533-4bd1660c97e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
          alt=""
        />
        <div className="flex items-center justify-between my-2">
        <div className="flex gap-2 items-center ">
          {/* --author-img-- */}
          <img src={profile} alt={author_name} className="md:w-[50px] w-[35px]" />
          <div>
            <p className="md:text-xl text-[18px] font-bold text-[#111]">{author_name || 'Shofikul islam'}</p>
            <span className="text-sm font-medium text-[#11111199]">{posted_date || '1/1/2030'}</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
        <p>{reading_time} mins read</p>
        <button className="lg:text-2xl text-xl font-medium cursor-pointer" onClick={(e)=>{handleBookmarks(blog,e,isShowBookmark,id ),toggleShowbookmarks()}}><i className='fa-regular fa-bookmark'></i> </button>
        </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-[#111] md:text-2xl text-xl font-medium">{title || 'none'}</h1>
          
          <p className="text-base font-medium text-[#11111199]"># {a} <span># {b}</span> <span># {c}</span> </p>

          <button className="text-[#6047EC] text-base font-medium hover:underline" onClick={()=>{handleReadtime(reading_time,id)}}>Mark as read</button>
        </div>
        
      </div>
    </>
  );
}

export default Blog;
