import Header from './components/Header/Header';
import InputForm from './components/InputForm/InputForm';
import ComparisonTable from './components/Comparison/ComparisonTable';
import ScoreTable from './components/Score/ScoreTable';
import MatrixProvider from './store/MatrixProvider';

function App() {
    return (
        <MatrixProvider>
            <Header />
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <InputForm />
                    <ComparisonTable />
                </div>
                <div className="col-span-2">
                    <ScoreTable />
                </div>
            </div>
        </MatrixProvider>
    );
}

export default App;
