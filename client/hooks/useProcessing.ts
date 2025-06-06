import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supa = createClient(
  import.meta.env.VITE_SUPA_URL as string,
  import.meta.env.VITE_SUPA_ANON as string
);

export function useProcessing(videoId: string) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const ch = supa.channel(`processing:${videoId}`);
    ch.on('broadcast', { event: 'tick' }, payload => setPct(payload.pct));
    ch.subscribe();
    return () => {
      ch.unsubscribe();
    };
  }, [videoId]);

  return pct;
}
