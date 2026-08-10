// Authentication integration point for the ToYouCards platform entrance.
//
// There is no user database wired yet. `verifyCredentials` is the single place
// to connect real authentication (Neon + Better Auth, Supabase Auth, or an
// existing platform auth API). Until then it returns null, so the login form
// correctly surfaces an "invalid credentials" state instead of faking a
// successful session.

export type AuthedUser = {
  id: string
  email: string
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function verifyCredentials(
  email: string,
  password: string,
): Promise<AuthedUser | null> {
  // TODO: replace with a real credential check against the platform user store.
  // Example (Neon + Better Auth): look up the user, verify the password hash,
  // and return the user record on success.
  void email
  void password
  return null
}

export const SESSION_COOKIE = 'tyc_session'
