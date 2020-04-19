import React, { Component } from "react";

import PostItem from "./PostItem";

import goku from "../assets/perfil.jpg";
import vegeta from "../assets/vegeta.jpg";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Goku / Kakarotto",
          avatar: goku,
        },
        date: "04 abril 2020 às 14:00",
        content: "Vamos treinar vegeta!",
        comments: [
          {
            id: 2,
            author: {
              name: "Principe do Sayajins",
              avatar: vegeta,
            },
            content: "Não treino com sayajin de classe baixa!",
          },
          {
            id: 1,
            author: {
              name: "Goku / Kakarotto",
              avatar: goku,
            },
            content: "Fala isso porque sou mais forte hahaha!",
          },
        ],
      },
      {
        id: 1,
        author: {
          name: "Goku / Kakarotto",
          avatar: goku,
        },
        date: "05 abril 2020 às 16:30",
        content: "Vegeta não sabe se tornar super sayajin 3!",
        comments: [
          {
            id: 2,
            author: {
              name: "Principe dos Sayajins",
              avatar: vegeta,
            },
            content: "Nunca tentei",
          },
        ],
      },
      {
        id: 1,
        author: {
          name: "Goku / Kakarotto",
          avatar: goku,
        },
        date: "06 abril 2020 às 20:35",
        content:
          "Se eu me fundir com o vegeta, teremos que criar um novo facebook?",
        comments: [
          {
            id: 2,
            author: {
              name: "Principe dos Sayajins",
              avatar: vegeta,
            },
            content: "Eu não vou me fundir com você!!",
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map((post) => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
