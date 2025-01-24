import { useContext, useState } from "react";
import styles from "./Surveys.module.scss";
import { FormContext } from "../../context/DataContext";
import { getQuestions, SurveyInfoType } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Surveys = () => {
  const { data } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.surveysContainer}>
      <div className={styles.surveys}>
        <h1 className={styles.title}>پرسشنامه ها</h1>
        <div className={styles.surveysList}>
          {data &&
            !loading &&
            data.surveys.length > 0 &&
            data.surveys.map((survey) => {
              return (
                <div
                  key={survey.id}
                  className={styles.survey}
                  onClick={async () => {
                    setLoading(true);
                    const surveyInfo = (await getQuestions(
                      survey.id
                    )) as SurveyInfoType;
                    console.log("@#@#@#@#@", surveyInfo);
                    const ids = surveyInfo.questions.map(
                      (question) => question.id
                    );
                    setLoading(false);
                    navigate("/questions", {
                      state: {
                        from: "/surveys",
                        questionIds: ids,
                        surveyId: survey.id,
                      },
                    });
                  }}
                >
                  <p className={styles.button_filled}>{survey.name}</p>
                </div>
              );
            })}
        </div>
        {/* <p className={styles.desc}>هنوز پرسشنامه ای نداری</p> */}
      </div>
    </div>
  );
};

export default Surveys;
