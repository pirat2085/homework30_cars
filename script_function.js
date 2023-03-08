const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

function Cars(props) {
    const cars = props.cars;

    return (
        <div className="car-container">
            {cars.map((car) => (
                <div className="car-card" key={car.serialNumber}>
                    <h2>{car.serialNumber}</h2>
                    <p>Model: {car.model}</p>
                    <p>Manufacturer: {car.manufacturer}</p>
                    <p>Year: {car.year}</p>
                </div>
            ))}
        </div>
    );
}

const cars = [
    {
        serialNumber: '12345',
        model: 'Model S',
        manufacturer: 'Tesla',
        year: 2020,
    },
    {
        serialNumber: '23456',
        model: 'M5',
        manufacturer: 'BMW',
        year: 2021,
    },
    {
        serialNumber: '34567',
        model: 'S-Class',
        manufacturer: 'Mercedes-Benz',
        year: 2019,
    },
];

root.render(<Cars cars={cars} />);
