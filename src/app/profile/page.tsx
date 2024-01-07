import React from "react";
import authuser from "@/app/utils/authuser";
import Image from "next/image";
import { logout } from "../utils/logout";
import Button from "../(components)/Button/Button";
type Props = {};

const ProfilePage = async (props: Props) => {
  const user = await authuser();
  console.log("user", user);
  return (
    <div>
      ProfilePage {user?.name} {user?.email}
      <Image
        src={user?.image!}
        alt="Profile photo"
        width={400}
        height={500}
        className="w-20 h-20 rounded-full"
      />
      <Button text="Logout" onclickfun={logout} />
    </div>
  );
};

export default ProfilePage;
