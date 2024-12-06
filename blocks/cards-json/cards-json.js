import CardsPortfolio from './cards-portfolio.js';
import CardsTeams from './cards-teams.js';

export default function decorate(block) {
  const isPortfolio = block.classList.contains('portfolio');
  const isTeams = block.classList.contains('teams');

  if (isPortfolio) {
    CardsPortfolio(block);
  }

  if (isTeams) {
    CardsTeams(block);
  }
}
