"use client";

import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const links = [
  {
    title: "Profile",
    path: "/profile",
  },
  {
    title: "Help",
    path: "/help",
  }
];
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenprofile] = useState(false);
  // Temporary values
  // const session = true;
  // const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {/* {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))} */}
        {session?.user ? (
          <>
              <Image
          src={"/noAvatar.png"}
          alt=""
          width={50}
          height={50}
          className={styles.avatar}
        onClick={() => setOpenprofile((prev) => !prev)}
        />
        {/* create menu when click to image in the menu view profile, loguot, help etc */}
        {openProfile && ( 
          <div className={styles.profile}>
             {session.user?.isAdmin && (
              <NavLink item={{ title: "Admin", path: "/admin" }} />
            )}
            {links.map((link) => (
              <NavLink key={link.title} item={link} />
            ))}
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}

     
      </div>
      <Image
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
