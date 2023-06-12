import HeaderPresentation from './Presentation';

function HeaderContainer() {
  const onClose = () => {
    console.log('Coming soon...');
  };
  const onMinimize = () => {
    console.log('Coming soon...');
  };
  return <HeaderPresentation onClose={onClose} onMinimize={onMinimize} />;
}

export default HeaderContainer;
