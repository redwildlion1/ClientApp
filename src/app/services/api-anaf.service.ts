import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiAnafService {

constructor() { }

private apiLink = 'https://www.anaf.ro/PlatitorTvaRest/api/v8/ws/tva';
private date = "2024-05-00";

async getAnafData(cui: string) {
  // post the data to the api
  const response = await fetch(this.apiLink, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify([
      {
       cui: cui,
       data: this.date
      }
    ]),
    redirect: 'follow',
  });
  const data = await response.json();
  if(data.cod === 200) {
    const found = data.found[0];
    return {
      cod : data.cod,
      denumire: found.date_generale.denumire,
      dataInceperii: found.date_generale.data_inregistrare,
      telefon: found.date_generale.telefon,
      nrRegCom: found.date_generale.nrRegCom,
      formaJuridica: found.date_generale.forma_juridica,
      stareInactiv: found.stare_inactiv.statusInactivi,
      judet: found.adresa_sediu_social.scod_Judet
    };
  }
  return data.cod;

}

}
