import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cndaaiaygxhmuvqtgxhk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE';

const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
    console.log("Fetching topics...");
    const { data, error } = await supabase.from('topics').select('*');
    if (error) {
        console.error("Error details:", error);
        console.error("Error message:", error.message);
        console.error("Error code:", error.code);
        console.error("Error details prop:", error.details);
        console.error("Error hint:", error.hint);
    } else {
        console.log("Success! Data:", data.length, "rows.");
    }
}

test();
