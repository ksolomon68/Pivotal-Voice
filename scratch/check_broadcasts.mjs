import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cndaaiaygxhmuvqtgxhk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
    const { data: sessions, error } = await supabase
        .from('broadcast_sessions')
        .select('*');
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Broadcast sessions in DB:", JSON.stringify(sessions, null, 2));
    }
}

run();
