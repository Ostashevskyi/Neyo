'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { signUpSchema } from '@/utils/schemas/signup'

// export async function login(formData: FormData) {
//   const supabase = await createClient()

//   // type-casting here for convenience
//   // in practice, you should validate your inputs
//   const data = {
//     email: formData.get('email') as string,
//     password: formData.get('password') as string,
//   }

//   const { error } = await supabase.auth.signInWithPassword(data)

//   if (error) {
//     redirect('/error')
//   }

//   revalidatePath('/', 'layout')
//   redirect('/')
// }

export async function signup(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const parsed = signUpSchema.safeParse(rawData);

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  const { email, password } = parsed.data;

  const supabase = await createClient();

  const { data: { user }, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (!user?.user_metadata.email) {
    return { success: false, errors: "User is already exist"}
  }

  if (error) {
    return { success: false, errors: error.message };
  }

  return {
    success: true,
    user,
  };


}