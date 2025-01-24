import axios from "axios";

export type questionType = {
  title: string;
  html_title: string;
  type: 1;
  image_video_active: false;
  image_or_video: 1;
  image_path: string;
  image_name: string;
  video_url: string;
  show_charts: true;
  description_text_active: false;
  description_text: string;
  html_description_text: string;
  related_group: 0;
  question_number_is_hidden: false;
  prior_question: 0;
  responding_duration: string;
  allow_multiple_select: false;
  max_selectable_choices: 2;
  min_selectable_choices: 2;
  vertical_choices: false;
  answer_required: false;
  randomize: false;
  correct_choice_id: 0;
  correct_choice: {
    id: 0;
    name: string;
    alt_name: string;
    hidden: false;
    choice_type: 1;
  };
  choices: {
    id: number;
    name: string;
    alt_name: string;
    hidden: false;
    choice_type: 1;
  }[];
};

const baseQuestion: questionType = {
  title: "",
  html_title: "",
  type: 1,
  image_video_active: false,
  image_or_video: 1,
  image_path: "",
  image_name: "",
  video_url: "",
  show_charts: true,
  description_text_active: false,
  description_text: "",
  html_description_text: "",
  related_group: 0,
  question_number_is_hidden: false,
  prior_question: 0,
  responding_duration: "",
  allow_multiple_select: false,
  max_selectable_choices: 2,
  min_selectable_choices: 2,
  vertical_choices: false,
  answer_required: false,
  randomize: false,
  correct_choice_id: 0,
  correct_choice: {
    id: 0,
    name: "",
    alt_name: "",
    hidden: false,
    choice_type: 1,
  },
  choices: [
    {
      id: 0,
      name: "",
      alt_name: "",
      hidden: false,
      choice_type: 1,
    },
  ],
};

export type SurveyInfoType = {
  id: number;
  name: string;
  language: number;
  active: boolean;
  questions: {
    id: number;
    order: number;
    title: string;
    type: number;
    deleted: boolean;
  }[];
  can_active: boolean;
  massage_text: string | null;
  views: number;
  submitted_responses: number;
  closed: boolean;
  is_stopped: boolean;
  is_not_started: boolean;
  deleted: boolean;
  preview_code: string;
  url_slug: string | null;
  report_code: string;
  score_charts_active: boolean;
  theme: number;
  background_image_config: string | null;
  created_date: string;
  parent: null;
  folder: {
    id: number;
    order: number;
    name: string;
    shared_by: unknown;
    shared_with: unknown;
  };
};

export type SurveysType = {
  id: number;
  name: string;
  folder_id: number;
  language: 2;
  created_date: string;
  active: boolean;
  can_active: boolean;
  is_stopped: boolean;
  views: number;
  submitted_responses: number;
  preview_code: string;
  report_code: string;
  url_slug: string | null;
  is_template: boolean;
  has_question: boolean;
  theme?: object;
  subdomain: string | null;
  domain: string | null;
  last_response_date_time: string | null;
  labels: string | null;
  tags: string[];
};
export type folderType = {
  id: number;
  order: 0;
  name: string;
  surveys: SurveysType[];
  shared_by: null;
  shared_with: null;
};

const headers = {
  headers: {
    Authorization: "API-Key 1106f872a1255280bf6f581e9682709b19cd3004",
    "Content-Type": "application/json",
  },
};

const BASE_URL = "/api";
// const BASE_URL = "https://survey.porsline.ir/api";

const getFolders = async () => {
  const response = await axios.get(`${BASE_URL}/folders`, headers);
  const data = await response.data;
  return data;
};

const createFolders = async (name: string) => {
  const response = await axios.post(`${BASE_URL}/forlders`, { name }, headers);
  const data = await response.data;
  return data;
};

const createSurvey = async (name: string, folderId: number) => {
  const response = await axios.post(
    `${BASE_URL}/surveys/`,
    { name, folder: folderId },
    headers
  );
  const data = await response.data;
  return data;
};

const getSurvey = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/surveys/${id}`, headers);
  const data = await response.data;
  return data;
};

const createQuestion = async (surveyId: number, question: questionType) => {
  const response = await axios.post(
    `${BASE_URL}/surveys/${surveyId}/questions`,
    { question },
    headers
  );
  const data = await response.data;
  return data;
};

const getQuestions = async (surveyId: number) => {
  const response = await axios.get(`${BASE_URL}/surveys/${surveyId}`, headers);
  const data = await response.data;
  return data;
};

const getQuestionInfo = async (surveyId: number, id: number) => {
  const response = await axios.get(
    `${BASE_URL}/surveys/${surveyId}/questions/${id}`,
    headers
  );

  const data = await response.data;
  return data;
};

export {
  getFolders,
  createFolders,
  getSurvey,
  createSurvey,
  createQuestion,
  getQuestions,
  getQuestionInfo,
  baseQuestion,
};

// const data = await fetch("/api/folders/", {
//   method: "GET",
//   headers: {
//     Authorization: "API-Key 1106f872a1255280bf6f581e9682709b19cd3004",
//     "Content-Type": "application/json",
//   },
// });
