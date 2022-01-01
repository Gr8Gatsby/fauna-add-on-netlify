const faunadb = require("faunadb");

/* configure faunaDB Client with our secret */

const q = faunadb.query;
const client = new faunadb.Client({
  queryTimeout: 2000,
  timeout: 30,
  secret: process.env.FAUNADB_SERVER_SECRET
});


exports.handler = async (event, context) => {
  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body);

  console.log(`Processing 'todo-create' of ${data} on the database...`);
  const jokeItem = {
    data: data,
  };

  try {
    const response = await client.query(
      q.Create(
        q.Collection("jokes"), 
        "123"), jokeItem);

    console.log(response);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  } catch (error) {
    console.log("error", error);
    /* Error! return the error with statusCode 400 */
    return {
      statusCode: 422,
      body: JSON.stringify(error),
    };
  }
};
