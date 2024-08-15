import React from "react";

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
import backimg from "../../assets/backimg.svg";
import group from "../../data/Icons/Group.svg";
import mushtariy from "../../assets/mushtariy.svg";
import Shuhrat from "../../assets/Shuhrat.svg";
import back from "../../data/Icons/back.png";
import calendar from "../../data/Icons/calendar.svg";
import pin from "../../data/Icons/pin.svg";
import logOut from "../../data/Icons/logout.png";

const Profile = () => {
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
            <a href="/" className="flex items-center space-x-3 text-xl">
              <img src={logOut} alt="More" className="w-7" />
              <span>Log out</span>
            </a>
          </nav>
          <button className="bg-blue-500 text-white py-3 px-8 rounded-full mt-8 w-full font-bold">
            Tweet
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <img src={bobir} alt="User" className="h-10 w-10 rounded-full" />
          <div>
            <h4 className="font-bold">Bobur</h4>
            <p className="text-gray-500">@bobur_mavlonov</p>
          </div>
        </div>
      </div>

      {/* Main Content */}

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="back flex">
          <a href="http://localhost:3000/home#">
            <img className="w-5 mr-3" src={back} alt="" />
          </a>
          <h2>Bobur</h2> <br />
          <h4>1,070 Tweets</h4>
        </div>
        <div className="relative">
          <img
            src={backimg}
            alt="Banner"
            className="w-full h-48 object-cover"
          />
          <div className="absolute left-4 -bottom-12">
            <img
              src={bobir}
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white"
            />
          </div>
        </div>

        <div className="p-4 pt-12">
          <button className=" bg-gray-200 rounded-2xl w-auto p-2 text-right m-0 text-gray-800">
            Edit profile
          </button>
          <div className="flex justify-between items-center">
            <div className="text-left">
              <h1 className="text-xl text-left font-bold">Bobur</h1>
              <p className="text-gray-600">@bobur_mavlonov</p>
              <p className="text-gray-600 mt-1">
                UX&UI designer at{" "}
                <a
                  href="https://twitter.com/abutechuz"
                  className="text-blue-500"
                >
                  @abutechuz
                </a>
              </p>
              <div className="flex mt-7 space-x-2 text-gray-600 mt-1">
                <div className="my-3">
                  <img src={group} alt="" className="inline-block" />{" "}
                  <h3 className="inline-block"> Mashag’daman</h3>
                </div>
                <div>
                  <a
                    href="https://t.me/boburjon_mavlonov"
                    className="text-blue-500 my-6"
                  >
                    t.me/boburjon_mavlonov
                  </a>
                </div>
                <div className="text-base">Born November 24, 2000</div>
                <div>
                  {" "}
                  <img src={calendar} alt="" className="w-4" />
                  <h2>Joined May 2020</h2>
                </div>
              </div>
            </div>
          </div>


          <div className="flex mt-4 space-x-8">
            <div className="flex items-center space-x-1">
              <span className="font-bold">67</span>
              <span className="text-gray-600">Following</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-bold">47</span>
              <span className="text-gray-600">Followers</span>
            </div>
          </div>


          <div className="flex justify-around mt-4 text-gray-600 border-b">
            <button className="pb-2 border-b-4 border-blue-500 text-blue-500">
              Tweets
            </button>
            <button className="pb-2">Tweets & replies</button>
            <button className="pb-2">Media</button>
            <button className="pb-2">Likes</button>
          </div>

          <div className="mt-4 flex text-left">
            <p className="text-gray-500">
              <img src={pin} alt="" className="inline-block" />{" "}
              <h3 className="inline-block">Pinned Tweet</h3>
            </p>
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
              <button className="bg-black text-white  py-2 px-4 rounded-full">
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

export default Profile;
