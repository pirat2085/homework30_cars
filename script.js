const container = document.getElementById('container');
const root = ReactDOM.createRoot(container);

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            car: [
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
            ]
        };
    }

    render() {
        return (
            <div className="car-container">
                {this.state.car.map((car) => (
                    <Car key={car.serialNumber} car={car}/>
                ))}
            </div>
        );
    }
}

class Car extends React.Component {
    render() {
        return (
            <div className="car-card">
                <h2>{this.props.car.serialNumber}</h2>
                <p>{this.props.car.manufacturer}</p>
                <p>{this.props.car.model}</p>
                <p>{this.props.car.year}</p>

            </div>
        );
    }
}

root.render(<Cars/>);

