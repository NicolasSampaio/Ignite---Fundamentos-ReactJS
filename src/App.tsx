import { useState } from "react";
import { Post } from "./components/Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

// author: { avatar_url: "", name: "", role: "" }
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nicolassampaio.png",
      name: "Nicolas Sampaio",
      role: "Desenvolvedor Web",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-14 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/nicolassampaio.png",
      name: "Matheus Garcias",
      role: "Cafetão",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-14 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
