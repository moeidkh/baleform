import { useContext, useState } from "react";
import styles from "./CreatePage.module.scss";
import { FormContext } from "../../context/DataContext";

const CreatePage = () => {
  const { data } = useContext(FormContext);

  const [name, setName] = useState("");
  console.log(">>>>>>>>>State", data);

  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.contentContainer}>
        <label htmlFor="name" className={styles.title}>
          اسم پرسشنامه ای که میخوایی رو وارد کن:
        </label>
        <input
          id="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          className={styles.input}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => {
            console.log(">>>>name");
            // setData({ id: v4(), name: name, questions: [] });
          }}
        >
          ذخیره
        </button>
      </div>
    </form>
  );
};

export default CreatePage;
