import axios from "axios";

import { CreateBookingDto, Room } from "@/models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";

export async function getFeaturedRoom() {
  const result = await sanityClient.fetch<Room>(
    queries.getFeaturedRoomQuery,
    {},
    { cache: "no-cache" }
  );

  return result;
}

export async function getRooms() {
  const result = await sanityClient.fetch<Room[]>(
    queries.getRoomsQuery,
    {},
    { cache: "no-cache" }
  );
  return result;
}

export async function getRoom(slug: string) {
  const result = await sanityClient.fetch<Room>(
    queries.getRoom,
    { slug },
    { cache: "no-cache" }
  );

  return result;
}

export const CreateBooking = async ({
  adults,
  checkinDate,
  checkoutDate,
  children,
  discount,
  hotelRoom,
  numberOfDays,
  totalPrice,
  user,
}: CreateBookingDto) => {
  const mutation = {
    mutation: [
      {
        create: { _type: "booking", user: { _type: "reference", _ref: user } },
        hotelRoom: { _type: "reference", _ref: hotelRoom },
        checkinDate,
        checkoutDate,
        numberOfDays,
        adults,
        children,
        totalPrice,
        discount,
      },
    ],
  };
  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANTY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );
  return data;
};
