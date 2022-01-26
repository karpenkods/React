import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { CommentForm } from "../../../../CommentForm";
import { EIcons, Icon } from "../../../../Icon";
import styles from "./commentsbutton.css";

interface ICommentsButtonProps {
  text: string;
  onClose?: () => void;
  author?: string;
}

export function CommentsButton(props: ICommentsButtonProps) {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const [value, setValue] = useState(`${props.author}, ...`);

  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(event: FormEvent) {
    event?.preventDefault();
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [isAnswerOpen]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !divRef.current?.contains(event.target)
      ) {
        setIsAnswerOpen(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className={styles.container} ref={divRef}>
      <button
        className={styles.commentsButton}
        onClick={() => setIsAnswerOpen(true)}
      >
        <Icon name={EIcons.answer} />
        <span className={styles.commentsNumber}> {props.text} </span>
      </button>

      {isAnswerOpen && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
            className={styles.input}
            ref={inputRef}
            value={value}
            onChange={handleChange}
          >
            {}
          </textarea>
          <button type="submit" className={styles.button}>
            Комментировать
          </button>
        </form>
      )}
    </div>
  );
}
