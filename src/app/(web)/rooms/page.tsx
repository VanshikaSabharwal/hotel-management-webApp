"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

import { getRooms } from "@/libs/apis";
import { Room } from "@/models/room";
import Search from "@/components/Search/Search";
import RoomCard from "@/components/RoomCard/page";

const Rooms = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const roomType = searchParams.get("roomType");

    if (roomType) setRoomTypeFilter(roomType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);

  const fetchData = async () => {
    try {
      const rooms = await getRooms();
      console.log("Fetched rooms:", rooms); // Log fetched rooms
      return rooms;
    } catch (error) {
      console.error("Failed to fetch rooms:", error);
      return []; // Return empty array on error
    }
  };

  const { data, error, isLoading } = useSWR("get/hotelRooms", fetchData);

  if (error) {
    console.error("Error fetching data:", error);
    // Optionally, you could return a fallback UI here
  }

  // Optionally, render loading or error states
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No rooms available</div>;

  const filterRooms = (rooms: Room[]) => {
    return rooms.filter((room) => {
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== "all" &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }

      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    });
  };

  const filteredRooms = filterRooms(data || []); // Filter rooms based on data and filters
  console.log("filteredRooms:", filteredRooms); // Log filtered rooms for debugging

  return (
    <div className="container mx-auto pt-10">
      <Search
        roomTypeFilter={roomTypeFilter}
        searchQuery={searchQuery}
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex mt-20 justify-between flex-wrap">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => <RoomCard key={room._id} room={room} />)
        ) : (
          <div>No rooms found</div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
