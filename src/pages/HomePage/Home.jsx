import React from "react";
import { useState } from "react";





// Icons
import HomeIcon from "../../data/Icons/homeFill.svg";
import star from "../../data/Icons/star.svg";
import ExploreIcon from "../../data/Icons/explore.svg";
import NotificationsIcon from "../../data/Icons/notification.svg";
import MessagesIcon from "../../data/Icons/messages.svg";
import BookmarksIcon from "../../data/Icons/bookmarks.svg";
import settings from "../../data/Icons/settings.svg";
import ListsIcon from "../../data/Icons/lists.svg";
import ProfileIcon from "../../data/Icons/profileOutline.svg";
import MoreIcon from "../../data/Icons/more.svg";
import twitter from "../../assets/twitter.svg";
import bobir from "../../assets/Bobir.svg";
import ovqat from "../../data/Icons/ovqatt.svg";
import comment from "../../data/Icons/comment.svg";
import like from "../../data/Icons/like.svg";
import share from "../../data/Icons/share.svg";
import statics from "../../data/Icons/statistics.svg";
import repost from "../../data/Icons/repost.svg";
import clotex from "../../assets/cloutex.svg";
import creativ from "../../assets/creatuv.svg";
import mushtariy from "../../assets/mushtariy.svg";
import Shuhrat from "../../assets/Shuhrat.svg";
import design from "../../assets/design.svg";
import send from '../../data/Icons/send.png';



