const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post("/api/contato", (req, res) => {
  const { name, email, message } = req.body

  // Configurações do nodemailer (substitua pelos seus próprios detalhes)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ruberttramires4@gmail.com",
      pass: "K0l@r27@ad",
    },
  })

  const mailOptions = {
    from: "seu-email@gmail.com",
    to: "seu-email@gmail.com", // Seu e-mail de recebimento
    subject: "Nova mensagem do formulário de contato",
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Erro ao enviar e-mail:", error)
      res
        .status(500)
        .json({ success: false, error: "Erro interno do servidor" })
    } else {
      console.log("E-mail enviado:", info.response)
      res.status(200).json({ success: true })
    }
  })
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
