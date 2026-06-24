exports.handler = async (event) => {
  try {
    const API_URL='/.netlify/functions/get-reservations';
const SAVE_URL='/.netlify/functions/save-reservation';
      {
     exports.handler = async (event) => {

 try {

  const response = await fetch(
   "https://script.google.com/macros/s/AKfycbwO9TUVxMF0N9c3m2EURyp3C7iT3OeZ3tsfJURnfB8iItqYa5qjpuCyH5QxhtTf-6s/exec",
   {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
    },
    body: event.body
   }
  );

  const text = await response.text();

  return {
   statusCode: 200,
   headers: {
    "Access-Control-Allow-Origin": "*"
   },
   body: text
  };

 } catch (error) {

  return {
   statusCode: 500,
   body: JSON.stringify({
    success:false,
    error:error.message
   })
  };

 }

};
};
