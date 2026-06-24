exports.handler = async (event) => {
  try {
    const API_URL='/.netlify/functions/get-reservations';
const SAVE_URL='/.netlify/functions/save-reservation';
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: event.body,
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};
