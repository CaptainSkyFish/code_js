import client from "@/db";
import axios from "axios";

// async function fetchUserDetails() {
//   await new Promise((r) => {setTimeout(r,1000)})
//   const response = await axios.get("http://localhost:3000/api/users")
//   return response.data;
// }

async function fetchUserDetails() {
  const user = await client.user.findFirst();
  return ({
    email: user?.username,
    name: user?.password
  })
}

export default async function Home() {
  // const userDetails = await fetchUserDetails();
  return (
    <div className="flex  flex-col justify-center h-screen">
        <div className="flex justify-center">
            {/* <div className="bg-black text-white font-semibold border p-8 rounded-md shadow-md">
                <div>
                    Name: {userDetails?.name}
                </div>
                
                e-Mail: {userDetails?.email}
            </div> */}
        </div>
    </div>
  );
}
