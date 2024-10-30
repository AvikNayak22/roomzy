"use server";

// Import necessary modules for Appwrite and Next.js
import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { Query } from "node-appwrite";
import { redirect } from "next/navigation";
import checkAuth from "./checkAuth";

// Define an asynchronous function to fetch the user's bookings
async function getMyBookings() {
  // Retrieve the session cookie to authenticate the user
  const sessionCookie = cookies().get("appwrite_session");
  if (!sessionCookie) {
    // If there is no session cookie, redirect the user to the login page
    redirect("/login");
  }

  try {
    // Create a session client using the session cookie
    const { databases } = await createSessionClient(sessionCookie.value);

    // Check user authentication and retrieve user details
    const { user } = await checkAuth();

    // If the user is not authenticated, return an error message
    if (!user) {
      return {
        error: "You must be logged in to view your bookings",
      };
    }

    // Query the database to fetch all bookings associated with the user's ID
    const { documents: bookings } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE, // Database ID
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS, // Collection ID for bookings
      [Query.equal("user_id", user.id)] // Filter bookings by the user's ID
    );

    // Return the list of bookings
    return bookings;
  } catch (error) {
    // Log any errors that occur while fetching the bookings
    console.log("Failed to get user's bookings", error);
    return {
      error: "Failed to get bookings",
    };
  }
}

// Export the function as the default export of the module
export default getMyBookings;
