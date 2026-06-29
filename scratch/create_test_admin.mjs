import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cndaaiaygxhmuvqtgxhk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2OTQyMzMsImV4cCI6MjA4NjI3MDIzM30.a0gw6nI_sBsR8GN0O14rwzNwXOa4XK6sg60mooySmwE';

const supabase = createClient(supabaseUrl, supabaseKey);

async function run() {
    const email = 'testadmin12345@gmail.com';
    const password = 'password123';
    
    console.log("Signing up user...");
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                display_name: 'Test Admin'
            }
        }
    });

    if (authError) {
        console.error("Auth SignUp Error:", authError.message);
        return;
    }

    const user = authData.user;
    if (!user) {
        console.error("No user returned");
        return;
    }

    console.log("User signed up successfully. ID:", user.id);

    console.log("Creating profile with is_admin = true...");
    const { error: profileError } = await supabase.from('profiles').insert([{
        id: user.id,
        email,
        display_name: 'Test Admin',
        is_admin: true,
        is_moderator: true,
        city: 'Waxahachie'
    }]);

    if (profileError) {
        console.error("Profile Insert Error:", profileError.message);
    } else {
        console.log("Test admin profile created successfully!");
    }
}

run();
