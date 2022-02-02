import ItemName from './Name.style';

function Name({ displayName }) {
  const spacedName = displayName.replace(/([a-z])([A-Z])/g, '$1 $2');
  return <ItemName>{spacedName}</ItemName>;
}

export default Name;
