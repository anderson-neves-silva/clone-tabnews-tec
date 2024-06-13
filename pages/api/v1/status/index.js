import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum");
  console.log(result);
  response.status(200).json({ chave: "Alunos do curso.dev são incríveis" });
}

export default status;
