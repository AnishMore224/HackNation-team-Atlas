"use server"
import React from 'react'
import { options } from "../../api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth/next";

async function User() {
    const session = await getServerSession(options);
    const user = session?.user;
  return (
    <>
      <span>{user.name}</span>
    </>
  )
}

export default User