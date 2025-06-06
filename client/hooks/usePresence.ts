import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supa = createClient(
  import.meta.env.VITE_SUPA_URL as string,
  import.meta.env.VITE_SUPA_ANON as string
);

export interface PresenceInfo {
  uid: string;
  cursorTime: number;
}

export function usePresence(reelId: string) {
  const [members, setMembers] = useState<PresenceInfo[]>([]);

  useEffect(() => {
    const channel = supa.channel(`reel:${reelId}`, { config: { presence: { key: 'uid' } } });

    channel.on('presence', { event: 'sync' }, () => {
      const state = channel.presenceState<PresenceInfo>();
      const list: PresenceInfo[] = Object.values(state).flat();
      setMembers(list);
    });

    channel.subscribe(async status => {
      if (status === 'SUBSCRIBED') {
        channel.track({ uid: supa.auth.getUser().data?.user?.id || 'anon', cursorTime: 0 });
      }
    });

    const interval = setInterval(() => {
      channel.track({ uid: supa.auth.getUser().data?.user?.id || 'anon', cursorTime: Date.now() });
    }, 1000);

    return () => {
      clearInterval(interval);
      channel.unsubscribe();
    };
  }, [reelId]);

  return members;
}
