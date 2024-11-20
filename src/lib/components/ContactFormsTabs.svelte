<script lang="ts">
  import Icon from "@iconify/svelte";

  let activeTab = "info";
  let infoForm = { name: "", email: "", subject: "", message: "" };
  let supportForm = { name: "", email: "", subject: "", message: "" };

  // Variable para manejar el formulario activo
  $: activeForm = activeTab === "info" ? infoForm : supportForm;

  function handleInfoSubmit(event) {
    event.preventDefault();
    console.log("Enviando formulario de información a: info@example.com");
    console.log(infoForm);
    // Aquí iría la lógica para enviar el formulario de información
  }

  function handleSupportSubmit(event) {
    event.preventDefault();
    console.log("Enviando formulario de soporte a: support@example.com");
    console.log(supportForm);
    // Aquí iría la lógica para enviar el formulario de soporte
  }

  function handleSubmit(event) {
    if (activeTab === "info") {
      handleInfoSubmit(event);
    } else {
      handleSupportSubmit(event);
    }
  }
</script>

<div class="p-3 bg-white shadow-xl rounded-md">
  <div class="grid grid-cols-2 mb-6">
    <button
      class="flex items-center justify-center py-2 px-2 md:px-4 font-medium text-sm focus:outline-none transition-colors duration-200 rounded-l-full space-x-2 {activeTab ===
      'info'
        ? 'bg-medium-turquoise text-prussian-blue'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
      on:click={() => (activeTab = "info")}
    >
      <Icon icon="iconoir:chat-bubble-warning" class="w-3.5 h-3.5 md:w-5 md:h-5" />
      <p class="font-montserrat font-semibold text-sm md:text-base">Información</p>
    </button>
    <button
      class="flex items-center justify-center py-2 px-2 md:px-4 font-medium text-sm focus:outline-none transition-colors duration-200 rounded-r-full space-x-2 {activeTab ===
      'support'
        ? 'bg-medium-turquoise text-prussian-blue'
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
      on:click={() => (activeTab = "support")}
    >
      <p class="font-montserrat font-semibold text-sm md:text-base">Soporte</p>
      <Icon icon="iconoir:chat-bubble-question" class="w-3.5 h-3.5 md:w-5 md:h-5" />
    </button>
  </div>
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div class="space-y-2">
      <label for="name" class="block text-sm font-medium text-gray-700"
        >Nombre</label
      >
      <input
        id="name"
        type="text"
        bind:value={activeForm.name}
        required
        class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-0 focus:ring-2 focus:ring-offset focus:ring-medium-turquoise"
      />
    </div>
    <div class="space-y-2">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Correo electrónico</label
      >
      <input
        id="email"
        type="email"
        bind:value={activeForm.email}
        required
        class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset focus:ring-medium-turquoise focus:border-0"
      />
    </div>
    <div class="space-y-2">
      <label for="subject" class="block text-sm font-medium text-gray-700"
        >Asunto</label
      >
      <input
        id="subject"
        type="text"
        bind:value={activeForm.subject}
        required
        class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset focus:ring-medium-turquoise focus:border-0"
      />
    </div>
    <div class="space-y-2">
      <label for="message" class="block text-sm font-medium text-gray-700"
        >Mensaje</label
      >
      <textarea
        id="message"
        bind:value={activeForm.message}
        required
        class="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset focus:ring-medium-turquoise focus:border-0 min-h-[100px]"
      ></textarea>
    </div>
    <button
      type="submit"
      class="w-full flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium bg-blue-sapphire hover:bg-prussian-blue text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-medium-turquoise transition-colors duration-200 ease-in-out"
    >
      <p class="font-montserrat font-semibold">
        {activeTab === "info"
          ? "Enviar consulta"
          : "Enviar solicitud de soporte"}
      </p>
    </button>
  </form>
</div>
