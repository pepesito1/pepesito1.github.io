var indexContent = `
	<ul>
		<li><a href="/">homepage</a></li>
		<li><a href="/main/aboutme">about me</a></li>
		<li><a href="" id="phiLink">gaming</a><br></li>
		<li>blogposts?</li>
			<ol>
				<p>--2022--</p>
				<li><a href="/main/blogposts/life29time04spot2022">spot of a lifetime</a></li>
				<li><a href="/main/blogposts/happ25iest05girl2022">pepesito for inkie</a></li>
				<li><a href="/main/blogposts/per16fect06ruiz2022">cloudy day sunny day</a></li>
				<li><a href="/main/blogposts/prelude04tothe07truth2022">white fatalis mask</a></li>
				<li><a href="/main/blogposts/santa26claus07hat2022">ImThinkingAboutYouEvenThoughWeLastMetLike9YearsAgo</a></li>
				<li><a href="/main/blogposts/none09for08all2022">i could do this for money. i dont. but i could.</a></li>
				<li><a href="/main/blogposts/punch17yourlights09out2022">hows this for a plan?</a></li>
				<li><a href="/main/blogposts/abigail13on10terraria2022">nice roar. but mines better.</a></li>
				<ol>
					<li><a href="/main/blogposts/allidid16idid10foryou2022">Relaxed Alcoholic Party</a></li>
				</ol>
				<li id="forRainbowText"></li>
				<ol>	
					<li><a href="/main/blogposts/stop24the11wheel2022">quien pudiera apaciguar esta angustia, esta locura?</a></li>
				</ol>
				<p>--2023--</p>
				<li>
					<a href="/main/blogposts/heyy13youuu01ASD2023"><img src="/media/yoshi1.webp" alt="first blogpost23"><img src="/media/yoshi2.webp" alt="first blogpost23"></a></li>
					<li><a href="/main/blogposts/free22the01soul2023">to the very ends with you, in another lifetime</a></li>
			</ol>
		<li><a href="/main/music">music</a><br></li>
		<li><a href="/main/images">images</a><br></li>
		<li><a href="/main/qualia">qualia</a><br></li>
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
var gay ='wow, im a nice guy'; //set string, in this case for the text thatll have the href thing
var lengthForText = gay.length; //grab the length, for the for loop
var e = 0; //variable to loop through the array

for (var i = 0; i <= lengthForText; i++){
    var substr = gay.substr(i,1); //split the text, letter by letter
    var result = substr.fontcolor(colorsArray[e]); //change the colors of the splitted letters
    document.getElementById("forRainbowText").innerHTML += "<a href='/main/blogposts/iapologize22forprettymuch11everything2022'>" + result + "</a>"; //add the letters one by one
    if (e === colorsArray.length - 1){ //this means that if the loop for the colors reached its end, then itll start again
        e = 0;
    } else {
        e++;
    }
 };