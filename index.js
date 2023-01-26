const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "sk-",
});
const openai = new OpenAIApi(configuration);
async function init(params) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "suggesst some unique name of website for develoepr and help",
        temperature: 0,
        max_tokens: 500,
    });
    console.log(response.data); 
}
init();
