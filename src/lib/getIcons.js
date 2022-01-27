async function getIcons() {
  const allIcons = Object.entries(
    await import('../tools/data/clothing_shirts.txt.json')
  )
    .slice(0, -1)
    .map((entry) => {
      if (entry[1].Icon) {
        return entry[1].Icon;
      }
      return entry[1].IconsForTexture.split(';');
    });

  return allIcons;
}

export default getIcons;
