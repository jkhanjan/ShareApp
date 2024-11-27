"use client";
import Profile from "@components/Profile";
import { useSession } from "@node_modules/next-auth/react";
import { useRouter } from "@node_modules/next/navigation";
import React, { useEffect, useState } from "react";

const MyProfile = () => {
    const router = useRouter()
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchposts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (session?.user.id) fetchposts();
  }, []);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete =async (post) => {
    const hasConfirmed = confirm('Are u sure about deleting ');
    if(hasConfirmed){
      try {
        await fetch(`api/prompt/${post._id.toString()}`,{
          method:'DELETE'
        })
        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        
      }
    }
  };
  return (
    <Profile
      name="my"
      desc="welcome to my profile"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
