// Felles rutiner for plotting for en istykkelse
// Oppdatert: 3. april 2017
// Ånund Sigurd Kvambekk

// Krever at hoved filen inkluderer disse filene:
//<script language="javascript" type="text/javascript" src="jquery-1.11.1.min.js"></script>
//<script language="javascript" type="text/javascript" src="jquery.jqplot.min.js"></script>
//<script language="javascript" type="text/javascript" src="jqplot.canvasOverlay.min.js"></script>
//<script language="javascript" type="text/javascript" src="jqplot.canvasTextRenderer.min.js"></script>
//<script language="javascript" type="text/javascript" src="jqplot.canvasAxisLabelRenderer.min.js"></script>
//<link rel="stylesheet" type="text/css" href="jquery.jqplot.min.css" />

// Eksempel på bruk i hovedprogram:
// Antar her at man ikke vil bruke kallet til IskartPlotIceThicknessV slik det gjøres i iskartet, da dataene allerede finnes i tilgjengelige objekter


export function CreatePlot(istykkelse, element, element2) {
    // Eksempel på hvilke data programmet venter å finne
    // Oppretter et objekt (tobj) som må få samme struktur som objekt returnert fra IskartPlotIceThicknessV i Odata
    // tobj er en array av objekter, ett objekt pr islag returneres
    // Snø, sørpe, istykkelsesum og ishøyder er lik i alle objektene. Dersom islag ikke er gitt er det bare ett element i tobj, og da gis IceLayerThickness = null
    var tobj = istykkelse;
	
	// Alle tykkelser gis i desimale meter, og alle må ha en verdi.

	var data = {};
    LagIstykkelseDataObject(tobj, data);
    var plott = element;
    // Plottevindu til venstre
   // var tchartdiv = 'icethicknessdiv';
 //   var innerHTML = '<div style="float:right;clear:both;border: 3px solid #fad5aa;background-color:#ffffe6;padding:2px 0px 2px 5px;margin:10px 0px 0px 5px;">'
        //+ '<div id="' + tchartdiv + '" style="border: none;background-color:#ffffe6;"></div></div>';

    //var hoved = element;//document.getElementById('hoved'); 
    //plott.innerHTML = innerHTML;
 
    // Plotteområdet
    plott.divId = element2.id;
    // Feilmeldingsområde (ikke bruk)
    plott.feilId = null;
    // Størrelse på plottet i piksler
    plott.maxwidth = 120;
    plott.maxheight = 250;
    DefinerEnIstykkelsePlottLayout(plott)
    PlottEnIstykkelse(data, plott, 0, element2);
}
 
//------------------------------------------------------------------------------------------------------------
// Subrutiner (function):
//   DefinerEnIstykkelsePlottLayout                - Bygger opp et plotteobjekt for en istykkelse
//   PlottEnIstykkelse                             - Plott istykkelse for observasjonen med indeks tobs
//   PlottFinnAkseVerdier                          - Foreslår akseintervaller fra gitte ytterverdier og foreslått totalantall av aksemerker
//   PlottRektanglerIstykkelse                     - Lag rektangel objektene for hvert islag
//   SettInnLinjeskift                             - Deler s i n deler dersom lengden av s er større enn nmaks (denne varianten virker bare med ndeler = 2)
//   LagIstykkelseDataObject                       - Lagrer istykkelsene i objektet "data" til bruk i plotting
//   BeregnIshoyde                                 - Beregner ishøyden basert på islagene sin masse og obserert total istykkelse


