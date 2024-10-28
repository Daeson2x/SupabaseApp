import {createClient} from "@supabase/supabase-js";
import 'react-native-url-polyfill/auto';

const supabaseurl = "https://kaxtdplhjcmrdddamojm.supabase.co"
const supabasekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtheHRkcGxoamNtcmRkZGFtb2ptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1Njc0MDQsImV4cCI6MjA0NTE0MzQwNH0.rkX2GBmrhNWxrf_kdk98t5mo7fbAC-XxT_n8nzifz3Q"
export const supabase = createClient(supabaseurl, supabasekey);