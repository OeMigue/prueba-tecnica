import ErrorNotFound from "../pages/ErrorNotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtegerRutas from "../components/ProtegerRutas";
import Productos from "../pages/Productos";
import Clientes from "../pages/Clientes";
import CrearProducto from "../pages/CrearProducto";
export let routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home/",
    element: <ProtegerRutas proteger={<Home />} />,
    children: [
      {
        path: "productos",
        element: <Productos />,
      },
      {
        path: "clientes",
        element: <Clientes />,
      },
      {
        path:"crear-producto",
        element: <CrearProducto />
      }
    ],
  },
  {
    path: "*",
    element: <ErrorNotFound />,
  },
];
