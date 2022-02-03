import StyledIcon from './Icons.style';

function Icons({ iconName }) {
  return (
    <StyledIcon type='button'>
      <img
        src={`icons/Item_${iconName}.png`}
        onError={(e) => {
          e.target.src = 'icons/placeholder.png';
          e.target.onerror = null;
        }}
        style={{ maxWidth: '30px', maxHeight: '30px' }}
        alt={iconName}
      />
    </StyledIcon>
  );
}

export default Icons;
