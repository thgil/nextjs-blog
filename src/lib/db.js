import { createClient } from './supabase/client';
import { unstable_cache } from 'next/cache';
import { cache } from 'react';


export const getFriends = unstable_cache(async (id) => {
  console.log('getFriends', id);
  
  const supabase = createClient();
  const { data, error } = await supabase.from('rikishi').select().gt('id', id).limit(10);

  return data;
});