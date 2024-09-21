const API_URL = '/api/chat';

// export const getChatResponse = async (userQuery) => {
//   try {
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ query: userQuery }),
//     });

//     const data = await response.json();
//     if (data && data.answer) {
//       return data.answer;
//     } else {
//       throw new Error('Invalid response from server');
//     }
//   } catch (error) {
//     console.error('Error fetching chatbot response:', error);
//     return 'Sorry, something went wrong. Please try again later.';
//   }
// };

// api.js
export const getChatResponse = async (text) => {
  try {
      const response = await fetch('http://127.0.0.1:5011/search', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text }),
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return await response.json();
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      return { response: 'Sorry, something went wrong. Please try again later.' };
  }
};

