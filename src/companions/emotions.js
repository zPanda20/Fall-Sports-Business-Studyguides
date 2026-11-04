// How a character's face moves from one mood to another.
// Each mood only connects to neighbouring moods, so a change like neutral -> delighted passes
// through the in-between faces instead of snapping. Future animation rigs can reuse this map.

export const NEIGHBOURS = {
  seraph: {
    friendly: ['thinking', 'delighted', 'reassuring'],
    thinking: ['friendly', 'confused'],
    confused: ['thinking', 'shocked', 'reassuring'],
    shocked: ['confused', 'delighted'],
    delighted: ['shocked', 'friendly'],
    reassuring: ['friendly', 'confused'],
  },
  demon: {
    deadpan: ['smug', 'suspicious'],
    smug: ['deadpan', 'hysterical'],
    suspicious: ['deadpan', 'furious', 'shocked'],
    shocked: ['suspicious', 'hysterical', 'furious'],
    hysterical: ['shocked', 'smug'],
    furious: ['suspicious', 'shocked'],
  },
};

// Shortest list of faces to pass through, including both ends. [] if the faces are unknown.
export function facePath(who, from, to) {
  const graph = NEIGHBOURS[who];
  if (!graph || !graph[from] || !graph[to]) return [];
  if (from === to) return [from];
  const prev = { [from]: null };
  const queue = [from];
  while (queue.length) {
    const here = queue.shift();
    for (const next of graph[here]) {
      if (next in prev) continue;
      prev[next] = here;
      if (next === to) {
        const out = [to];
        for (let at = here; at !== null; at = prev[at]) out.unshift(at);
        return out;
      }
      queue.push(next);
    }
  }
  return [];
}
