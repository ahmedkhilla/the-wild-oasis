import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xhzzwqasprlfezkzlhjj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhoenp3cWFzcHJsZmV6a3psaGpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMxNzYxNjYsImV4cCI6MjAzODc1MjE2Nn0.DvwQnFdXZpkYuMnvXfecEuZSFtEPppdePp_6P5JQd-0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
