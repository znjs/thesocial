import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    email: "adarsh.balika@gmail.com",
    password: "adarshBalika123",
    bio: "",
    profileImage: "",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Alex",
    lastName: "Stroganoff",
    username: "Alex",
    email: "Alex.Stroganoff@gmail.com",
    password: "alex123",
    bio: "",
    profileImage:
      "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Laurel",
    lastName: "Lance",
    username: "Laurel",
    email: "Laurel.Lance@gmail.com",
    password: "laurel123",
    bio: "",
    profileImage:
      "https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "znjs",
    lastName: "znjs",
    username: "znjs",
    email: "znjs.znjs@gmail.com",
    password: "znjs123",
    bio: "",
    profileImage: "https://pbs.twimg.com/profile_images/1414657404843663368/rXyiNk3G_400x400.jpg",
    website: "https://peerlist.io/jayasrikark",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