function DefinerEnIstykkelsePlottLayout(plott) {
    // Bygger opp et plotteobjekt for en istykkelse
    // plott er et objekt med disse egenskapene
    //   plott.divId                    - Id til div som det skal plottes i
    //   plott.feilId                   - Id til div med feilmeldinger (=null betyr ingen skriving av feilmelding)
    //   plott.maxwidth                 - Pixelbredden på plottet. null angir at bredden ikke skal endre
    //   plott.maxheight                - Pixelhøyden på hele plottet. Overskrides dersom teksten blir for liten, blir mindre dersom teksten blir for stor.
    //   plott.backgroundcolor          - Bakgrunnsfarge
    //   plott.fontsizelabel            - Pixelstørrelse på labeltekst
    //   plott.fontsizeticks            - Pixelstørrelse på aksetekst
    //   plott.xaxis                    - Objekt med elementer knyttet til x-aksen
    //   plott.xaxis.lower              - Nedre x-verdi på x-aksen
    //   plott.xaxis.upper              - Øvre x-verdi på x-aksen
    //   plott.x1                       - Nedre x-verdi på området istypen tegnes
    //   plott.x2                       - Øvre x-verdi på området istypen tegnes
    //   plott.yaxis                    - Objekt med elementer knyttet til y-aksen
    //   plott.istype                   - Array som beskriver plotting av de ulike istypene
    //   plott.istype[i].verdi          - Typisk IceThicknessTID fra regObs
    //   plott.patterndirection         - 0 = helfarge, 1 = Horisontale streker, 2 = Vertikale streker
    //   plott.istype[i].fargeindre1    - Primærarge i JQPLOT-style på rektangelets indre. Eksempel er 'rgba(64, 64, 64, 0.7)'. Denne fargen brukes også i en eventuell label.
    //   plott.istype[i].fargeindre2    - Sekundærfarge i JQPLOT-style på rektangelets indre. Eksempel er 'rgba(64, 64, 64, 0.7)'. Denne fargen brukes også i en eventuell label.
    //   plott.istype[i].fargepattern   - Array av tre tall der første angir antall vertikale inndelinger (0 angir kun primærfargen), det andre og tredje angir hvor mange ganger fargene skal gjentas før det byttes mellom primær og sekundær farge.
    //   plott.istype[i].linjetype      - Type linje rundt rektangelet. Skal alltid være heltrukken 'solid'
    //   plott.istype[i].fargekant      - Farge på linjen rundt rektangelet
    //   plott.istype[i].tykkelse       - Tykkelsen på linjen rundt rektangelet i piksler. Tykkelse 0 tegner ingen strek rundt rektangelet.
    //   plott.istype[i].label          - Sann hvis den skal vises blandt labelene
    //   plott.istype[i].tlabel         - Tekst til en eventuell label og mouseover

    // Akseobjektene
    if (plott.xaxis == null) plott.xaxis = {};
    if (plott.yaxis == null) plott.yaxis = {};

    // Plott størrelser må være satt
    if (plott.maxwidth == null) plott.maxwidth = 150;
    if (plott.maxheight == null) plott.maxheight = 250;

    // Bakgrunnsfarge og tegnstørrelser
    plott.backgroundcolor = '#fafafa';
    plott.fontsizelabel = '12px';
    plott.fontsizeticks = '12px';

    // x-akse
    plott.xaxis.lower = 0.0;
    plott.xaxis.upper = 1.0;
    plott.x1 = 0.2;
    plott.x2 = 0.8;

    var istype = new Array();
    // Sørpe. Lys blå
    var tistype = new Object();
    tistype.verdi = 900;
    tistype.patterndirection = 2;
    tistype.fargeindre1 = 'rgb(255, 255, 255)';
    tistype.fargeindre2 = 'rgb(100, 255, 255)';
    tistype.fargepattern = [15, 1, 1];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Sørpe';
    istype.push(tistype);
    // Snø. Hvit
    var tistype = new Object();
    tistype.verdi = 901;
    tistype.patterndirection = 0;
    tistype.fargeindre1 = 'rgb(255, 255, 255)';
    tistype.fargepattern = [0, 0, 0];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Snø';
    istype.push(tistype);
    // Ukjent istype. Lys grå
    var tistype = new Object();
    tistype.verdi = 0;
    tistype.patterndirection = 1;
    tistype.fargeindre1 = 'rgb(100, 100, 100)';
    tistype.fargeindre2 = 'rgb(166, 166, 166)';
    tistype.fargepattern = [15, 1, 1];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Ukjent istype';
    istype.push(tistype);
    // Stålis. Mørkere grå enn sørpeis
    var tistype = new Object();
    tistype.verdi = 1;
    tistype.patterndirection = 0;
    tistype.fargeindre1 = 'rgb(100, 100, 100)';
    tistype.fargepattern = [0, 0, 0];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Stålis';
    istype.push(tistype);
    // Sørpeis. Lys grå
    var tistype = new Object();
    tistype.verdi = 3;
    tistype.patterndirection = 0;
    tistype.fargeindre1 = 'rgb(166, 166, 166)';
    tistype.fargepattern = [0, 0, 0];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Sørpeis';
    istype.push(tistype);
    // Vann/sørpe (mellomlag). Ganske blå
    var tistype = new Object();
    tistype.verdi = 5;
    tistype.patterndirection = 2;
    tistype.fargeindre1 = 'rgb(72, 150, 250)';
    tistype.fargeindre2 = 'rgb(100, 255, 255)';
    tistype.fargepattern = [15, 1, 1];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Vann/sørpe (mellomlag)';
    istype.push(tistype);
    // Trolig sammenfrosset lag av sørpeis og stålis. Lys grå
    var tistype = new Object();
    tistype.verdi = 7;
    tistype.patterndirection = 1;
    tistype.fargeindre1 = 'rgb(100, 100, 100)';
    tistype.fargeindre2 = 'rgb(166, 166, 166)';
    tistype.fargepattern = [15, 1, 1];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Trolig sørpeis+stålis';
    istype.push(tistype);
    // Sarr. Nesten hvit
    var tistype = new Object();
    tistype.verdi = 9;
    tistype.patterndirection = 0;
    tistype.fargeindre1 = 'rgb(220, 220, 220)';
    tistype.fargepattern = [0, 0, 0];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Sarr';
    istype.push(tistype);
    // Stålis i nedbryting. Som stålis, men med noen lyseblå streker
    var tistype = new Object();
    tistype.verdi = 11;
    tistype.patterndirection = 2;
    tistype.fargeindre1 = 'rgb(100, 100, 100)';
    tistype.fargeindre2 = 'rgb(100, 255, 255)';
    tistype.fargepattern = [15, 3, 1];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Stålis i nedbryting';
    istype.push(tistype);
    // Sørpeis i nedbryting. Lys grå mot blå
    var tistype = new Object();
    tistype.verdi = 13;
    tistype.patterndirection = 2;
    tistype.fargeindre1 = 'rgb(166, 166, 166)';
    tistype.fargeindre2 = 'rgb(200, 255, 255)';
    tistype.fargepattern = [15, 3, 1];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Sørpeis i nedbryting';
    istype.push(tistype);
    // Stavis - våris. Grå med tett med blå striper
    var tistype = new Object();
    tistype.verdi = 14;
    tistype.patterndirection = 2;
    tistype.fargeindre1 = 'rgb(100, 100, 100)';
    tistype.fargeindre2 = 'rgb(100, 255, 255)';
    tistype.fargepattern = [15, 1, 1];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Stavis (våris)';
    istype.push(tistype);
    // Annet. Lys grå
    var tistype = new Object();
    tistype.verdi = 99;
    tistype.patterndirection = 1;
    tistype.fargeindre1 = 'rgb(100, 100, 100)';
    tistype.fargeindre2 = 'rgb(166, 166, 166)';
    tistype.fargepattern = [15, 1, 1];
    tistype.linjetype = 'solid';
    tistype.fargekant = 'rgb(50, 50, 50)';
    tistype.tykkelse = 1;
    tistype.label = true;
    tistype.tlabel = 'Annet';
    istype.push(tistype);
    // Knytt istypen til plotteobjektet
    plott.istype = istype;
}

