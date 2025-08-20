import { createClient } from 'https://esm.sh/@supabase/supabase-js';
import { SUPABASE_CONFIG } from './config.js';

export const supabase = createClient(
  SUPABASE_CONFIG.url,
  SUPABASE_CONFIG.anonKey
);

window.register = async () => {
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) alert(error.message);
  else alert('Registration successful! Please check your email.');
};

window.login = async () => {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const { error, data } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else window.location.href = 'profile.html';
};