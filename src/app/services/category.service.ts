import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories = [
    {
      id: 1,
      name: 'Constructii',
      icon: 'home',
      subcategories: [
        {
          id: 101,
          name: 'Arhitectura',
          icon: 'architecture',
          subs: [
            { id: 10101, name: 'Arhitect, arhitectura' },
            { id: 10102, name: 'Autorizare ISU' },
            { id: 10103, name: 'Autorizare de constructie' },
            { id: 10104, name: 'Bilant energetic' },
            { id: 10105, name: 'Cadastru, Geodezie, Topografie' },
            { id: 10106, name: 'Certificat energetic' },
            { id: 10107, name: 'Consultanta' },
            { id: 10108, name: 'Design interior' },
            { id: 10109, name: 'Detalii de executie' },
            { id: 10110, name: 'Deviz de lucrari' },
            { id: 10111, name: 'Diriginte de santier' },
            { id: 10112, name: 'Evaluator imobiliar' },
            { id: 10113, name: 'Inginerie' },
            { id: 10114, name: 'Legalizare' },
            { id: 10115, name: 'Peisagistica' },
            { id: 10116, name: 'Proiect instalatii sanitare' },
            { id: 10117, name: 'Proiectare constructii joase' },
            { id: 10118, name: 'Proiecte instalatii electrice' },
            { id: 10119, name: 'Proiecte case' },
            { id: 10120, name: 'Protectia muncii' },
            { id: 10121, name: 'Randare 3D' },
            { id: 10122, name: 'Statistica constructiilor' },
            { id: 10123, name: 'Studiu geotehnic' },
            { id: 10124, name: 'Supervizare constructii' },
            { id: 10125, name: 'Termografie' },
            { id: 10126, name: 'Urbanism' }
          ]
        },
        {
          id: 102,
          name: 'Constructie',
          icon: 'home',
          subs: [
            { id: 10201, name: 'Asanare' },
            { id: 10202, name: 'Canalizare' },
            { id: 10203, name: 'Casa pasiva' },
            { id: 10204, name: 'Case cu consum redus' },
            { id: 10205, name: 'Case de lemn' },
            { id: 10206, name: 'Case la cheie' },
            { id: 10207, name: 'Case modulare' },
            { id: 10208, name: 'Cherestea' },
            { id: 10209, name: 'Cofraj' },
            { id: 10210, name: 'Constructii civile' },
            { id: 10211, name: 'Constructii specializate' },
            { id: 10212, name: 'Construire cosuri de fum' },
            { id: 10213, name: 'Demolare pereti' },
            { id: 10214, name: 'Demolari' },
            { id: 10215, name: 'Firme de constructii' },
            { id: 10216, name: 'Foraje puturi' },
            { id: 10217, name: 'Gabioane' },
            { id: 10218, name: 'Hidroizolatii' },
            { id: 10219, name: 'Inginerie' },
            { id: 10220, name: 'Lemn lamelat incrucisat' },
            { id: 10221, name: 'Manopera zidarie' },
            { id: 10222, name: 'Mansarda' },
            { id: 10223, name: 'Materiale de constructii' },
            { id: 10224, name: 'Pilonare' },
            { id: 10225, name: 'Renovare apartament' },
            { id: 10226, name: 'Renovare baie' },
            { id: 10227, name: 'Renovare casa' },
            { id: 10228, name: 'Renovare cladiri' },
            { id: 10229, name: 'Reparatii balcon, terase' },
            { id: 10230, name: 'Sapaturi mecanizate' },
            { id: 10231, name: 'Slefuire beton' },
            { id: 10232, name: 'Taiere beton' },
            { id: 10233, name: 'Tencuiala si finisaje argila' },
            { id: 10234, name: 'Zid de sprijin' },
            { id: 10235, name: 'Zidarie' }
          ]
        },
        {
          id: 103,
          name: 'Acoperis',
          icon: 'roofing',
          subs: [
            { id: 10301, name: 'Acoperisuri' },
            { id: 10302, name: 'Acoperis verde' },
            { id: 10303, name: 'Acoperisuri stuf' },
            { id: 10304, name: 'Acoperisuri tabla' },
            { id: 10305, name: 'Case fara acoperis' },
            { id: 10306, name: 'Dulgherie' },
            { id: 10307, name: 'Ferestre de mansarda' },
            { id: 10308, name: 'Foisor' },
            { id: 10309, name: 'Hidroizolatii acoperis' },
            { id: 10310, name: 'Invelitori acoperisuri' },
            { id: 10311, name: 'Jgheaburi si burlane' },
            { id: 10312, name: 'Lucrari acoperis' },
            { id: 10313, name: 'Paratrasnet, impamantare' },
            { id: 10314, name: 'Tinichigerie, Jhgeaburi si burlane' }
          ]
        },
        {
          id: 104,
          name: 'Ferestre, usi',
          icon: 'door_sliding',
          subs: [
            { id: 10401, name: 'Balustrade' },
            { id: 10402, name: 'Draperii' },
            { id: 10403, name: 'Ferestre lemn' },
            { id: 10404, name: 'Ferestre si pereti panoramici' },
            { id: 10405, name: 'Geamgii' },
            { id: 10406, name: 'Geamuri termopan' },
            { id: 10407, name: 'Jaluzele' },
            { id: 10408, name: 'Jaluzele exterioare' },
            { id: 10409, name: 'Jaluzele plisate' },
            { id: 10410, name: 'Jaluzele verticale' },
            { id: 10411, name: 'Lucraru pregatire' },
            { id: 10412, name: 'Marchize, copertine, pergole' },
            { id: 10413, name: 'Montaj ferestre' },
            { id: 10414, name: 'Montaj usi' },
            { id: 10415, name: 'Perdele' },
            { id: 10416, name: 'Perei cortina' },
            { id: 10417, name: 'Plase insecte' },
            { id: 10418, name: 'Reconditionare tamplarie lemn' },
            { id: 10419, name: 'Reparatii rulouri exterioare' },
            { id: 10420, name: 'Reparatii termopane' },
            { id: 10421, name: 'Rolete textile' },
            { id: 10422, name: 'Rulouri exterioare' },
            { id: 10423, name: 'Rulouri geam' },
            { id: 10424, name: 'Sere, solarii' },
            { id: 10425, name: 'Sisteme de umbrire' },
            { id: 10426, name: 'Tamplarie aluminiu' },
            { id: 10427, name: 'Tamplarie PVC' },
            { id: 10428, name: 'Usa garaj basculanta' },
            { id: 10429, name: 'Usi antiefractie' },
            { id: 10430, name: 'Usi de garaj' },
            { id: 10431, name: 'Usi de garaj batante' },
            { id: 10432, name: 'Usi de garaj sectionale' },
            { id: 10433, name: 'Usi exterioare' },
            { id: 10434, name: 'Usi exterior aluminiu' },
            { id: 10435, name: 'Usi exterior lemn' },
            { id: 10436, name: 'Usi garaj rulou' },
            { id: 10437, name: 'Usi glisante' },
            { id: 10438, name: 'Usi industriale' },
            { id: 10439, name: 'Usi interior' },
            { id: 10440, name: 'Usi termopan' },
            { id: 10441, name: 'Verande' }
          ]
        },
        {
          id: 105,
          name: 'Instalatii',
          icon: 'plumbing',
          subs: [
            { id: 10501, name: 'Aer conditionat' },
            { id: 10502, name: 'Aspiratoare centrale' },
            { id: 10503, name: 'Boilere' },
            { id: 10504, name: 'Capac horn' },
            { id: 10505, name: 'Casa inteligenta' },
            { id: 10506, name: 'Centrale pe gaz' },
            { id: 10507, name: 'Centrale peleti' },
            { id: 10508, name: 'Colectare apa pluviala' },
            { id: 10509, name: 'Colectoare solare' },
            { id: 10510, name: 'Corpuri de iluminat' },
            { id: 10511, name: 'Depanari' },
            { id: 10512, name: 'Energie solara' },
            { id: 10513, name: 'Horn inox' },
            { id: 10514, name: 'Hornuri' },
            { id: 10515, name: 'Hornuri ceramice' },
            { id: 10516, name: 'Incalzire in pardoseala' },
            { id: 10517, name: 'Incalzire electrica in pardoseala' },
            { id: 10518, name: 'Incalzire prin pereti si tavane' },
            { id: 10519, name: 'Instalatii electrice' },
            { id: 10520, name: 'Instalatii sanitare' },
            { id: 10521, name: 'Instalator' },
            { id: 10522, name: 'Instalator sanitar' },
            { id: 10523, name: 'Lift, ascensor' },
            { id: 10524, name: 'Masuratori instalatii electrice' },
            { id: 10525, name: 'Panouri radiante' },
            { id: 10526, name: 'Panouri solare, fotovoltaice' },
            { id: 10527, name: 'Pompe de caldura' },
            { id: 10528, name: 'Reabilitare cosuri de fum' },
            { id: 10529, name: 'Reparatii instalatii sanitare' },
            { id: 10530, name: 'Semineu' },
            { id: 10531, name: 'Service centrale termice si cazane' },
            { id: 10532, name: 'Sisteme de supraveghere' },
            { id: 10533, name: 'Sobe teracota' },
            { id: 10534, name: 'Telecomunicatii' },
            { id: 10535, name: 'Tubulaturi' }
          ]
        },
        {
          id: 106,
          name: 'Fatade, zugravire',
          icon: 'imagesearch_roller',
          subs: [
            { id: 10601, name: 'Fatade lemn' },
            { id: 10602, name: 'Fatade metalice' },
            { id: 10603, name: 'Fatade ventilate' },
            { id: 10604, name: 'Fatade case' },
            { id: 10605, name: 'Finisaj' },
            { id: 10606, name: 'Izolarie celuloza' },
            { id: 10607, name: 'Izolatie mansarda' },
            { id: 10608, name: 'Placare pereti' },
            { id: 10609, name: 'Rigips, gips carton' },
            { id: 10610, name: 'Sapa uscata' },
            { id: 10611, name: 'Schele metalice' },
            { id: 10612, name: 'Stucatura' },
            { id: 10613, name: 'Tapet' },
            { id: 10614, name: 'Tencuiala decorativa' },
            { id: 10615, name: 'Vopsirea metalului' },
            { id: 10616, name: 'Vopsit lemn' },
            { id: 10617, name: 'Zugraveli' }
          ]
        },
        {
          id: 107,
          name: 'Tencuieli, șape',
          icon: 'house_siding',
          subs: [
            { id: 10701, name: 'Sapa' },
            { id: 10702, name: 'Sapa autonivelanta' },
            { id: 10703, name: 'Tencuiala interior' },
            { id: 10704, name: 'Tencuiala manuala' },
            { id: 10705, name: 'Tencuiala mecanizata' }
          ]
        },
        {
          id: 108,
          name: 'Acoperire pardoseli',
          icon: 'dashboard',
          subs: [
            { id: 10801, name: 'Gresie' },
            { id: 10802, name: 'Mocheta' },
            { id: 10803, name: 'Montaj gresie si faianta' },
            { id: 10804, name: 'Montaj parchet' },
            { id: 10805, name: 'Montatori gresie si faianta' },
            { id: 10806, name: 'Parchet' },
            { id: 10807, name: 'Parchet laminat' },
            { id: 10808, name: 'Parchetari' },
            { id: 10809, name: 'Pardoseala' },
            { id: 10810, name: 'Pardoseala epoxidica' },
            { id: 10811, name: 'Pardoseala epoxidica industriala' },
            { id: 10812, name: 'Pardoseala PVC, vinil' },
            { id: 10813, name: 'Sobe pe lemne' }
          ]
        },
        {
          id: 109,
          name: 'Constructii',
          icon: 'warehouse',
          subs: [
            { id: 10901, name: 'Balustrade inox' },
            { id: 10902, name: 'CNC prelucrare metal' },
            { id: 10903, name: 'Constructii metalice' },
            { id: 10904, name: 'Containere de locuit' },
            { id: 10905, name: 'Copertine fier forjat' },
            { id: 10906, name: 'Copertine metalice' },
            { id: 10907, name: 'Garaje prefabricate' },
            { id: 10908, name: 'Gard inox' },
            { id: 10909, name: 'Gard, porti fier forjat' },
            { id: 10910, name: 'Garduri ALU' },
            { id: 10911, name: 'Poarta pentru curte' },
            { id: 10912, name: 'Sablare' },
            { id: 10913, name: 'Scara metalica' },
            { id: 10914, name: 'Vopsire electrostatica' }
          ]
        },
        {
          id: 110,
          name: 'Mobila',
          icon: 'chair',
          subs: [
            { id: 11001, name: 'Blaturi de bucatarie' },
            { id: 11002, name: 'Dulap haine usi glisante' },
            { id: 11003, name: 'Mobila bucatarie' },
            { id: 11004, name: 'Mobila copii' },
            { id: 11005, name: 'Mobila dormitor' },
            { id: 11006, name: 'Mobila la comanda' },
            { id: 11007, name: 'Mobila lemn masiv' },
            { id: 11008, name: 'Mobila living' },
            { id: 11009, name: 'Mobilier baie' },
            { id: 11010, name: 'Mobilier gradina' },
            { id: 11011, name: 'Montaj mobila' },
            { id: 11012, name: 'Placaj lemn' },
            { id: 11013, name: 'Reconditionare mobila' },
            { id: 11014, name: 'Renovare bucatarie' },
            { id: 11015, name: 'Reparatii mobila' },
            { id: 11016, name: 'Saune' },
            { id: 11017, name: 'Scari de lemn' },
            { id: 11018, name: 'Tamplarie, tamplar' },
            { id: 11019, name: 'Tapiterie' }
          ]
        },
        {
          id: 111,
          name: 'Spatiu verde',
          icon: 'yard',
          subs: [
            { id: 11101, name: 'Alpinism utilitar' },
            { id: 11102, name: 'Amenajari exterioare' },
            { id: 11103, name: 'Amenajari gradini' },
            { id: 11104, name: 'Asfalt' },
            { id: 11105, name: 'Beton amprentat' },
            { id: 11106, name: 'Bransamente gaze, electrice' },
            { id: 11107, name: 'Casute de gradina' },
            { id: 11108, name: 'Constructii drumuri' },
            { id: 11109, name: 'Fose septice' },
            { id: 11110, name: 'Gard PVC' },
            { id: 11111, name: 'Gard lemn' },
            { id: 11112, name: 'Iazuri, fantani arteziene' },
            { id: 11113, name: 'Inginerie civila' },
            { id: 11114, name: 'Locuri de joaca' },
            { id: 11115, name: 'Montaj piatra decorativa' },
            { id: 11116, name: 'Montaj piatra naturala' },
            { id: 11117, name: 'Pavaj' },
            { id: 11118, name: 'Piscina' },
            { id: 11119, name: 'Produse din beton' },
            { id: 11120, name: 'Rezervor de apa pluviala' },
            { id: 11121, name: 'Sisteme de irigatii' },
            { id: 11122, name: 'Terasamente' },
            { id: 11123, name: 'Terase din lemn' },
            { id: 11124, name: 'Terrazzo' }
          ]
        },
        { id: 112, name: 'Mentenanta', icon: 'construction' }
      ]
    },
    {
      id: 2,
      name: 'Digitalizare',
      icon: 'home',
      subcategories: [
        { id: 201, name: 'Consultanta', icon: 'support_agent' },
        { id: 202, name: 'Web design', icon: 'tab' },
        { id: 203, name: 'Comunicatii', icon: 'chat' },
        { id: 204, name: 'Marketing online', icon: 'add_business' },
        { id: 205, name: 'Social media', icon: 'public' },
        { id: 206, name: 'Mentenanta', icon: 'engineering' },
        { id: 207, name: 'Comert online', icon: 'workspace_premium' },
        { id: 208, name: 'Securitate', icon: 'security' },
        { id: 209, name: 'Hardware', icon: 'dns' },
        { id: 210, name: 'Optimizare cautare', icon: 'query_stats' },
        { id: 211, name: 'Software', icon: 'dvr' },
        { id: 212, name: 'Altele', icon: 'pending' }
      ]
    },
    {
      id: 3,
      name: 'Category 3',
      icon: 'home',
      subcategories: [
        { id: 301, name: 'Subcategory 7', icon: 'home' },
        { id: 302, name: 'Subcategory 8', icon: 'home' },
        { id: 303, name: 'Subcategory 9', icon: 'home' }
      ]
    }
  ];

  constructor() {}

  getCategories() {
    return this.categories;
  }

  getSubcategories(categoryIndex: number) {
    return this.categories[categoryIndex].subcategories.map((subcategory, index) => {
      return { ...subcategory, index }
      });
  }


  getSubcategoryById(categoryId: number, subcategoryId: number) {
    const category = this.categories.find(category => category.id === categoryId);
    return category?.subcategories.find(subcategory => subcategory.id === subcategoryId);
  }

  getCategoryById(categoryId: number) {
    return this.categories.find(category => category.id === categoryId);
  }

  

  
}