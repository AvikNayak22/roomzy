import Link from "next/link";
import React from "react";

const BookedRoomCard = ({ booking }) => {
  const { room_id: room } = booking;

  // Helper function to format date strings into a readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Configure options to get month in short format (e.g., "Jan", "Feb")
    const options = {
      month: "short",
    };
    const month = date.toLocaleString("en-IN", options, { timezone: "UTC" });

    // Extract day from the date
    const day = date.getUTCDate();

    // Configure options for time formatting in 12-hour format with UTC timezone
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
    };

    // Format time according to specified options
    const time = date.toLocaleString("en-IN", timeOptions);

    // Combine month, day and time into final format (e.g., "Jan 1 at 2:30 PM")
    return `${month} ${day} at ${time}`;
  };

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
      {/* Booking information section */}
      <div>
        <h4 className="text-lg font-semibold">{room.name}</h4>
        <p className="text-sm text-gray-600">
          <strong>Check In:</strong> {formatDate(booking.check_in)}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Check Out:</strong> {formatDate(booking.check_out)}
        </p>
      </div>
      {/* Action buttons section */}
      <div className="flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0">
        <Link
          href={`/rooms/${room.$id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700"
        >
          View Room
        </Link>
        <button
          href="#"
          className="bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto text-center hover:bg-red-700"
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

export default BookedRoomCard;
