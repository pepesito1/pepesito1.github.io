var indexContent = `
	<ul>
		<li><a href="/">homepage</a></li>
		<li><a href="/main/aboutme">about me</a></li>
		<li><a href="" id="phiLink">gaming</a><br></li>
			<ul>
				<li><div id="forRainbowText"></div></li>
			</ul>
		<li><a href="/main/music">music</a><br></li>
		<li><a href="/main/images">images</a><br></li>
		<li><a href="https://drive.google.com/drive/folders/1sMv4B3EMVO4MVUFqsiIwzHgkO3SZWOg1?usp=sharing">"To The Person I Loved The Most" por Lester Papadopoulos</a><br></li>
		<li><a href="/main/kunai">"My Eternal Regret" by Lucas Fink</a><br></li>
		<li><a href="/main/lost23all09meaning2023">"A Line In The Sand" by... Pepesito1?!?!</a><br></li>
		<li><a href="/main/qualia">qualia</a><br></li>
		<li><a href="/main/aqualove">imagen Temporalmente Removida Mientras I Figure Out How To Do This One Thing</a>
		<li><a href="/main/hog">wasser</a><br></li>
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