import axios from "axios";
export default defineNuxtPlugin(nuxtApp => {
  const defaultUrl = "http://localhost:3333";

  let api = axios.create({
    baseURL: defaultUrl,
    headers: {
      common: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // "Authorization": `Bearer ${}`,

      },
    },
  });
return {
    provide: {
      api: api,
    },
  };
});