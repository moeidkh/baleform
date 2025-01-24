import { useContext, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormContext } from "../../context/DataContext";
import styles from "./Questions.module.scss";
import Button from "../../UI/ Button";

const Questions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formId = (location.state?.id as string | null) ?? "";
  const { data } = useContext(FormContext);

  const formData = useMemo(() => {
    return data.find((item) => item.id === formId);
  }, [data, formId]);

  console.log("data", data, formId, location);
  return (
    <div className={styles.container}>
      <div className={styles.questions}>
        {formData && formData.questions.length > 0 ? (
          formData.questions.map(
            (question: {
              title: string;
              options: string[];
              selectedOption?: number;
            }) => <div>{question.title}</div>
          )
        ) : (
          <p className={styles.quetionsNotFound}>سوالی نداری هنوز!</p>
        )}
      </div>
      <div className={styles.buttons}>
        <Button
          text="اضافه کردن سوال جدید"
          type="outlined"
          onClick={() => navigate("/createQuestion", { state: { id: formId } })}
        />
        <>
          {(formData?.questions.length ?? 0) > 0 ? (
            <Button
              text="ویرایش پرسشنامه"
              type="filled"
              onClick={() => navigate("/create", { state: { id: formId } })}
            />
          ) : null}
        </>
      </div>
    </div>
  );
};

export default Questions;
