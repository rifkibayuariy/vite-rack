import ReactLogo from "./assets/rack-transparent-logo.png";

function App() {
    return (
        <>
            <main className="w-full h-screen flex justify-center items-center">
                <div>
                    <img className="w-40 lg:w-72" src={ReactLogo} alt="Rack" />
                    <h1 className="text-center text-zinc-500 mt-2">Under development</h1>
                </div>
            </main>
        </>
    );
}

export default App;
