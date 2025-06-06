import { createClient } from '@supabase/supabase-js';
import Redis from 'ioredis';

const supa = createClient(process.env.SUPA_URL, process.env.SUPA_KEY);
const pub = new Redis(process.env.REDIS_URL);

export async function publishProgress(videoId, pct) {
  await pub.publish(`progress:${videoId}`, JSON.stringify({ pct }));
}

const sub = new Redis(process.env.REDIS_URL);
sub.psubscribe('progress:*');
sub.on('pmessage', async (_, chan, msg) => {
  const videoId = chan.split(':')[1];
  await supa.channel(`processing:${videoId}`).send({
    type: 'broadcast',
    event: 'tick',
    payload: JSON.parse(msg)
  });
});
