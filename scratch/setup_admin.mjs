import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cndaaiaygxhmuvqtgxhk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZGFhaWF5Z3hobXV2cXRneGhrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDY5NDIzMywiZXhwIjoyMDg2MjcwMjMzfQ.7TcjH3ItRq0n4hJizDKdoly4pBfzGOuqUCE7ERE_DsM';

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function setupAdmin() {
    const email = 'ksolomon68@gmail.com';
    const password = 'Shadow01!';
    const displayName = 'Admin KSolomon';

    console.log(`Registering ${email} using service role key...`);
    
    // Create user with admin API
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { display_name: displayName }
    });

    let userId;
    if (authError) {
        if (authError.message.includes('already exists')) {
            console.log("User already exists. Fetching ID...");
            // List users to find the ID
            const { data: usersData } = await supabase.auth.admin.listUsers();
            const user = usersData.users.find(u => u.email === email);
            if (user) {
                userId = user.id;
            } else {
                console.error("Could not find user in list.");
                return;
            }
        } else {
            console.error("Admin user creation failed:", authError.message);
            return;
        }
    } else {
        userId = authData.user.id;
        console.log("User created via Admin API.");
        
        // Ensure profile exists
        const { error: profileError } = await supabase.from('profiles').insert([{
            id: userId,
            email: email,
            display_name: displayName,
        }]);
        if (profileError && profileError.code !== '23505') {
            console.error("Error creating profile:", profileError.message);
        }
    }

    console.log(`Setting is_admin=true for user ${userId}...`);
    const { error: updateError } = await supabase
        .from('profiles')
        .update({ is_admin: true })
        .eq('id', userId);

    if (updateError) {
        console.error("Failed to make admin:", updateError.message);
    } else {
        console.log("SUCCESS! User is now an admin.");
    }
}

setupAdmin();
