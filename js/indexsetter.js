var indexContent = `
	<ul>
		<li><a href="/">homepage</a></li>
		<li><a href="/main/un16dump10pepesitoista2024">pensamientos pepesitoistas de un hombre pepesitoista, escrito el 16 de octubre del 2024</a></li>
		<li><a href="/main/corazon25de10melon2024">The Resolve of Pepesito One, escrito el 25 de octubre de dude does anyone even read my webpage? hoy es el aniversario de club penguin tmbn</a></li>
		<li><a href="/main/the01answer11asd2024">"The Path of Pepesito One" escrito por un hombre muy aburrido en un viernes muy aburrido el 01 del 11 del 2024</a></li>
		<li><a href="/main/my13breaking11point2024">a alguien de aqui le gusta Luis Fonsi? 13112024</a></li>
		<li><a href="" id="phiLink">gaming</a><br></li>
			<ul>
				<li><div id="forRainbowText"></div></li>
				<li><a href="https://docs.google.com/spreadsheets/d/1NwINTIIBSaf_EEJwjrnr-V3ozfP2f1LvqZskqc_F6jQ/edit?usp=sharing">Pepesito1's Official (and kinda incomplete) Peak Media List</a><br></li>
			</ul>
		<li><a href="/main/music">music</a><br></li>
		<ol>
			<li><a href="/main/music2">music 2, 4-5 years later or such</a></li>
		</ol>
		<li><a href="/main/images">images</a><br></li>
		<li><a href="/main/qualia">qualia</a><br></li>
	</ul>`;

document.getElementById("index").innerHTML = indexContent;

//ALL OF THE FOLLOWING MESS IS FOR THE RAINBOW COLORS. TOOK ME 2 HOURS TO CODE		
var colorsArray = [ //the colors have to be strings
    'ff0000', //red
    'ff8000', //orange/yellow
    '00ff00', //green
    '63c6f7', //blue
    'ff00ff', //purple
];
var gay ='A Quick Little Quirky Note About My Gaming List'; //set string, in this case for the text thatll have the href thing
var lengthForText = gay.length; //grab the length, for the for loop
var e = 0; //variable to loop through the array

for (var i = 0; i <= lengthForText; i++){
    var substr = gay.substr(i,1); //split the text, letter by letter
    var result = substr.fontcolor(colorsArray[e]); //change the colors of the splitted letters
    document.getElementById("forRainbowText").innerHTML += "<a href='/main/gamingAp'>" + result + "</a>"; //add the letters one by one
    if (e === colorsArray.length - 1){ //this means that if the loop for the colors reached its end, then itll start again
        e = 0;
    } else {
        e++;
    }
 };