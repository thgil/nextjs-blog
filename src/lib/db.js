import { cache } from "react";
import { createClient } from './supabase/client';


export const getFriends = cache(async (id) => {
  const supabase = createClient();
  const { data, error } = await supabase.from('rikishi').select().gt('id', id).limit(10);

  return data;
});