function PlottEnIstykkelse(data, plott, tobs, element2) {
    // Plott istykkelse for observasjonen med indeks tobs
    // data er et objekt med disse egenskapene
    //   data.overskrift                - Overskrift over plottet
    //   data.melding                   - Feilmeldinger som returneres
    //   data.obs                       - Array av objekter med istykkelsesmålinger
    //   data.IceThicknessSum           - Total istykkelse. Er den 0 anses det som isfritt og ingen islag lagres
    //   data.obs[tobs].date               - Dato
    //   data.obs[tobs].islag              - Array av objekter med islaginformasjon. Et objekt for hvert islag
    //   data.obs[tobs].islag[i].y1        - Bunn av islaget
    //   data.obs[tobs].islag[i].y2        - Topp av islaget   
    //   data.obs[tobs].islag[i].istype    - Kode som angir istype. Bruker regObs koder + spesialkoder: Sørpe = 900 og Snø = 901
    //   data.obs[tobs].islag[i].istypenavn- Navn på istypen. Hentes fra RegObs
    // plott er et objekt med disse egenskapene
    //   plott.divId                    - Id til div som det skal plottes i
    //   plott.sesongId                 - Id til div med valg av fokusert sesong
    //   plott.feilId                   - Id til div med feilmeldinger (=null betyr ingen skriving av feilmelding)
    //   plott.maxwidth                 - Pixelbredden på plottet. null angir at bredden ikke skal endre
    //   plott.maxheight                - Pixelhøyden på hele plottet. Overskrides dersom teksten blir for liten, blir mindre dersom teksten blir for stor.
    //   plott.backgroundcolor          - Bakgrunnsfarge
    //   plott.fontsizelabel            - Pixelstørrelse på labeltekst
    //   plott.fontsizeticks            - Pixelstørrelse på aksetekst
    //   plott.xaxis                    - Objekt med elementer knyttet til x-aksen
    //   plott.xaxis.lower              - Nedre x-verdi på x-aksen
    //   plott.xaxis.upper              - Øvre x-verdi på x-aksen
    //   plott.x1                       - Nedre x-verdi på området istypen tegnes
    //   plott.x2                       - Øvre x-verdi på området istypen tegnes
    //   plott.istype                   - Array som beskriver plotting av de ulike istypene
    //   plott.istype[j].verdi          - Typisk IceThicknessTID fra regObs
    //   plott.istype[j].fargeindre1    - Primærarge i JQPLOT-style på rektangelets indre. Eksempel er 'rgba(64, 64, 64, 0.7)'. Denne fargen brukes også i en eventuell label.
    //   plott.istype[j].fargeindre2    - Sekundærfarge i JQPLOT-style på rektangelets indre. Eksempel er 'rgba(64, 64, 64, 0.7)'. Denne fargen brukes også i en eventuell label.
    //   plott.istype[j].fargepattern   - Array av tre tall der første angir antall vertikale inndelinger (0 angir kun primærfargen), det andre og tredje angir hvor mange ganger fargene skal gjentas før det byttes mellom primær og sekundær farge.
    //   plott.istype[j].linjetype      - Type linje rundt rektangelet. Skal alltid være heltrukken 'solid'
    //   plott.istype[j].fargekant      - Farge på linjen rundt rektangelet
    //   plott.istype[j].tykkelse       - Tykkelsen på linjen rundt rektangelet i piksler. Tykkelse 0 tegner ingen strek rundt rektangelet.
    //   plott.istype[j].label          - Sann hvis den skal vises blandt labelene
    //   plott.istype[j].tlabel         - Tekst til en eventuell label og mouseover


    var i, j, n, ymax, ymin, tistype;

    // Noe å plotte?
    if (data.obs == null || data.obs.length < (tobs + 1) || data.obs[tobs].islag == null || data.obs[tobs].islag.length == 0) {
        data.melding = 'Ingen istykkelse funnet';
        return; // Ingen ting å plotte
    }

    // Forkorter skriving
    var tobj = data.obs[tobs];
    n = tobj.islag.length;

    // Finn øvre og nedre y-verdi
    ymax = tobj.islag[0].y2;
    ymin = tobj.islag[0].y1;
    for (i = 1; i < n; i++) {
        if (tobj.islag[i].y2 > ymax) ymax = tobj.islag[i].y2;
        if (tobj.islag[i].y1 < ymin) ymin = tobj.islag[i].y1;
    }

    // Finn intervaller langs y-aksen
    if (ymin > -5) ymin = -5;  // Skal minst ha 5 cm i plottet for ikke å få for liten inndeling
    PlottFinnAkseVerdier(plott.yaxis, ymin, ymax, Math.round(plott.maxheight / 40));

    // Merker langs y-aksen
    var yticks = new Array();
    var y = plott.yaxis.lower;
    while (y < (plott.yaxis.upper + (plott.yaxis.interval * 0.1))) {
        var subticks = new Array();
        subticks.push(y);
        subticks.push(y.toString());
        yticks.push(subticks);
        y += plott.yaxis.interval;
    }

    // Merker langs x-aksen
    var xticks = new Array();
    var subticks = new Array();
    subticks.push(plott.xaxis.lower);
    subticks.push('');
    xticks.push(subticks);
    var subticks = new Array();
    subticks.push(plott.xaxis.upper);
    subticks.push('');
    xticks.push(subticks);

    // Lag objekter med linjer
    var myObject = new Array();

    // Nulllinjen
    var tObject = new Object();
    var tline = new Object();
    tline.start = new Array();
    tline.start.push(plott.xaxis.lower);
    tline.start.push(0.0);
    tline.stop = new Array();
    tline.stop.push(plott.xaxis.upper);
    tline.stop.push(0.0);
    tline.lineWidth = 2;
    tline.linePattern = 'dotted';
    tline.color = 'rgb(50, 50, 50)';
    tline.shadow = false;
    tObject.line = tline;
    myObject.push(tObject);

    // Beregn plottstørrelsen
    var wantedheight = plott.maxheight;
    var wantedwidth = plott.maxwidth;
    var neededforheading = 50;                      // Plass over til overskrift.
    if (data.overskrift == null || data.overskrift.length == 0) neededforheading = 0;
    plott.wantedplotareaheight = wantedheight - neededforheading;

    // Tegn rektanglene for hver istype
    PlottRektanglerIstykkelse(myObject, tobj, plott);

    // Sett bredde
    //document.getElementById(plott.divId).style.width = wantedwidth + 'px';
    //plott.style.width = wantedwidth + 'px';

    // Tegn plottet
    $.jqplot.config.enablePlugins = true;
    var line1 = [[null, null]];
    var line2 = [[null, null]];
    var line3 = [[null, null]];
    var line4 = [[null, null]];
    var tline = [line1, line2, line3, line4];
    
    $.jqplot(element2.id, tline,
        {
            title: data.overskrift,
            height: plott.wantedplotareaheight,
            axes: {
                yaxis:{
                    label: 'Snø og is relativt til vannflaten [cm]',
                    labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                    labelOptions: {
                        fontSize: plott.fontsizelabel
                    },
                    ticks: yticks,
                    tickOptions: {
                        fontSize: plott.fontsizeticks
                    }
                },
                xaxis: {
                    showTicks: false,
                    showTickMarks: false,
                    min: plott.xaxis.lower,
                    max: plott.xaxis.upper,
                    tickOptions: {
                        showGridline: false
                    }
                }
            },
            grid: {
                drawGridlines: true,
                background: plott.backgroundcolor,
                shadow: false
            },
            canvasOverlay: {
                show: true,
                objects: myObject
            }
        });
}

