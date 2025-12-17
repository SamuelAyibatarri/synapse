"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [users, setUsers] = useState<{id: number; email: string; name: string}[]>([{id: 0, email: "default@email.com", name: "default"}]);

  useEffect(() => {
    fetch("/api/getUsers")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <p><strong>Name: </strong><span>{users[0].name}</span></p>
      <br />
      <br />
      <p><strong>Email: </strong><span>{users[0].email}</span></p>
      {/* {JSON.stringify(users)} */}
    </div>
  );
};

export default Page;
