const { app } = require("@azure/functions");
const openai = require("../../lib/openai");

app.http("getChatGPTSuggestion", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        "Write a random text prompt for DALL・E to generate an image, this prompt will be shown to the user, include details such as the genre and etc. options can include whatever you imagine as example: watercolor, photo-realistic, anime, 4k abstract, modern, black & white, 80s, cinematic, realistic, Wide Angle, dramatic, mist, smooth, etc. do not wrap the answer in quotes",
      max_tokens: 50,
      temperature: 0.8,
    });

    context.log(`Http function processed request for url "${request.url}"`);

    const responseText = response.data.choices[0].text;

    return { body: responseText };
  },
});
