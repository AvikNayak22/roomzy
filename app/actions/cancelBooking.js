"use server";

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import checkAuth from "./checkAuth";

async function cancelBooking(bookingId) {
  const sessionCookie = cookies().get("appwrite_session");
  if (!sessionCookie) {
    redirect("/login");
  }

  try {
    const { databases } = await createSessionClient(sessionCookie.value);

    //get user's ID
    const { user } = await checkAuth();

    if (!user) {
      return {
        error: "You must be logged in to cancel a booking",
      };
    }

    //get the booking
    const booking = await databases.getDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      bookingId
    );

    //check if the booking belongs to the user
    if (booking.user_id !== user.id) {
      return {
        error: "You are not authorized to cancel this booking",
      };
    }

    //delete the booking
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS,
      bookingId
    );

    //revalidate the bookings page
    revalidatePath("/bookings", "layout");

    return {
      success: true,
    };
  } catch (error) {
    console.log("Failed to cancel booking", error);
    return {
      error: "Failed to cancel booking",
    };
  }
}

export default cancelBooking;
