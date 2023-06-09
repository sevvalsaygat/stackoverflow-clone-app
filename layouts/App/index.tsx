import { Header, Footer } from '@components';

type AppType = {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideHamburger?: boolean;
};

const App = ({ children, hideFooter, hideHamburger }: AppType) => {
  return (
    <div className="w-full h-50 bg-gray-100">
      <Header hideHamburger={hideHamburger} />
      <div className="w-full flex justify-center">
        <div className="w-full flex justify-center">{children}</div>
      </div>

      {hideFooter ? null : <Footer />}
    </div>
  );
};

export default App;
