import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="w-screen h-screen flex justify-center items-center">
    <UserProfile path="/user-profile" />
  </div>
);

export default UserProfilePage;
