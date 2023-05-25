import { NativeBaseProvider} from "native-base";
import { Routes } from "./src/routes";
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      </NativeBaseProvider>
  );
}