function PlottFinnAkseVerdier(akse, ymin, ymax, nsugg) {
    // Foreslår akseintervaller fra gitte ytterverdier og foreslått totalantall av aksemerker
    // Returnerer:
    // akse må være et eksisterende objekt
    // akse.lower     - Nederste aksemerke
    // akse.upper     - Øverste aksemerke
    // akse.interval  - Intervall
    // Input:
    // ymin           - Minste y-verdi blandt data
    // ymax           - Største y-verdi blant data
    // nsugg          - Foreslått antall merker langs y-aksen
    // Beregner slik at intervallene alltid går gjennom 0, intervallet skal gå opp med 1, 2 ellr 5

    var tdiff, suggint, faktor, y;

    tdiff = ymax -ymin;
    if (tdiff <= 0) {
        // Umulige verdier
        akse.interval = 0;
        return;
    }

    suggint = tdiff / nsugg;
    faktor = 1;

    if (suggint < 1) {
        // Gang med 10 til tallet blir større eller lik 1
        while (suggint < 1) {
            suggint = suggint * 10;
            faktor = faktor / 10;
        }
    }
    else if (suggint >= 10) {
        while (suggint >= 10) {
            suggint = suggint / 10;
            faktor = faktor * 10;
        }
    }

    if (suggint <= 2)
        suggint = 2 * faktor;
    else if (suggint <= 5)
        suggint = 5 * faktor;
    else
        suggint = 10 * faktor;

    akse.interval = suggint;

    // Nedre akse
    y = 0;
    if (ymin < 0) {
        while (y > ymin) {
            y -= suggint;
        }
    }
    else if (ymin > 0) {
        while (y <= ymin) {
            y += suggint;
        }
        y -= suggint;
    }
    // Sjekk at det er minst 10 % av et intervall luft i bunn av plottet
    if ((ymin -y) < (suggint * 0, 1)) y -= suggint;
    akse.lower = y;
    // Øvre akse
    y = 0;
    if (ymax < 0) {
        while (y >= ymax) {
            y -= suggint;
        }
        y += suggint;
    }
    else if (ymax > 0) {
        while (y < ymax) {
            y += suggint;
        }
    }
    // Sjekk at det er minst 10 % av et intervall luft i toppen av plottet
    if ((y - ymax) < (suggint * 0, 1)) y += suggint;
    akse.upper = y;
}

