function renderExecutiveCanvas() {
  const activeYear = document.querySelector('.year.is-active')?.dataset.year;
  const actionByYear = activeYear === '2027'
    ? ['Validate Q3 delivery capacity', 'Map expected delivery to staffed capacity and identify the first resource constraint.', '14 Nov 2026', 'COO + PMO']
    : ['Confirm December delivery readiness', 'Validate capacity, acceptance milestones, and invoice triggers for the top five December deals.', '27 Oct 2026', 'COO + Sales'];
  const expected = document.querySelector('#expected')?.textContent || '—';
  const range = `${document.querySelector('#p10')?.textContent || '—'}–${document.querySelector('#p90')?.textContent || '—'}`;
  const kpis = document.querySelectorAll('#kpiGrid .kpi strong');
  const score = Number((kpis[3]?.textContent || '0').split('/')[0]);
  const stage = kpis[2]?.textContent || '—';
  document.querySelector('#heroForecast').textContent = expected;
  document.querySelector('#heroStage').textContent = `vs ${stage}`;
  document.querySelector('#heroRange').textContent = range;
  document.querySelector('#heroScore').textContent = score || '—';
  document.querySelector('#heroRing').style.setProperty('--score', `${score * 3.6}deg`);
  document.querySelector('#heroStatus').textContent = score >= 70 ? 'Monitor' : 'Review';
  document.querySelector('#heroScoreCopy').textContent = score >= 70 ? 'Balanced profile; retain monthly review discipline.' : 'Timing and evidence quality need a board-sponsored recovery plan.';
  const sourceDrivers = [...document.querySelectorAll('#drivers .driver')];
  document.querySelector('#heroDrivers').innerHTML = sourceDrivers.map(driver => {
    const parts = [...driver.querySelectorAll('span')];
    return `<div><span>${parts[0]?.textContent || ''}</span><b>${(parts[1]?.textContent || '').split('/')[0]}</b></div>`;
  }).join('');
  document.querySelector('#heroActionTitle').textContent = actionByYear[0];
  document.querySelector('#heroActionCopy').textContent = actionByYear[1];
  document.querySelector('#heroActionDue').textContent = actionByYear[2];
  document.querySelector('#heroActionOwner').textContent = actionByYear[3];
  document.querySelector('#heroPhasing').innerHTML = [...document.querySelectorAll('#phasing .bar-group')].map(group => {
    const label = group.querySelector('.bar-label')?.textContent || '';
    const bar = group.querySelector('.bar');
    return `<div><i class="${bar?.classList.contains('warn') ? 'hero-warn' : ''}" style="height:${bar?.style.height || '5%'}"></i><span>${label}</span></div>`;
  }).join('');
}
document.querySelectorAll('.year').forEach(button => button.addEventListener('click', () => setTimeout(renderExecutiveCanvas, 0)));
renderExecutiveCanvas();
