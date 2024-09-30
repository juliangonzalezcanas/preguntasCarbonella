import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule], // Add FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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

    alert(`Resultados:\nS.S: ${scores.S_S}\nE.P: ${scores.E_P}\nV: ${scores.V}\nA.P: ${scores.A_P}\nMs: ${scores.Ms}\nOg: ${scores.Og}\nCt: ${scores.Ct}\nCi: ${scores.Ci}\nM.C: ${scores.M_C}\nDt: ${scores.Dt}`);
  }
}
