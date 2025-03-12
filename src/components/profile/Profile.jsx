"use client";
import { auth } from "@/lib/auth";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("JohnDoe");
  const [avatar, setAvatar] = useState("./noavatar.png");

  // const user = getUser;
    // console.log(user);

    useEffect(() => {
        const getUser = async () => {
            const session = await auth();
            // console.log(session);
            setUsername(session.user.username);
            console.log(session)
            setAvatar(session.user.image);
        };
        getUser();
        }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="avatar"
          >
            Avatar
          </label>
          <img
            src={avatar}
            alt="User Avatar"
            className="mb-4 w-24 h-24 rounded-full"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          {isEditing ? (
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          ) : (
            <p className="py-2 px-3 text-gray-700">{username}</p>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
            type="button"
            onClick={handleEditClick}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <p className="py-2 px-3 text-gray-700">user@example.com</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Change Password
          </label>
          <p className="py-2 px-3 text-gray-700">********</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="settings"
          >
            Settings
          </label>
          <p className="py-2 px-3 text-gray-700">Settings content...</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="notifications"
          >
            Notifications
          </label>
          <p className="py-2 px-3 text-gray-700">Notifications content...</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
