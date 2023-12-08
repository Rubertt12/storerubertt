// api/contato.js
module.exports = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body

      // Aqui você pode realizar qualquer lógica necessária com os dados do formulário
      console.log("Dados recebidos:", { name, email, message })

      // Responder com uma mensagem de sucesso
      res.status(200).json({ success: true })
    } catch (error) {
      console.error("Erro ao processar dados:", error)
      res
        .status(500)
        .json({ success: false, error: "Erro interno do servidor" })
    }
  } else {
    // Responder a outros métodos de requisição com erro
    res.status(405).json({ error: "Método não permitido" })
  }
}
