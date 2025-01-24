import { ChangeEvent, useState } from "react";
import styles from "./CreateQuestion.module.scss";
import { useLocation } from "react-router-dom";

interface FormState {
  formId: string;
  question: string;
  options: string[];
  selectedOption: string | null;
}

const CreateQuestion = () => {
  const location = useLocation();
  const formId = (location.state?.id as string | null) ?? "";
  const [formState, setFormState] = useState<FormState>({
    formId,
    question: "",
    options: ["", ""],
    selectedOption: null,
  });

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

  // Handle form submission
  const handleSubmit = () => {
    alert(
      `سوال: ${formState.question}\nگزینه های انتخاب شده: ${formState.selectedOption}`
    );
  };
  return (
    <div className={styles.form}>
      <div className={styles.formContent}>
        <h3 className={styles.formTitle}>بخش طراحی سوال</h3>

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
            <div className={styles.option} key={option + index}>
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
                    options: prevState.options.filter((_, i) => i !== index),
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
      </div>

      <div className={styles.submitButtonContainer}>
        <button
          type="submit"
          disabled={!formState.question || !formState.selectedOption}
          className={styles.button}
          onClick={handleSubmit}
        >
          ثبت سوال
        </button>
      </div>
    </div>
  );
};

export default CreateQuestion;
