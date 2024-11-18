import { Provider } from "react-redux";
import { Body } from "./components/Body";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";
import Watch from "./components/Watch";


const appRouter=createBrowserRouter([
              {
                  path:"/",
                  element:<Body/>,
                  children:[
                    {
                      path:"/",
                      element:<MainContainer/>
                    },
                    {
                      path:"/watch",
                      element:<Watch/>
                    }

                  ]
              }
      
])


function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
        <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
