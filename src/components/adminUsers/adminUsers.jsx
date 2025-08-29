
import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { changeUserRole, deleteUser } from "@/lib/action";

const AdminUsers = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>

          <div className={styles.detail}>
            <div className={styles.changeuser}>
              <form action={changeUserRole}>
                <input type="hidden" name="id" value={user.id} />
                <select
                  name="role"
                  defaultValue={user.isAdmin ? "admin" : "user"}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button className={styles.userButton}>Change Role</button>
              </form>
            </div>

            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className={styles.userButton}>Delete</button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
