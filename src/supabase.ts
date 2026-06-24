import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hypeelvdaoxzxrfrgadc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5cGVlbHZkYW94enhyZnJnYWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MDI0MjIsImV4cCI6MjA5NzI3ODQyMn0.5jsUkD42dVhce4eE6dhC09riLep-t1qKZLJYlz1_yX0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)