const { createApp } = Vue

createApp({
  data() {
    return {
      section: 'new',
      tickets: [],
      newTicket: {
        titulo: '',
        categoria: '',
        descricao: '',
        observacoes: '',
        status: 'Aberto'
      }
    }
  },
  methods: {
    addTicket() {
      if (!this.newTicket.titulo || !this.newTicket.categoria || !this.newTicket.descricao) {
        alert("Preencha todos os campos obrigatórios")
        return
      }
      this.tickets.push({
        id: Date.now(),
        titulo: this.newTicket.titulo,
        categoria: this.newTicket.categoria,
        descricao: this.newTicket.descricao,
        observacoes: this.newTicket.observacoes,
        status: "Aberto"
      })
      this.newTicket = { titulo: '', categoria: '', descricao: '', observacoes: '', status: 'Aberto' }
      this.section = 'list'
    },
    updateStatus(ticket, status) {
      ticket.status = status
    }
  }
}).mount("#app")
