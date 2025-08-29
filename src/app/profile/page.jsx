import React from 'react'
import Profile from '@/components/profile/Profile'
import styles from './Profile.module.css'
import { auth } from '@/lib/auth';

const ProfilePage = async () => {
    const session = await auth();
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <h1>My Profile</h1>
        <p>Manage your account information and settings</p>
      </div>
      
      <div className={styles.profileContent}>
        <Profile session={session} />
      </div>
    </div>
  )
}

export default ProfilePage