var indexContent = `
	<ul>
		<li><a href="/index">homepage</a></li>
		<li><a href="/main/aboutme">about me</a></li>
		<li><a href="" id="phiLink">gaming</a><br></li>
		<li>blogposts?</li>
			<ol>
				<li><a href="/main/blogposts/life29time04spot2022">spot of a lifetime</a></li>
			</ol>
		<li><a href="/main/music">music</a><br></li>
		<li><a href="/main/images">images</a><br></li>
		<li><a href="/main/qualia">qualia</a><br></li>
	</ul>`;
	
document.getElementById("index").innerHTML = indexContent;