<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sistema de Chamados - Vue.js</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
  <div id="app" class="w-full max-w-4xl p-6">
    <h1 class="text-3xl font-bold text-center mb-6">Sistema de Chamados</h1>
    <div class="flex justify-center gap-4 mb-6">
      <button 
        @click="section = 'new'" 
        :class="['px-4 py-2 rounded', section==='new' ? 'bg-blue-600 text-white' : 'bg-gray-200']">
        Novo Chamado
      </button>
      <button 
        @click="section = 'list'" 
        :class="['px-4 py-2 rounded', section==='list' ? 'bg-blue-600 text-white' : 'bg-gray-200']">
        Listar Chamados
      </button>
      <button 
        @click="section = 'reports'" 
        :class="['px-4 py-2 rounded', section==='reports' ? 'bg-blue-600 text-white' : 'bg-gray-200']">
        Relatórios
      </button>
    </div>
    <div v-if="section === 'new'" class="bg-white p-6 rounded-2xl shadow">
      <h2 class="text-xl font-semibold mb-4">Abrir Chamado</h2>
      <form @submit.prevent="addTicket" class="space-y-4">
        <input v-model="newTicket.titulo" type="text" placeholder="Título" class="w-full p-2 border rounded" required>
        <select v-model="newTicket.categoria" class="w-full p-2 border rounded" required>
          <option value="">Selecione uma categoria</option>
          <option>Suporte</option>
          <option>Financeiro</option>
          <option>RH</option>
          <option>Outro</option>
        </select>
        <textarea v-model="newTicket.descricao" placeholder="Descrição" class="w-full p-2 border rounded" required></textarea>
        <textarea v-model="newTicket.observacoes" placeholder="Observações" class="w-full p-2 border rounded"></textarea>
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Salvar Chamado</button>
      </form>
    </div>
    <div v-if="section === 'list'" class="bg-white p-6 rounded-2xl shadow">
      <h2 class="text-xl font-semibold mb-4">Chamados Abertos</h2>
      <div v-if="tickets.length === 0" class="text-gray-500">Nenhum chamado registrado.</div>
      <div v-for="ticket in tickets" :key="ticket.id" class="border rounded p-4 mb-4 shadow-sm">
        <h3 class="text-lg font-bold">{{ ticket.titulo }}</h3>
        <p class="text-sm text-gray-500">{{ ticket.categoria }}</p>
        <p class="mt-2">{{ ticket.descricao }}</p>
        <p v-if="ticket.observacoes" class="mt-2 p-2 bg-blue-50 rounded text-sm">
          <strong>Observações:</strong> {{ ticket.observacoes }}
        </p>
        <p class="mt-2 text-xs text-gray-400">Status: {{ ticket.status }}</p>
        <button @click="updateStatus(ticket, 'Concluído')" class="mt-2 px-3 py-1 bg-green-500 text-white rounded">Concluir</button>
        <button @click="updateStatus(ticket, 'Em andamento')" class="mt-2 px-3 py-1 bg-yellow-500 text-white rounded">Em Andamento</button>
      </div>
    </div>
    <div v-if="section === 'reports'" class="bg-white p-6 rounded-2xl shadow">
      <h2 class="text-xl font-semibold mb-4">Relatórios</h2>
      <table class="w-full border-collapse border">
        <thead>
          <tr class="bg-gray-200">
            <th class="border p-2">Métrica</th>
            <th class="border p-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-2">Total de Chamados</td>
            <td class="border p-2">{{ tickets.length }}</td>
          </tr>
          <tr>
            <td class="border p-2">Concluídos</td>
            <td class="border p-2">{{ tickets.filter(t => t.status === 'Concluído').length }}</td>
          </tr>
          <tr>
            <td class="border p-2">Em andamento</td>
            <td class="border p-2">{{ tickets.filter(t => t.status === 'Em andamento').length }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <script src="app.js"></script>
</body>
</html>
