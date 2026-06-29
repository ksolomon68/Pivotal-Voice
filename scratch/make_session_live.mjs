import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cndaaiaygxhmuvqtgxhk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
    const { data, error } = await supabase
        .from('broadcast_sessions')
        .update({
            status: 'live',
            streamyard_broadcast_id: 'y7bki3', // Test Broadcast ID from pull commit description
            started_at: new Date().toISOString()
        })
        .eq('id', '2f3baa9f-a842-44ce-a815-aae639a826f9')
        .select();

    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Session updated successfully:", data);
    }
}

run();
