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
        case "EP": scores.E_P += value; break;
        case "V": scores.V += value; break;
        case "AP": scores.A_P += value; break;
        case "MS": scores.Ms += value; break;
        case "OG": scores.Og += value; break;
        case "CT": scores.Ct += value; break;
        case "CI": scores.Ci += value; break;
        case "MC": scores.M_C += value; break;
        case "DT": scores.Dt += value; break;
      }
    });

    alert(`Resultados:\nS.S: ${scores.S_S}\nE.P: ${scores.E_P}\nV: ${scores.V}\nA.P: ${scores.A_P}\nMs: ${scores.Ms}\nOg: ${scores.Og}\nCt: ${scores.Ct}\nCi: ${scores.Ci}\nM.C: ${scores.M_C}\nDt: ${scores.Dt}`);
  }
}
