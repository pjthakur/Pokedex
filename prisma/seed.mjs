import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
      { name: 'Bulbasaur', types: ['grass', 'poison'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
      { name: 'Charmander', types: ['fire'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
      { name: 'Squirtle', types: ['water'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
      { name: 'Pikachu', types: ['electric'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
      { name: 'Jigglypuff', types: ['fairy', 'normal'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png' },
      { name: 'Gengar', types: ['ghost', 'poison'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png' },
      { name: 'Eevee', types: ['normal'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png' },
      { name: 'Snorlax', types: ['normal'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png' },
      { name: 'Dragonite', types: ['dragon', 'flying'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' },
      { name: 'Mewtwo', types: ['psychic'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png' },
      { name: 'Onix', types: ['rock', 'ground'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png' },
      { name: 'Lapras', types: ['water', 'ice'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png' },
      { name: 'Magikarp', types: ['water'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png' },
      { name: 'Machamp', types: ['fighting'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png' },
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });