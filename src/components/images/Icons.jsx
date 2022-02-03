import StyledIcon from './Icons.style';

function Icons({ iconName }) {
  return (
    <StyledIcon type='button'>
      <img
        src={`icons/Item_${iconName}.png`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'icons/placeholder.png';
        }}
        alt={iconName}
        style={{ maxWidth: '30px', maxHeight: '30px' }}
      />
    </StyledIcon>
  );
}

export default Icons;
