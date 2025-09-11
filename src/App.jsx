import Layout from "./components/Layout.jsx";
import AppRoutes from "./routes/Routes.jsx";
function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <AppRoutes />
      </Layout>
    </div>
  );
}

export default App;
