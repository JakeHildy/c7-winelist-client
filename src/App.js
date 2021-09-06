import GlobalStyles from "./theme/styles/GlobalStyles";

import Theme from "./theme/Theme";
import WineList from "./WineList";
import { Page } from "./components/page";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <Page>
        <WineList />
      </Page>
    </Theme>
  );
}

export default App;
