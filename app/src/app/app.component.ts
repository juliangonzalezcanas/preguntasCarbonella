import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chart: Chart | null = null; // Declare chart property

  onSubmit() {
    const scores = {
      S_S: 0,
      E_P: 0,
      V: 0,
      A_P: 0,
      Ms: 0,
      Og: 0,
      Ct: 0,
      Ci: 0,
      M_C: 0,
      Dt: 0
    };

    const myMap: Map<number, number> = new Map();
    myMap.set(0, 0);
    myMap.set(1, 5);
    myMap.set(2, 11);
    myMap.set(3, 16);
    myMap.set(4, 22);
    myMap.set(5, 27);
    myMap.set(6, 33);
    myMap.set(7, 38);
    myMap.set(8, 44);
    myMap.set(9, 50);
    myMap.set(10, 55);
    myMap.set(11, 61);
    myMap.set(12, 66);
    myMap.set(13, 72);
    myMap.set(14, 77);
    myMap.set(15, 83);
    myMap.set(16, 88);
    myMap.set(17, 94);
    myMap.set(18, 100);

    const inputs = document.querySelectorAll('input[type="radio"]:checked');
    inputs.forEach(input => {
      const name = (input as HTMLInputElement).name; // Cast to HTMLInputElement
      const value = Number((input as HTMLInputElement).value); // Cast to HTMLInputElement
      
      switch (name) {
        case "SS": scores.S_S += value; break;
        case "SS1": scores.S_S += value; break;
        case "SS2": scores.S_S += value; break;
        case "SS3": scores.S_S += value; break;
        case "SS4": scores.S_S += value; break;
        case "SS5": scores.S_S += value; break;
        case "EP": scores.E_P += value; break;
        case "EP1": scores.E_P += value; break;
        case "EP2": scores.E_P += value; break;
        case "EP3": scores.E_P += value; break;
        case "EP4": scores.E_P += value; break;
        case "EP5": scores.E_P += value; break;
        case "V": scores.V += value; break;
        case "V1": scores.V += value; break;
        case "V2": scores.V += value; break;
        case "V3": scores.V += value; break;
        case "V4": scores.V += value; break;
        case "V5": scores.V += value; break;
        case "AP": scores.A_P += value; break;
        case "AP1": scores.A_P += value; break;
        case "AP2": scores.A_P += value; break;
        case "AP3": scores.A_P += value; break;
        case "AP4": scores.A_P += value; break;
        case "AP5": scores.A_P += value; break;
        case "MS": scores.Ms += value; break;
        case "MS1": scores.Ms += value; break;
        case "MS2": scores.Ms += value; break;
        case "MS3": scores.Ms += value; break;
        case "MS4": scores.Ms += value; break;
        case "MS5": scores.Ms += value; break;
        case "OG": scores.Og += value; break;
        case "OG1": scores.Og += value; break;
        case "OG2": scores.Og += value; break;
        case "OG3": scores.Og += value; break;
        case "OG4": scores.Og += value; break;
        case "OG5": scores.Og += value; break;
        case "CT": scores.Ct += value; break;
        case "CT1": scores.Ct += value; break;
        case "CT2": scores.Ct += value; break;
        case "CT3": scores.Ct += value; break;
        case "CT4": scores.Ct += value; break;
        case "CT5": scores.Ct += value; break;
        case "CI": scores.Ci += value; break;
        case "CI1": scores.Ci += value; break;
        case "CI2": scores.Ci += value; break;
        case "CI3": scores.Ci += value; break;
        case "CI4": scores.Ci += value; break;
        case "CI5": scores.Ci += value; break;
        case "MC": scores.M_C += value; break;
        case "MC1": scores.M_C += value; break;
        case "MC2": scores.M_C += value; break;
        case "MC3": scores.M_C += value; break;
        case "MC4": scores.M_C += value; break;
        case "MC5": scores.M_C += value; break;
        case "DT": scores.Dt += value; break;
        case "DT1": scores.Dt += value; break;
        case "DT2": scores.Dt += value; break;
        case "DT3": scores.Dt += value; break;
        case "DT4": scores.Dt += value; break;
        case "DT5": scores.Dt += value; break;
      }
    });
    
    scores.S_S = myMap.get(scores.S_S) ?? 0;
    scores.E_P = myMap.get(scores.E_P) ?? 0;
    scores.V = myMap.get(scores.V) ?? 0;
    scores.A_P = myMap.get(scores.A_P) ?? 0;
    scores.Ms = myMap.get(scores.Ms) ?? 0;
    scores.Og = myMap.get(scores.Og) ?? 0;
    scores.Ct = myMap.get(scores.Ct) ?? 0;
    scores.Ci = myMap.get(scores.Ci) ?? 0;
    scores.M_C = myMap.get(scores.M_C) ?? 0;
    scores.Dt = myMap.get(scores.Dt) ?? 0;

    const config: any = {
      type: 'bar',
      data: {
        labels: ['S.S', 'E.P', 'V', 'A.P', 'Ms', 'Og', 'Ct', 'Ci', 'M.C', 'Dt'],
        datasets: [
          {
            label: 'Valor',
            data: [scores.S_S, scores.E_P, scores.V, scores.A_P, scores.Ms, scores.Og, scores.Ct, scores.Ci, scores.M_C, scores.Dt],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',   // Color 1
              'rgba(255, 159, 64, 0.2)',    // Color 2
              'rgba(255, 205, 86, 0.2)',    // Color 3
              'rgba(75, 192, 192, 0.2)',     // Color 4
              'rgba(54, 162, 235, 0.2)',     // Color 5
              'rgba(153, 102, 255, 0.2)',    // Color 6
              'rgba(201, 203, 207, 0.2)',    // Color 7
              'rgba(173, 216, 230, 0.2)',    // Color 8 (light blue)
              'rgba(255, 224, 102, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',   // Color 1
              'rgb(255, 159, 64)',    // Color 2
              'rgb(255, 205, 86)',    // Color 3
              'rgb(75, 192, 192)',     // Color 4
              'rgb(54, 162, 235)',     // Color 5
              'rgb(153, 102, 255)',    // Color 6
              'rgb(201, 203, 207)',    // Color 7
              'rgb(173, 216, 230)',      // Nuevo color (rojo más oscuro)
              'rgb(255, 224, 102)' 
            ],
            borderWidth: 2, // Ancho del borde
            borderSkipped: 'bottom', // Especifica que el borde se salte en la parte inferior
            borderRadius: 15, // Radio de los bordes
          }
        ]
      },
      options: {
        aspectRatio: 2,
        scales: {
          y: {
            beginAtZero: true,
            min: 0,
            max: 100,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Color de la cuadrícula (más sutil)
              lineWidth: 1 // Ancho de la línea de la cuadrícula
            },
            ticks: {
              color: 'rgba(0, 0, 0, 0.8)', // Color de las etiquetas en el eje Y
              font: {
                size: 12 // Tamaño de la fuente
              }
            }
          },
          x: {
            ticks: {
              color: 'rgba(0, 0, 0, 0.8)', // Color de las etiquetas en el eje X
              font: {
                size: 12 // Tamaño de la fuente
              }
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'rgba(0, 0, 0, 0.8)', // Color de las etiquetas de la leyenda
              font: {
                size: 14 // Tamaño de la fuente de la leyenda
              }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Color de fondo del tooltip
            titleColor: 'white', // Color del título del tooltip
            bodyColor: 'white' // Color del cuerpo del tooltip
          }
        }
      },
    };

    this.chart = new Chart('MyChart', config); // Assign chart to the property
  }
}