const Home = () => {

   const [posts, setPosts] = useState([]); 
   const [newPost, setNewPost] = useState("");

   function addPost() {
     if (newPost.trim()) {
       setPosts([...posts, { id: Date.now(), content: newPost }]); 
       setNewPost("");
     }
   }
  




  return (
    <div className="h-screen flex bg-gray-100 mx-40">
      {/* Sidebar */}
      <div className="w-1/4 p-6 flex flex-col justify-between">
        <div>
          <img src={twitter} alt="Twitter" className="h-8 mb-8" />
          <nav className="space-y-6">
            <a
              href="#"
              className="flex items-center space-x-3 text-xl font-semibold"
            >
              <img src={HomeIcon} alt="Home" />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-xl">
              <img src={ExploreIcon} alt="Explore" />
              <span>Explore</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-xl">
              <img src={NotificationsIcon} alt="Notifications" />
              <span>Notifications</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-xl">
              <img src={MessagesIcon} alt="Messages" />
              <span>Messages</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-xl">
              <img src={BookmarksIcon} alt="Bookmarks" />
              <span>Bookmarks</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-xl">
              <img src={ListsIcon} alt="Lists" />
              <span>Lists</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-xl">
              <img src={ProfileIcon} alt="Profile" />
              <span>Profile</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-xl">
              <img src={MoreIcon} alt="More" />
              <span>More</span>
            </a>
          </nav>
          <button className="bg-blue-500 text-white py-3 px-8 rounded-full mt-8 w-full font-bold">
            Tweet
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <img src={bobir} alt="User" className="h-10 w-10 rounded-full" />
          <div>
            <a href="http://localhost:3000/profile">
              <h4 className="font-bold">Bobur</h4>
              <p className="text-gray-500">@bobur_mavlonov</p>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-auto p-6 border-l border-r">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Home</h2>
          <img src={star} alt="star" className="h-6 w-6" />
        </div>
        <hr className="border-gray-300 w-full" />
        <div className="space-y-6">
          <div className="flex space-x-4 my-2">
            <img src={design} alt="User1" className="h-12 w-12 rounded-full" />
            <div>
              <div className="flex items-center space-x-2 ">
                <h4 className="font-bold">Designsta</h4>
                <p className="text-gray-500">@inner • 25m</p>
              </div>
              <p>
                Twitterdagi ayol-erkak qarama-qarshiliglardan o'zinglar
                zerikmadinglarmi?
              </p>
              <div className="space-x-6 text-gray-500 mt-2 flex justify-between">
                <img src={comment} alt="comment" />
                <img src={repost} alt="" />
                <img src={like} alt="" />
                <img src={share} alt="" />
                <img src={statics} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="space-y-6 my-2">
          <div className="flex space-x-4 my-2">
            <img src={clotex} alt="User1" className="h-12 w-12 rounded-full" />
            <div>
              <div className="flex items-center space-x-2 ">
                <h4 className="font-bold">cloutexibition</h4>
                <p className="text-gray-500">@RajLahoti · 22m</p>
              </div>
              <p className="text-left">
                YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
                Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
                ko’rib hursand bo’ladi odam.
              </p>
              <div className="space-x-6 text-gray-500 mt-2 flex justify-between">
                <img src={comment} alt="comment" />
                <img src={repost} alt="" />
                <img src={like} alt="" />
                <img src={share} alt="" />
                <img src={statics} alt="" />
              </div>
            </div>
          </div>
          <div className="space-y-6 my-2">
            <div className="flex space-x-4 my-2">
              <img
                src={creativ}
                alt="User1"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-2 ">
                  <h4 className="font-bold">CreativePhoto</h4>
                  <p className="text-gray-500">@cloutexhibition · 1h</p>
                </div>
                <p className="text-left my-2">Обетда..... </p>
                <p className="text-left my-2">Кечиринглар</p>
                <img src={ovqat} alt="" />

                <div className="space-x-6 text-gray-500 mt-2 flex justify-between">
                  <img src={comment} alt="comment" />
                  <img src={repost} alt="" />
                  <img src={like} alt="" />
                  <img src={share} alt="" />
                  <img src={statics} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-6 border-l border-r">
          <hr className="border-gray-300 w-full" />

          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="flex space-x-4 my-2">
                <img
                  src={bobir}
                  alt="User"
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold">Bo</h4>
                    <p className="text-gray-500">@bobur_mavlonov • just now</p>
                  </div>
                  <p>{post.content}</p>
                  <div className="space-x-6 text-gray-500 mt-2 flex justify-between">
                    <img src={comment} alt="comment" />
                    <img src={repost} alt="repost" />
                    <img src={like} alt="like" />
                    <img src={share} alt="share" />
                    <img src={statics} alt="statics" />
                  </div>
                </div>
              </div>
            ))}
            <div className="add w-96 text-left flex">
              <input
                className="w-[500px] h-8 rounded-xl p-2  border-2 border-solid"
                type="text"
                placeholder="Add post"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <button className="w-9 h-8 ml-2 inline-block" onClick={addPost}>
                <img src={send} alt="send" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Widgets */}
      <div className="w-1/4 p-6">
        <div className="searcj-inp ">
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full p-3 mb-6 rounded-full bg-gray-200 focus:outline-none"
          />
        </div>
        <div className="bg-white text-left p-4 rounded-tl-lg rounded-tr-lg shadow-md">
          <div className="trends flex justify-between">
            <h3 className="text-xl font-bold my-2">Trends for you</h3>
            <img src={settings} alt="" />
          </div>

          <ul>
            <li className="mb-4">
              <p className="text-sm text-gray-500">Trending in Germany</p>
              <h4 className="font-bold">Revolution</h4>
              <p className="text-sm text-gray-500">50.4K Tweets</p>
            </li>
          </ul>
        </div>
        <div className="bg-white text-left p-4  shadow-md">
          <ul>
            <li className="mb-4">
              <p className="text-sm text-gray-500">Trending in Germany</p>
              <h4 className="font-bold">Revolution</h4>
              <p className="text-sm text-gray-500">50.4K Tweets</p>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 text-left rounded-bl-lg rounded-br-lg shadow-md">
          <ul>
            <li className="mb-4">
              <p className="text-sm text-gray-500">Trending in Germany</p>
              <h4 className="font-bold">Revolution</h4>
              <p className="text-sm text-gray-500">50.4K Tweets</p>
            </li>
          </ul>
          <a href="#" className="text-blue-500 ">
            Show more
          </a>
        </div>
        <div className="bg-white p-4 mt-6 rounded-lg shadow-md">
          <h3 className="text-xl text-left font-bold mb-4">You might like</h3>
          <ul>
            <li className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={mushtariy}
                  alt="User2"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h4 className="font-bold">Mushtariy</h4>
                  <p className="text-sm text-gray-500">@Mushtar565266</p>
                </div>
              </div>
              <button className="bg-black text-white ml-5 py-2 px-4 rounded-full">
                Follow
              </button>
            </li>
            <li className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={Shuhrat}
                  alt="User2"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <h4 className="font-bold">Shuhratbek</h4>
                  <p className="text-sm text-gray-500">@mrshukhrat</p>
                </div>
              </div>
              <button className="bg-black text-white py-2 px-4 rounded-full">
                Follow
              </button>
            </li>
          </ul>
          <a href="#" className="text-blue-500">
            Show more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
