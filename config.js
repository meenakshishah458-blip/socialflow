// ============================================================
// SOCIALFLOW — SUPABASE CONFIGURATION
// ============================================================

const SUPABASE_URL = "https://eommhgzhpissadhliuok.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_rgGy0fPLsoS9htxVJYSFWg_i_x37pM7";

// Initialize client (used by login.html and app.html)
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
