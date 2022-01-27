function getAllItemInfo() {
  const itemFiles = [
    'clothing_bags.txt.json',
    'clothing_hats.txt.json',
    'clothing_jacket.txt.json',
    'clothing_jewellery.txt.json',
    'clothing_others.txt.json',
    'clothing_pants.txt.json',
    'clothing_shirts.txt.json',
    'clothing_shoes.txt.json',
    'clothing_suits.txt.json',
    'clothing_underwear.txt.json',
    'clothing_zeddmg.txt.json',
    'items.txt.json',
    'items_food.txt.json',
    'items_literature.txt.json',
    'items_radio.txt.json',
    'items_weapons.txt.json',
    'newBags.txt.json',
    'newitems.txt.json',
    'tester.txt.json',
  ];
  return Promise.all(
    itemFiles.map(async (file) =>
      Object.entries(await import(`../tools/data/${file}`))
        .slice(0, -1)
        .map(([_, itemInfo]) => itemInfo)
        .filter(({ Icon, IconsForTexture }) => Icon || IconsForTexture)
    )
  );
}

export default getAllItemInfo;
