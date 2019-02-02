import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
   cotizacion : any;
   resultado : number= 0;
  constructor(private Http:HttpClient) {


  }


   getlastCotizacion (formulario:NgForm) {
      let valorCurrencyDolar :any = formulario.value.txDolar;
      console.log(valorCurrencyDolar);
      this.Http.get('http://data.fixer.io/api/latest?access_key=319ad78d9d98980cb4922e6b86ac40fd&symbols=USD')
      .subscribe( (resp:any) => { this.cotizacion = resp.rates.USD
      console.log(this.cotizacion);
      this.resultado = (this.cotizacion * valorCurrencyDolar);
      console.log(this.resultado);
      });

  }


}
