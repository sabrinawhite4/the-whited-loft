<script setup>
const formItems = [
  {
    name: "First Name",
    label: "First Name",
    type: "text",
    placeholder: "Enter your first name",
    required: true,
  },
  {
    name: "Last Name",
    label: "Last Name",
    type: "text",
    placeholder: "Enter your last name",
    required: true,
  },
  {
    name: "Email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "Phone",
    label: "Phone",
    type: "tel",
    placeholder: "Enter your phone number",
    required: true,
  },
  {
    name: "Estimated Headcount",
    label: "Estimated Headcount",
    type: "number",
    placeholder: "Enter your estimated headcount",
    required: true,
  },
  {
    name: "Event Date",
    label: "Event Date",
    type: "date",
    placeholder: "Enter your event date",
    required: true,
  },
  {
    name: "Event",
    label: "Event",
    type: "dropdown",
    placeholder: "Enter your message",
    required: true,
  },
  {
    name: "What city do you currently live in?",
    label: "What city do you currently live in?",
    type: "text",
    placeholder: "Enter your city",
    required: true,
  },
  {
    name: "How did you hear about us?",
    label: "How did you hear about us?",
    type: "checkbox",
    placeholder: "how did you hear about us?",
    required: true,
  },
];
const checkOptions = [
  {
    name: "Social Media",
    value: "Social Media",
  },
  {
    name: "Google",
    value: "Google",
  },
  {
    name: "Frient/Family",
    value: "Frient/Family",
  },
  {
    name: "Previous Event",
    value: "Previous Event",
  },
  {
    name: "Other",
    value: "Other",
  },
];
</script>

<template>
  <main>
    <div
      class="contact-wrapper text-black flex flex-col text-center justify-center items-center"
    >
      <h1 class="contact-text text-6xl mb-20">Contact Us</h1>
      <h3 class="contact-text text-4xl mb-3">Book a tour here!</h3>
      <h4>1111 White Loft Ln Provo, UT 84604</h4>
      <span class="flex flex-row justify-evenly p-2">
        <a href="mailto:thewhiteloft@gmail.com"> thewhiteloft@gmail.com </a>
        <h4 class="px-3">|</h4>
        <a class="phone-number" href="tel:0000000000">
          Call us at 000-000-0000</a
        >
      </span>
    </div>
    <form
      class="text-black text-center bg-[#9caf887e] w-3/4 border border-black ml-auto mr-auto p-4 mt-28 max-h-full rounded-sm"
    >
      <h2 class="text-black text-3xl">The White Loft Tour!</h2>
      <h4>
        We would love to be apart of your wedding or event! Please fill out the
        form below and we'll get back to you soon!
      </h4>
      <div class="flex flex-col">
        <span class="flex flex-col" v-for="item in formItems" :key="item.name">
          <label
            class="text-black text-lg text-center mb-2 mt-4 mr-auto ml-auto"
            for="name"
            >{{ item.name }}</label
          >
          <input
            class="text-black text-2xl border flex-row border-black w-3/4 ml-auto mr-auto"
            :type="item.type"
            :id="item.name"
            :name="item.name"
            :placeholder="item.placeholder"
          />
        </span>
        <input
          class="bg-[#F79489] px-10 p-2 rounded border-black border hover:bg-rose-300 hover:text-white mt-7 ml-auto mr-auto"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  </main>
</template>

<style></style>

// Look into reusing collects of tailwing values.
