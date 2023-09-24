import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created


export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
    const token = useCookie('auth-token'); // get token from cookies
  
    if (token.value && to?.fullPath === '/') {
      // check if value exists
      authenticated.value = true; // update the state to authenticated
      return navigateTo('/home')
    }
  
    // if token exists and url is /login redirect to homepage
    if (token.value && (to?.fullPath === '/login')) {
      return navigateTo('/home');
    }
    
  
    // if token doesn't exist redirect to log in
    if (!token.value && (to?.fullPath != '/login')) {
      return navigateTo('/login');
    }
  });