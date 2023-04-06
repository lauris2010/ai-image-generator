export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://ai-images-generator-app.azurewebsites.net/api/getchatgptsuggestion",
      {
        cache: "no-store",
      }
    );
    const textData = await response.text();
    console.log('text',JSON.stringify(textData.trim()))
    return new Response(JSON.stringify(textData.trim()), {
      status: 200,
    });
  } catch (err) {
    console.error("An error occurred:", err);
    return new Response("An error occurred while fetching data", {
      status: 500,
    });
  }
}