function PlottRektanglerIstykkelse(myObject, tobj, plott) {
    // Lag rektangel objektene for hvert islag
    var i, j, n, sumy, tint, xpx, ypx, tpattern, lastx, lasty;

    // Antall islag
    n = tobj.islag.length;

    // Summer yverdiene (øverst i første til nederst i siste)
    sumy = tobj.islag[0].y2 - tobj.islag[n-1].y1;

    for (i = 0; i < n; i++) {
        // Finn plottelementet som tilsvarer denne istypen
        var tistype = tobj.islag[i].istype;
        for (j = 0; j < plott.istype.length; j++) {
            if (plott.istype[j].verdi == tistype) break;
        }
        if (j == plott.istype.length) {
            // Dette vil skje om nye istyper legges til i regObs uten at programmet oppdateres.
            alert('Ikke identifisert IceLayerTID = ' +tistype + ' plottes som ukjent istype.');
            j = 2;
        }
        if (plott.istype[j].patterndirection == 0) {
            // Kun en farge
            var tObject = new Object();
            var trect = new Object();
            trect.xmin = plott.x1;
            trect.xmax = plott.x2;
            trect.ymin = tobj.islag[i].y1;
            trect.ymax = tobj.islag[i].y2;
            trect.color = plott.istype[j].fargeindre1;
            trect.showTooltip = true;
            trect.tooltipLocation = 'n';
            trect.tooltipOffset = '10';
            trect.tooltipFormatString = SettInnLinjeskift(tobj.islag[i].istypenavn, 10, 2) + '<br> '
                +(tobj.islag[i].y2 - tobj.islag[i].y1) + ' cm';
            tObject.rectangle = trect;
            myObject.push(tObject);
        }
        else if (plott.istype[j].patterndirection == 1) {
            // Horisontale streker
            // Intervallet er bestemt av bredden på plottet, og tilstrebes å bli lik når vi tegner horisontale bokser, for forholdet høyde/bredde er ikke kjent.
            // Høyde og bredde (omtrentlig) i skjermpiksler
            xpx = (plott.maxwidth - 60) * 0.6;     // Tar bort aksetekst og luft (omtrentlig)
            if (xpx < 0) xpx = 30;                 // Minimumsverdi
            ypx = plott.wantedplotareaheight -15;  // Tar bort litt luft
            if (ypx < 0) ypx = 30;                 // Minimumsverdi
            tint = (plott.yaxis.upper - plott.yaxis.lower) * (xpx / ypx) / plott.istype[j].fargepattern[0];
            // Tegner ovenifra og nedover
            lasty = tobj.islag[i].y2;
            tpattern = 1;
            while (lasty > (tobj.islag[i].y1 + (tint * 0.1))) {   // Trekker fra 10 % av intervallet for å unngå avrundingsfeil
                // Plotter neste delrektangel
                var tObject = new Object();
                var trect = new Object();
                trect.xmin = plott.x1;
                trect.xmax = plott.x2;
                trect.ymax = lasty;
                trect.ymin = trect.ymax - tint * plott.istype[j].fargepattern[tpattern];
                if (trect.ymin < tobj.islag[i].y1) trect.ymin = tobj.islag[i].y1;
                if (tpattern == 1)
                    trect.color = plott.istype[j].fargeindre1;
                else
                    trect.color = plott.istype[j].fargeindre2;
                trect.showTooltip = true;
                trect.tooltipLocation = 'n';
                trect.tooltipOffset = '10';
                trect.tooltipFormatString = SettInnLinjeskift(tobj.islag[i].istypenavn, 10, 2) + '<br> '
                    +(tobj.islag[i].y2 - tobj.islag[i].y1) + ' cm';
                tObject.rectangle = trect;
                myObject.push(tObject);
                // Neste delrektangel
                tpattern += 1;
                if (tpattern > 2) tpattern = 1;  // Veksler mellom 1 og 2
                lasty = trect.ymin;
            }
        }
        else if (plott.istype[j].patterndirection == 2) {
            // Vertikale streker
            // Intervall
            tint = (plott.x2 - plott.x1) / plott.istype[j].fargepattern[0];
            lastx = plott.x1;
            tpattern = 1;
            while (lastx < (plott.x2 - (tint * 0.1))) {   // Trekker fra 10 % av intervallet for å unngå avrundingsfeil
                // Plotter neste delrektangel
                var tObject = new Object();
                var trect = new Object();
                trect.xmin = lastx;
                trect.xmax = trect.xmin + tint * plott.istype[j].fargepattern[tpattern];
                if (trect.xmax > plott.x2) trect.xmax = plott.x2;
                trect.ymin = tobj.islag[i].y1;
                trect.ymax = tobj.islag[i].y2;
                if (tpattern == 1)
                    trect.color = plott.istype[j].fargeindre1;
                else
                    trect.color = plott.istype[j].fargeindre2;
                trect.showTooltip = true;
                trect.tooltipLocation = 'n';
                trect.tooltipOffset = '10';
                trect.tooltipFormatString = SettInnLinjeskift(tobj.islag[i].istypenavn, 10, 2) + '<br> '
                    + (tobj.islag[i].y2 - tobj.islag[i].y1) + ' cm';
                tObject.rectangle = trect;
                myObject.push(tObject);
                // Neste delrektangel
                tpattern += 1;
                if (tpattern > 2) tpattern = 1;  // Veksler mellom 1 og 2
                lastx = trect.xmax;
            }
        }

        // Plott linjen rundt
        if (plott.istype[j].tykkelse > 0) {
            // Linjen til venstre
            var tObject = new Object();
            var tline = new Object();
            tline.start = new Array();
            tline.start.push(0.2);
            tline.start.push(tobj.islag[i].y1);
            tline.stop = new Array();
            tline.stop.push(0.2);
            tline.stop.push(tobj.islag[i].y2);
            tline.lineWidth = plott.istype[j].tykkelse;
            tline.color = plott.istype[j].fargekant;
            tline.shadow = false;
            tObject.line = tline;
            myObject.push(tObject);
            // Linjen over rektangelet
            var tObject = new Object();
            var tline = new Object();
            tline.start = new Array();
            tline.start.push(0.2);
            tline.start.push(tobj.islag[i].y2);
            tline.stop = new Array();
            tline.stop.push(0.8);
            tline.stop.push(tobj.islag[i].y2);
            tline.lineWidth = plott.istype[j].tykkelse;
            tline.color = plott.istype[j].fargekant;
            tline.shadow = false;
            tObject.line = tline;
            myObject.push(tObject);
            // Linjen til høyre
            var tObject = new Object();
            var tline = new Object();
            tline.start = new Array();
            tline.start.push(0.8);
            tline.start.push(tobj.islag[i].y2);
            tline.stop = new Array();
            tline.stop.push(0.8);
            tline.stop.push(tobj.islag[i].y1);
            tline.lineWidth = plott.istype[j].tykkelse;
            tline.color = plott.istype[j].fargekant;
            tline.shadow = false;
            tObject.line = tline;
            myObject.push(tObject);
            // Linjen under rektangelet
            var tObject = new Object();
            var tline = new Object();
            tline.start = new Array();
            tline.start.push(0.8);
            tline.start.push(tobj.islag[i].y1);
            tline.stop = new Array();
            tline.stop.push(0.2);
            tline.stop.push(tobj.islag[i].y1);
            tline.lineWidth = plott.istype[j].tykkelse;
            tline.color = plott.istype[j].fargekant;
            tline.shadow = false;
            tObject.line = tline;
            myObject.push(tObject);
        }
    }
}

