exports.handler = async () => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwO9TUVxMF0N9c3m2EURyp3C7iT3OeZ3tsfJURnfB8iItqYa5qjpuCyH5QxhtTf-6s/exec"
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
