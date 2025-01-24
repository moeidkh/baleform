import { ChangeEvent, useState } from "react";
import styles from "./CreateQuestion.module.scss";
import { useLocation } from "react-router-dom";

interface FormState {
  formId: number | null;
  question: string;
  options: string[];
  selectedOption: string | null;
}

const CreateQuestion = () => {
  const location = useLocation();
  const surveyId = location.state?.data?.surveyId;
  console.log("@##$%$%^$%^", surveyId);
  const [formState, setFormState] = useState<FormState>({
    formId: surveyId,
    question: "",
    options: ["", ""],
    selectedOption: null,
  });
  const [loading, setLoading] = useState(false);

  // Handle question input change
  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      question: event.target.value,
    }));
  };

  // Handle option input change
  const handleOptionChange = (index: number, value: string) => {
    console.log("index", index, value);
    const updatedOptions = [...formState.options];
    updatedOptions[index] = value;
    setFormState((prevState) => ({
      ...prevState,
      options: updatedOptions,
    }));
  };

  // Handle radio button selection
  const handleOptionSelect = (value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      selectedOption: value,
    }));
  };

  // Add a new option field
  const addOption = () => {
    setFormState((prevState) => ({
      ...prevState,
      options: [...prevState.options, ""],
    }));
  };

  return (
    <div className={styles.form}>
      <div className={styles.formContent}>
        <h3 className={styles.formTitle}>بخش طراحی سوال</h3>

        {!loading ? (
          <>
            <div className={styles.questionInput}>
              <label
                htmlFor="question"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                سوال:
              </label>
              <input
                id="question"
                type="text"
                placeholder="سوال تو بنویس"
                value={formState.question}
                onChange={handleQuestionChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.optionsInput}>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                گزینه ها:
              </label>
              {formState.options.map((option, index) => (
                <div className={styles.option} key={index}>
                  <input
                    type="text"
                    placeholder={`گزینه ${index + 1}`}
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className={styles.input}
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFormState((prevState) => ({
                        ...prevState,
                        options: prevState.options.filter(
                          (_, i) => i !== index
                        ),
                      }))
                    }
                    className={styles.button_error}
                  >
                    حذف
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addOption}
                className={styles.button_filled}
              >
                اضافه کردن گزینه
              </button>
            </div>

            {formState.options.length > 0 && (
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: "0.5rem" }}>
                  پیش نمایش گزینه هایی که گذاشتی:
                </label>
                {formState.options.map((option, index) => (
                  <div key={index} style={{ marginBottom: "0.5rem" }}>
                    <label>
                      <input
                        type="radio"
                        name="options"
                        value={option}
                        checked={formState.selectedOption === option}
                        onChange={() => handleOptionSelect(option)}
                        style={{ marginRight: "0.5rem" }}
                      />
                      &nbsp;
                      {option || `گزینه ${index + 1}`}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div>لطفا صبر کنید...</div>
        )}
      </div>

      <div className={styles.submitButtonContainer}>
        <button
          className={styles.button}
          onClick={async () => {
            console.log("clicked", surveyId);
            setLoading(false)
            // const question = await createQuestion(surveyId, {
            //   ...baseQuestion,
            //   title: formState.question,
            //   choices: formState.options.map((option, index) => ({
            //     alt_name: "",
            //     name: option.trim(),
            //     id: index,
            //     hidden: false,
            //     choice_type: 1,
            //   })),
            // });

            // console.log("question", question);
            alert(
              `سوال: ${formState.question}\nگزینه های انتخاب شده: ${formState.selectedOption}`
            );
          }}
        >
          ثبت سوال
        </button>
      </div>
    </div>
  );
};

export default CreateQuestion;