function SettInnLinjeskift(s, nmaks, ndeler) {
    // Deler s i n deler dersom lengden av s er større enn nmaks (denne varianten virker bare med ndeler = 2)
    // Deler med tegnet <br>, altså for html-tegnstreng.
    // Deler ikke dersom det ikke er blanke tegn å erstatte
    var news, j, k, midt, minindx;
    if (s == null) {
        // Ingen tegnstreng
        return news;
    }
    if (s.length <= nmaks) {
        // Trengs ikke deles
        news = s;
        return news;
    }
    // Må dele. Finn delepunktet som er nærmest midten.
    midt = s.length / 2.0;
    var mindist = s.length;
    minindx = -1;
    j = 0;
    while (j < s.length) {
        k = s.substr(j).indexOf(' ');
        if (k < 0) break;
        j = k + j;
        if (Math.abs(j - midt) < mindist) {
            mindist = Math.abs(j - midt);
            minindx = j;
        }
        j = j + 1;
    }
    if (minindx >= 0) {
        // Erstatt med <br>
        news = s.substring(0, minindx) + '<br>' + s.substr(minindx + 1);
    }
    else news = s;
    return news;
}

function LagIstykkelseDataObject(tobj, data) {
    // Lagrer istykkelsene i objektet "data" til bruk i plotting
    // Input data er et objekt returnert etter et ODATA kall til IskartPlotIceThicknessV
    // data er et objekt med disse egenskapene
    //   data.overskrift                - Overskrift over plottet. Defineres ikke her.
    //   data.melding                   - Feilmeldinger som returneres
    //   data.obs                       - Array av objekter med istykkelsesmålinger
    //   data.obs[i].date               - Dato
    //   data.obs[i].IceThicknessSum    - Total istykkelse. Er den 0 anses det som isfritt og ingen islag lagres
    //   data.obs[i].SnowThicknessSum   - Total snøtykkelse. Er den null settes den til 0. Sum av tørr snø og sørpe.
    //   data.obs[i].ishoyde            - Avstanden fra toppen av isoverflaten til vannflaten. Negativ ved overvann.
    //   data.obs[i].islag              - Array av objekter med islaginformasjon. Et objekt for hvert islag
    //   data.obs[i].islag[i].y1        - Bunn av islaget
    //   data.obs[i].islag[i].y2        - Topp av islaget   
    //   data.obs[i].islag[i].istype    - Kode som angir istype. Bruker regObs koder + spesialkoder: Sørpe = 900 og Snø = 901
    //   data.obs[i].islag[i].istypenavn- Navn på istypen. Hentes fra RegObs

    var n = tobj.length;
    if (n == 0) {
        data.melding = 'Ingen data';
        return;
    }

    var i, j, tRegID, ishoyde, tbunn, ttopp, snotykkelse, Ishoydegitt;
    var obs = [];
    var pRegID = -1000;

    for (i = 0; i <= n; i++) {
        if (i < n) tRegID = tobj[i].RegID;
        if (i == n || tRegID != pRegID) {
            if (i != 0) {
                // Lagre forrige objekt
                // Først korriger for beregnet ishøyde om den ikke var gitt
                if (!Ishoydegitt) {
                    tobs.ishoyde = BeregnIshoyde(islag);
                }
                else {
                    tobs.ishoyde = ishoyde;
                }
                // Korriger islagene for ishøyden
                for (j = 0; j < islag.length; j++) {
                    islag[j].y1 += tobs.ishoyde;
                    islag[j].y2 += tobs.ishoyde;
                }
                tobs.islag = islag;
                obs.push(tobs);
                if (i == n) {
                    // Avslutter
                    data.obs = obs;
                    break;
                }
            }
            // Definer objekter
            var tobs = {};
            var islag = [];
            // Tidspunkt
            if (tobj[i].DtObsTime != null) {
                tobs.date = JsonDate_to_Date(tobj[i].DtObsTime);
            }
            else tobs.date = null;
            // Total istykkelse
            tobs.IceThicknessSum = Math.round(tobj[i].IceThicknessSum * 1000) / 10;
            // Overvann/Ishøyde. Korrigerer for dette ved lagring
            if (tobj[i].IceHeightBefore != null && tobj[i].IceHeightBefore < 0) {
                ishoyde = Math.round(tobj[i].IceHeightBefore * 1000) / 10;
                Ishoydegitt = true;
            }
            else if (tobj[i].IceHeightAfter != null) {
                ishoyde = Math.round(tobj[i].IceHeightAfter * 1000) / 10;
                Ishoydegitt = true;
            }
            else {
                Ishoydegitt = false;
            }
            // Sørpe
            snotykkelse = 0;
            tbunn = 0;
            if (tobj[i].SlushSnow != null) {
                var tislag = {};
                tislag.y1 = tbunn;
                tislag.y2 = tislag.y1 + Math.round(tobj[i].SlushSnow * 1000) / 10;
                tbunn = tislag.y2;
                tislag.istype = 900;
                tislag.istypenavn = 'Sørpe';
                islag.push(tislag);
                snotykkelse += Math.round(tobj[i].SlushSnow * 1000) / 10;
            }
            // Snø
            if (tobj[i].SnowDepth != null) {
                var tislag = {};
                tislag.y1 = tbunn;
                tislag.y2 = tislag.y1 + Math.round(tobj[i].SnowDepth * 1000) / 10;
                tislag.istype = 901;
                tislag.istypenavn = 'Snø';
                islag.push(tislag);
                snotykkelse += Math.round(tobj[i].SnowDepth * 1000) / 10;
            }
            tobs.SnowThicknessSum = snotykkelse;
            ttopp = 0;
            pRegID = tRegID;
        }
        if (tobj[i].IceLayerThickness == null) {
            // Islag ikke gitt. Bruk total istykkelse. Vet da at det bare er en linje for denne RegID.
            if (tobj[i].IceThicknessSum != null) {
                var tislag = {};
                tislag.y2 = ttopp;
                tislag.y1 = tislag.y2 - Math.round(tobj[i].IceThicknessSum * 1000) / 10;
                ttopp = tislag.y1;
                tislag.istype = 0;
                tislag.istypenavn = 'Ukjent';
                islag.push(tislag);
            }
        }
        else {
            // Ta islag for islag. Forventer at de er sortert i kallet fra regObs slik at de øverste kommer først
            if (tobj[i].IceLayerThickness != null) {
                var tislag = {};
                tislag.y2 = ttopp;
                tislag.y1 = tislag.y2 - Math.round(tobj[i].IceLayerThickness * 1000) / 10;
                ttopp = tislag.y1;
                tislag.istype = tobj[i].IceLayerTID;
                tislag.istypenavn = tobj[i].IceLayerName;
                islag.push(tislag);
            }
        }
    }
}

