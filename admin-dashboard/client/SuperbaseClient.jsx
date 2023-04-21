
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lviibyjoszilewdvhntl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2aWlieWpvc3ppbGV3ZHZobnRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIwNTUyODMsImV4cCI6MTk5NzYzMTI4M30.Ii6aK2eBbXsdTkqSnPmFiAPfq1KXeFe8yHhSoWP-r-0'
const supabase = createClient(supabaseUrl, supabaseKey, {

  // Không dùng cùng phải thêm Authorization: `Bearer ${supabaseKey}` vào headers :vv mặc dù đã có supabaseKey ở trên rồi @@
  headers: {
    Authorization: `Bearer `,
    "Content-Type": "application/json",
    Accept: "application/json",
  }
})

export default supabase