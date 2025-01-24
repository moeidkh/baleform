import { useContext, useState } from "react";
import styles from "./CreatePage.module.scss";
import { FormContext } from "../../context/DataContext";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const { data, setData } = useContext(FormContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const id = v4();

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
            if (name.trim().length > 0) {
              setData([...data, { id, name: name, questions: [] }]);
              navigate("/questions", {
                state: { from: "/create", id },
              });
            } else {
              alert("نام را وارد کنید");
            }
          }}
        >
          ذخیره
        </button>
      </div>
    </form>
  );
};

export default CreatePage;
