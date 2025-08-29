"use client";
import React, { useEffect, useState } from "react";
import { FiEdit2, FiMail, FiCalendar, FiMapPin } from "react-icons/fi";

const Profile =  ({ session }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=John",
    location: "New York, USA",
    joinDate: "January 2023",
    bio: "Frontend Developer | React Enthusiast | Coffee Lover",
  });

  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn the basics of Next.js and build your first application.",
      createdAt: "2023-08-15",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      title: "React Hooks Explained",
      excerpt: "A comprehensive guide to React Hooks and their use cases.",
      createdAt: "2023-08-10",
      likes: 32,
      comments: 12,
    },
  ]);


  useEffect(() => {
    console.log(session.user);
    if (session?.user) {
      setUserData((prev) => ({
        ...prev,
        username: session.user.username,
        email: session.user.email,
        avatar: session.user.image,
      }));
    }
  }, [session]);

  const handleSaveProfile = async () => {
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Section */}
      <div className="bg-[#2d2b42] rounded-lg shadow-lg p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="relative">
            <img
              src={userData.avatar || "/noAvatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-[#3673fd]"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            {isEditing ? (
              <input
                type="text"
                value={userData.username}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
                className="border p-2 rounded w-full md:w-auto bg-[#0d0c22] text-white"
              />
            ) : (
              <h2 className="text-3xl font-bold text-white">
                {userData.username}
              </h2>
            )}
            <p className="text-[#e5e5e5] mt-2">{userData.bio}</p>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <span className="flex items-center gap-2 text-[#e5e5e5]">
                <FiMail className="text-[#3673fd]" /> {userData.email}
              </span>
              <span className="flex items-center gap-2 text-[#e5e5e5]">
                <FiMapPin className="text-[#3673fd]" /> {userData.location}
              </span>
              <span className="flex items-center gap-2 text-[#e5e5e5]">
                <FiCalendar className="text-[#3673fd]" /> Joined{" "}
                {userData.joinDate}
              </span>
            </div>
          </div>
          <button
            onClick={() =>
              isEditing ? handleSaveProfile() : setIsEditing(true)
            }
            className="bg-[#3673fd] hover:bg-[#2860e6] text-white px-6 py-2 rounded-full transition-colors flex items-center gap-2"
          >
            <FiEdit2 />
            {isEditing ? "Save" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Posts Section */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-white">My Posts</h3>
        <div className="grid gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#2d2b42] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-xl font-bold text-white">{post.title}</h4>
              <p className="text-[#e5e5e5] mt-2">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-[#e5e5e5]">
                <span className="flex items-center gap-2">
                  <FiCalendar />
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <div className="flex gap-4">
                  <span>{post.likes} likes</span>
                  <span>{post.comments} comments</span>
                </div>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <p className="text-[#e5e5e5] text-center py-8">No posts yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
