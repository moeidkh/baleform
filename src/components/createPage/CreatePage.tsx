import { useState } from "react";
import styles from "./CreatePage.module.scss";
// import { FormContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
// import { createSurvey, SurveysType } from "../../services/api";

const CreatePage = () => {
  // const { data, setData } = useContext(FormContext);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
      {!loading ? (
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
      ) : (
        <div className={styles.loading}> لطفا کمی صبر کنید...</div>
      )}
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          disabled={loading}
          onClick={async () => {
            if (name.trim().length > 0) {
              setLoading(true);
              // const newSurvey = (await createSurvey(
              //   name,
              //   data.id
              // )) as SurveysType;
              // console.log(">>>>>>>>>>>newSurvey", );
              // setData((prev) => {
              //   return {
              //     ...prev,
              //     surveys: [...prev.surveys, newSurvey],
              //   };
              // });
              setLoading(false);
              navigate("/questions", {
                state: { from: "/create", data: { surveyId: 1234 } },
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
