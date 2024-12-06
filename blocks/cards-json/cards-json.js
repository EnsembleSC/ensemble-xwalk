import CardsPortfolio from './cards-portfolio.js';
import CardsTeams from './cards-teams.js';

export default function decorate(block) {
  const link = block.querySelector('a');
  const isPortfolio = link.href.includes('portfolio');
  const isTeams = link.href.contains('teams');

  if (isPortfolio) {
    CardsPortfolio(block, link);
  }

  if (isTeams) {
    CardsTeams(block, link);
  }
}
