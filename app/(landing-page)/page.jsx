import Header from "../(components)/Header";
import Feature from "../(components)/Feature";
import Nav from "../(components)/Nav";
import { ReduxProvider } from "../(redux)/provider";

const Home = () => {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <div className="flex flex-col h-screen max-h-screen">
        <Nav></Nav>
      </div>
      <div className="container mx-auto">
        <Header></Header>
        <Feature></Feature>
      </div>
    </div>
  );
};

export default Home;
