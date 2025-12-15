import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);


//grafica perrios
const data_perrito: ChartData<'doughnut'> = {
  labels: [
    'color verde',
    'color rosa',
    'color amarillo',
  ],
  datasets: [
    {
      label: 'total',
      data: [100, 500, 250],
      backgroundColor: [
        '#d2ff56ff',
        '#ff56aaff',
        '#FFCE56',
      ],
    },
  ],
};

const options_perrito: ChartOptions<'doughnut'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white',
      },
    },
    title: {
      display: true,
      text: 'Registros de perritos por',
      color: 'white'
    },
  },
};


//grafica gatos 
const data_gato: ChartData<'doughnut'> = {
  labels: [
    'color pistache', 
    'color morado', 
    'color azul',
  ],
  datasets: [
    {
      label: 'total',
      data: [300, 50, 100],
      backgroundColor: [
        '#00ffb3ff', 
        '#7b36ebff', 
        '#569fffff',
      ],
    },
  ],
};

const options_gato: ChartOptions<'doughnut'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: 'white',
      },
    },
    title: {
      display: true,
      text: 'Registros de gatitos por',
      color: 'white',
    },
  },
};

function MiGrafico() {
  return <div className="contenedor_graficos">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <div className="grafico_card">
                <div className="icono_grafico">
                  <i className="fas fa-dog fa-3x"></i>
                </div>
                <Doughnut data={data_perrito} options={options_perrito} />
              </div>

              <div className="grafico_card">
                <div className="icono_grafico">
                  <i className="fas fa-cat fa-3x"></i>
                </div>
                <Doughnut data={data_gato} options={options_gato} />
              </div>
            </div>
        </div>
        ;
}

export default MiGrafico




