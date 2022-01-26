import React, { useEffect, useRef, useState } from "react";
import { Card } from "./Card/Card";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import styles from "./cardlist.css";
import { nanoid } from "nanoid";

export function CardList() {
  const token = useSelector<RootState>((state) => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const [nextAfter, setNextAfter] = useState("");

  const [flag, setFlag] = useState(0);
  const [isMoreBtnActive, setIsMoreBtnActive] = useState(false);

  const bottomOfList = useRef<HTMLDivElement>(null);

  async function load() {
    if (flag === 3) {
      setLoading(false);
      setIsMoreBtnActive(true);
      setFlag(0);
      return;
    }

    setLoading(true);
    setErrorLoading("");

    try {
      const {
        data: {
          data: { after, children },
        },
      } = await axios.get("https://oauth.reddit.com/best/", {
        headers: { Authorization: `bearer ${token}` },
        params: {
          after: nextAfter,
        },
      });

      setFlag((prevNumber) => prevNumber + 1);
      setNextAfter(after);
      setPosts((prevChildren) => prevChildren.concat(...children));
    } catch (error) {
      setErrorLoading(String(error));
    }

    setLoading(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) load();
      },
      {
        rootMargin: "100px",
      }
    );

    if (bottomOfList.current) observer.observe(bottomOfList.current);

    return () => {
      if (bottomOfList.current) observer.unobserve(bottomOfList.current);
    };
  }, [bottomOfList.current, nextAfter, token]);

  function handleMoreClick() {
    setIsMoreBtnActive(false);
    load();
  }

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div style={{ textAlign: "center" }}>Нет ни одного поста</div>
      )}

      {posts.map((post) => (
        <Card
          key={nanoid()}
          title={post.data.title}
          author={post.data.author}
          img={
            "https://cdn.dribbble.com/users/1325623/screenshots/15987513/media/13cbbc7435daa0663c9714ef4a15643f.png?compress=1&resize=400x300"
          }
        />
      ))}

      <div ref={bottomOfList} />

      {loading && <div style={{ textAlign: "center" }}>Загрузка...</div>}

      {isMoreBtnActive && (
        <button className={styles.more} onClick={handleMoreClick}>
          Загрузить еще
        </button>
      )}

      {errorLoading && (
        <div role="alert" style={{ textAlign: "center" }}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}
