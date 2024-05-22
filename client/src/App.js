import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./components/context/AccountProvide";
import Meessenger from "./components/Messenger";

function App() {
  const clientId =
    "7420147866-784jia6qa31hqg3tk1qtiolrgc95v2ou.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Meessenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
