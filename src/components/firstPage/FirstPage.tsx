import styles from "./FirstPage.module.scss";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const naviagate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.discriptionContainer}>
        <p className={styles.title}>سلام</p>
        <p className={styles.desc}>
          با بله فرم میتونید فرم های خودتونو در پیامرسان بله بسازیدکه میتونید در
          کانال ها یا گروه های خودتون پست کنید تا از جامعه یا مشتری های خودتون
          نظرسنجی کنید
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.button_filled} onClick={() => console.log("history")}>
          تاریخچه
        </div>
        <div className={styles.button} onClick={() => naviagate("/create")}>
          ایجاد فرم جدید
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
