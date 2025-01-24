import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormContext } from "../../context/DataContext";
import styles from "./Questions.module.scss";
import Button from "../../UI/ Button";
import { getQuestionInfo } from "../../services/api";

const Questions = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const surveyId = Number(location.state?.surveyId);
  const questionsId = location.state?.questionIds as number[];
  const { data } = useContext(FormContext);
  const [questionsData] = useState([]);
  const [questionIndex] = useState<number>(0);

  useEffect(() => {
    const questionsDetails = [];
    const fetchData = async () => {
      if (questionsId) {
        console.log(">>>>>>>>", questionsId);
        questionsId.map(async (qid) => {
          const question = await getQuestionInfo(surveyId, qid);
          questionsDetails.push(question);
        });
      }
    };
    fetchData();
  }, [questionsId, surveyId]);

  console.log("data", data, surveyId, location);
  return (
    <div className={styles.container}>
      <div className={styles.questions}>
        {questionsData && questionsData.length > 0 ? (
          <div>{questionsData[questionIndex].title}</div>
        ) : (
          <p className={styles.quetionsNotFound}>سوالی نداری هنوز!</p>
        )}
      </div>
      <div className={styles.buttons}>
        <Button
          text="اضافه کردن سوال جدید"
          type="outlined"
          onClick={() =>
            navigate("/createQuestion", { state: { id: surveyId } })
          }
        />
        <>
          {/* {(formData?.questions.length ?? 0) > 0 ? (
            <Button
              text="ویرایش پرسشنامه"
              type="filled"
              onClick={() => navigate("/create", { state: { id: surveyId } })}
            />
          ) : null} */}
        </>
      </div>
    </div>
  );
};

export default Questions;
