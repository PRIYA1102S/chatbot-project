// chatService.js
import { fetchChatResponse } from '../utils/api'
import { normalizeQuery, getAnswerFromKeywords } from '../utils/nlp';
import { faqData } from '../utils/data';

export const handleChatQuery = async (userQuery) => {
  const normalizedQuery = normalizeQuery(userQuery);

  const keywordBasedAnswer = getAnswerFromKeywords(normalizedQuery, faqData);
  console.log(keywordBasedAnswer);
  if (keywordBasedAnswer) {
    return keywordBasedAnswer;
  }


  // const apiAnswer = await fetchChatResponse(userQuery);
  const apiAnswer = {response: "api call"};
  
  return apiAnswer.response;
};
