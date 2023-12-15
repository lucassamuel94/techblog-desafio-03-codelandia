// import { useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import { FormEvent, useState } from "react"

export const Contact = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputMessage, setInputMessage] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setDialogOpen(!dialogOpen)
  }

  const handleCloseDialog = () => {
    const limparDados = () => {
      setInputName('')
      setInputEmail('')
      setInputMessage('')
    }

    limparDados()
    setDialogOpen(false)
    document.getElementById('home')!.scrollIntoView()
  }

  return (
    <section className="bg-background">
      <div className="container py-16 md:py-20 space-y-12 lg:max-w-[544px]">
        <h3 className="font-bold text-2xl md:text-[28px] lg:text-[32px] leading-tight lg:text-center">Entre em contato</h3>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="grid gap-6">
          <input
            id="name"
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            placeholder="Nome"
            className="form-input rounded border border-dark-30 p-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-brand transition-all"
            required
          />
          <input
            id="email"
            type="text"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Email"
            className="form-input rounded border border-dark-30 p-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-brand transition-all"
            required
          />
          <textarea
            id='message'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Assunto da mensagem"
            className="form-input rounded border border-dark-30 p-4 focus:outline-none focus:border-none focus:ring-2 focus:ring-brand transition-all min-h-[150px]"
            required
          ></textarea>
          <button
            type="submit"
            className="py-3.5 px-8 w-full text-center bg-brand hover:bg-brand/90 text-dark-60 font-bold uppercase rounded transition-all duration-300 hover:-translate-y-1"
          >
            ENTRAR EM CONTATO
          </button>
        </form>


        <Dialog defaultOpen={false} open={dialogOpen} onOpenChange={handleCloseDialog}>
          <DialogContent className="bg-background border-brand">
            {/* <DialogHeader>
            </DialogHeader> */}
            <div className="flex items-center justify-between">
              <DialogTitle className="lg:text-xl text-brand" >Dados enviados com sucesso!</DialogTitle>

              <button
                onClick={handleCloseDialog}
                className="w-6 h-6 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:bg-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-dark-30 focus:ring-offset-2 disabled:pointer-events-none ">
                <X className="h-4 w-4 lg:w-6 h:h-6" />
                <span className="sr-only">Close Dialog</span>
              </button>
            </div>
            <DialogDescription className="text-sm md:text-base">
              Ual, agora você faz parte o seleto time vip da nossa comunidade.
              <br />
              Agora é só aguardar que em breve entraremos em contato!
            </DialogDescription>

          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}