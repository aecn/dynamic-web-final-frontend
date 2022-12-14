import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// styles, components
import './App.css';
import CreatePostPage from "./pages/CreatePost";
import CreateUserPage from "./pages/CreateUser";
import FeedPage from "./pages/Feed";
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";

//import Header from "./components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyCsxjwmStBI4ttKDC3k1LK0L5DhznA3B9s",
  authDomain: "final-project-cd798.firebaseapp.com",
  projectId: "final-project-cd798",
  storageBucket: "final-project-cd798.appspot.com",
  messagingSenderId: "595959884062",
  appId: "1:595959884062:web:7b7968743478187320410f"
};

function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInformation, setUserInformation] = useState({});
  // app is initialized when it is ready
  useEffect(() => {
    // initialize firebase
    const app = initializeApp(firebaseConfig);
    setAppInitialized(app);
  }, []);
  // checks if user is logged in
  // user loads page, check their status
  // set state accordingly
  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        setUserInformation(user);
        setIsLoggedIn(true);
      } else {
        // user is signed out
        setUserInformation({});
        setIsLoggedIn(false);
      }
      // whenever state changes setLoading to false 
        setIsLoading(false);
      });
    }
  }, [appInitialized]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <FeedPage
        app={appInitialized} 
        isLoggedIn={isLoggedIn}
        isLoading={isLoading}
        userInformation={userInformation}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation} 
      />,
    },
    {
      path: "/user/:id",
      element: 
      <UserProfilePage 
        isLoggedIn={isLoggedIn}
        isLoading={isLoading}
        userInformation={userInformation}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation} 
      />,
    },
    {
      path: "/create",
      element: 
        <CreateUserPage
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserInformation={setUserInformation}
        />,
    },
    {
      path: "/createpost",
      element: 
      <CreatePostPage 
        app={initializeApp}
        isLoggedIn={isLoggedIn}
        isLoading={isLoading}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation} 
        userInformation={userInformation}
      />,
    },
    {
      path: "/login",
      element: 
      <LoginPage
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserInformation={setUserInformation} 
      />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