function BeregnIshoyde(islag) {
    // Beregner ishøyden basert på islagene sin masse og obserert total istykkelse
    // islag er en array av objekter som må inneholde disse elementene:
    //   islag[i].y1        - Bunn av islaget
    //   islag[i].y2        - Topp av islaget   
    //   islag[i].istype    - Kode som angir istype. Bruker regObs koder + spesialkoder: Sørpe = 900 og Snø = 901


    var masse = 0;
    var tdensity;
    for (j = 0; j < islag.length; j++) {
        // tetthet for dette laget
        if (islag[j].istype == 900 || islag[j].istype == 5 || islag[j].istype == 9 || islag[j].istype == 14) {
            // sørpe eller sarr eller stavis. Isen og sørpen er full av tungt vann.
            tdensity = 0.92;
        }
        else if (islag[j].istype == 901) {
            // snø
            tdensity = 0.35;
        }
        else if (islag[j].istype == 0 || islag[j].istype == 3 || islag[j].istype == 99) {
            // sørpeis eller ukjent istype
            tdensity = 0.875;
        }
        else if (islag[j].istype == 7) {
            // sørpeis og stålis
            tdensity = 0.9;
        }
        else if (islag[j].istype == 1 || islag[j].istype == 11) {
            // stålis eller stålis i nedbryting
            tdensity = 0.917;
        }
        else if (islag[j].istype == 13) {
            // sørpeis i nedbryting. Ligger gjerne tørt øverst med liten masse.
            tdensity = 0.5;
        }
        // masse for dette laget
        masse += (islag[j].y2 - islag[j].y1) * tdensity;
    }
    // Høyden på vannsøylen med tilsvarende vekt som alle islagene
    var vannhoyde = masse;
    // Hva blir ishøyden, dvs høyden fra isoverflaten til vannflaten
    var ishoyde = -islag[islag.length - 1].y1 - vannhoyde;
    return ishoyde;
}