async function loadMatches() {
  const res = await fetch('/api/matches');
  const matches = await res.json();
  const container = document.getElementById('matches');

  matches.forEach(match => {
    const div = document.createElement('div');
    div.textContent = `${match.date} - ${match.team1} vs ${match.team2}`;
    container.appendChild(div);
  });
}

loadMatches();