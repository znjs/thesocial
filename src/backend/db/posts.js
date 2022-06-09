import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Had a wonderful day in bangalore!!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "znjs@znjs.com",
    profileImage: "https://pbs.twimg.com/profile_images/1414657404843663368/rXyiNk3G_400x400.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "Laurel@gmail.com",
        profileImage:
          "https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Alex@gmail.com",
        profileImage:
          "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Random post on a random day",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Laurel@gmail.com",
    profileImage:
      "https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    comments: [
      {
        _id: uuid(),
        username: "Alex@gmail.com",
        profileImage:
          "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",

        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Laurel@gmail.com",
        profileImage:
          "https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "znjs@znjs.com",
        profileImage:
          "https://pbs.twimg.com/profile_images/1414657404843663368/rXyiNk3G_400x400.jpg",
        text: "Random comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum      numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "znjs@znjs.com",
    profileImage: "https://pbs.twimg.com/profile_images/1414657404843663368/rXyiNk3G_400x400.jpg",
    comments: [
      {
        _id: uuid(),
        username: "Alex@gmail.com",
        profileImage:
          "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Laurel@gmail.com",
        profileImage:
          "https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Javascript rocks",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Laurel@gmail.com",
    profileImage:
      "https://images.unsplash.com/photo-1584270413639-d5ee397272cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    comments: [
      {
        _id: uuid(),
        username: "znjs@znjs.com",
        profileImage:
          "https://pbs.twimg.com/profile_images/1414657404843663368/rXyiNk3G_400x400.jpg",
        text: "JS Rocks",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Javascript rocks",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Alex@gmail.com",
    profileImage:
      "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Javascript!! It's gonna be legen—wait for it—dary",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "neil@gmail.com",
    profileImage: "https://media1.fdncms.com/saltlake/imager/u/zoom/14330770/barney_stinson.jpg",
    comments: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
