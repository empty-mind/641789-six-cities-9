import MainScreen from '../main-screen/main-screen';

type AppProps = {
  cityPlacesCount: number;
};

function App({cityPlacesCount}: AppProps): JSX.Element {
  return (
    <MainScreen cityPlacesCount={cityPlacesCount} />
  );
}

export default App;
