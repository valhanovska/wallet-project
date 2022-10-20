import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="200"
      width="200"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      //   wrapperClass={s.spinerStyle}
      colors={['#24CCA7', '#6e78e8', '#4A56E2', '#6e78e8', '#24CCA7']}
    />
  );
};

export default Loader;
