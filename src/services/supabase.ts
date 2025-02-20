import { createClient } from '@supabase/supabase-js'
import { SUPABASE_KEY, SUPABASE_URL } from '../config/env'

// Create a single supabase client for interacting with your database
export const supabaseObject = createClient(SUPABASE_URL, SUPABASE_KEY)
