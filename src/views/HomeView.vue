<template>
  <main>
    <div class="flex items-center flex-col w-100">
      <h1 class="text-2xl font-bold mb-4">Validation from Zod schema</h1>
      <FormKit
        class="w-96 flex items-center flex-col"
        type="form"
        :plugins="[zodPlugin]"
        @submit="submitHandler"
      >
        <FormKit type="group" name="personalInfo">
          <FormKit validation-visibility="live" type="text" name="firstName" label="First Name" />
          <FormKit type="text" name="lastName" label="Last Name" />
        </FormKit>
        <FormKit type="text" name="email" label="Your email" />
        <FormKit
          type="checkbox"
          name="arrayMin"
          label="Zod features"
          :options="['Validation', 'Type-Safety', 'Reusability']"
        />
      </FormKit>
    </div>
  </main>
</template>

<script setup lang="ts">
import { createZodPlugin } from '@formkit/zod';
import { z } from 'zod';

const zodSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(3).max(25),
    lastName: z.string().min(3).max(25)
  }),
  email: z.string().email(),
  arrayMin: z.string().array().min(2)
});

const [zodPlugin, submitHandler] = createZodPlugin(zodSchema, async (formData) => {
  // fake submit handler, but this is where you
  // do something with your valid data.
  await new Promise((r) => setTimeout(r, 2000));
  alert('Form was submitted!');
  console.log(formData);
});
</script>
