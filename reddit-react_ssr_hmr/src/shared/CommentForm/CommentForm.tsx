import React from "react";
import styles from "./commentform.css";
import { Form, Field, FormikTouched, FormikErrors } from "formik";
import { Comments } from "./Comments";

interface ICommentFormProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  innerRef: React.Ref<HTMLTextAreaElement>;
  touched: FormikTouched<any>;
  errors: FormikErrors<any>;
}

export function CommentForm({
  value,
  onChange,
  innerRef,
  touched,
  errors,
}: ICommentFormProps) {
  return (
    <div>
      <Form className={styles.form}>
        <Field
          component="textarea"
          name="comment"
          innerRef={innerRef}
          rows={4}
          className={styles.input}
          value={value}
          onChange={onChange}
        />
        {touched.comment && errors.comment && <div>{errors.comment}</div>}
        <button type="submit" className={styles.button}>
          Комментировать
        </button>
      </Form>
      <div>
        <Comments
          name={"Михаил Рогов"}
          created={"1 час назад"}
          league={"Лига юристов"}
          comment={
            "Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно."
          }
        >
          <Comments
            name={"Вика Салмина"}
            created={"1 час назад"}
            league={"Лига социологов"}
            comment={
              "Принимая во внимание показатели успешности, разбавленное изрядной долей эмпатии, рациональное мышление прекрасно подходит для реализации анализа существующих паттернов поведения. Равным образом, убеждённость некоторых оппонентов, в своём классическом представлении."
            }
          >
            <Comments
              name={"Зураб Желев"}
              created={"1 час назад"}
              league={"Лига политологов"}
              comment={
                "А также диаграммы связей неоднозначны и будут функционально разнесены на независимые элементы. Следует отметить, что начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения."
              }
            ></Comments>
          </Comments>
        </Comments>
      </div>
    </div>
  );
}
