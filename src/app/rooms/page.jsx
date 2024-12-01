'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

const RoomPage = () => {
  const [roomsData, setRoomsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch rooms data
  const fetchRooms = async () => {
    try {
      const res = await fetch("/rooms.json"); // Ensure '/rooms.json' is served in the public directory
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setRoomsData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="bg-[#E2E1DF] min-h-screen text-black">
      <div className="container mx-auto">
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            {/* Section Header */}
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Rooms</h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                Explore our curated list of luxurious rooms with modern amenities.
              </p>
            </div>

            {/* Room Cards */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {roomsData.map((room) => (
                <div
                  key={room.roomId}
                  className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-lg w-full"
                >
                  <div className="group relative block h-60 overflow-hidden bg-gray-100">
                    <Image
                      src={room.image} // Static image for all rooms
                      loading="lazy"
                      width={1920}
                      height={1600}
                      alt={room.roomType}
                      className="absolute inset-0 object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="mb-4 text-lg font-semibold text-gray-800">{room.roomType}</h2>
                    <p className="text-gray-500 mb-2">
                      <strong>Bed Type:</strong> {room.bedType}
                    </p>
                    <p className="text-gray-500 mb-2">
                      <strong>Max Occupancy:</strong> {room.maxOccupancy} people
                    </p>
                    <p className="text-gray-500 mb-2">
                      <strong>Room Size:</strong> {room.roomSize}
                    </p>
                    <p className="text-gray-500 mb-2">
                      <strong>View:</strong> {room.view}
                    </p>
                    <p className="text-gray-500 mb-2">
                      <strong>Bathroom Type:</strong> {room.bathroomType}
                    </p>
                    <p className="text-gray-500 mb-4">
                      <strong>Floor:</strong> {room.floor}
                    </p>
                    <p className="text-gray-500">
                      <strong>Additional Details:</strong> {room.additionalDetails.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomPage;
