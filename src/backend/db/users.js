import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Alex",
    lastName: "Stroganoff",
    username: "Alex@gmail.com",
    password: "alex123",
    bio: "",
    profileImage:
      "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Laurel",
    lastName: "Lance",
    username: "Laurel@gmail.com",
    password: "test123",
    bio: "",
    profileImage:
      "https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
  },
  {
    _id: uuid(),
    firstName: "test",
    lastName: "test",
    username: "test@gmail.com",
    password: "test123",
    bio: "",
    profileImage:
      "https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    website: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
  },
  {
    _id: uuid(),
    firstName: "znjs",
    lastName: "znjs",
    username: "znjs@znjs.com",
    password: "znjs123",
    bio: "Electronics engineer converted to Frontend dev ⚛️",
    profileImage: "https://pbs.twimg.com/profile_images/1414657404843663368/rXyiNk3G_400x400.jpg",
    website: "https://peerlist.io/jayasrikark",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Neil patrick",
    lastName: "harris",
    username: "neil@gmail.com",
    password: "neil123",
    bio: "It's gonna be legen—wait for it—dary",
    profileImage: "https://media1.fdncms.com/saltlake/imager/u/zoom/14330770/barney_stinson.jpg",
    website: "https://how-i-met-your-mother.fandom.com/wiki/Barney_Stinson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
  },
];
