intro.addEventListener('click',function(){
    console.log("intro");
    document.body.classList.remove("paleolithic");
    document.body.classList.remove("mesolithic");
    document.body.classList.remove("neolithic");
    document.body.classList.add('intro');
    document.getElementById('main-image').src="images/Stone_age_by_Vasnetsov_04.jpg";
	document.getElementById('main-image').alt="Stone Age";
    document.getElementById("image-title").innerHTML="Introduction";
    document.getElementById("image-description").innerHTML="The Stone Age was a broad prehistoric period during which stone was widely used to make stone tools with an edge, a point, or a percussion surface. The period lasted for roughly 3.4 million years and ended between 4000 BC and 2000 BC, with the advent of metalworking. The Stone Age is the first period in the three-age system frequently used in archaeology to divide the timeline of human technological prehistory into functional periods, with the next two being the Bronze Age and the Iron Age, respectively. The Stone Age is also commonly divided into three distinct periods: the earliest and most primitive being the Paleolithic era; a transitional period with finer tools known as the Mesolithic era; and the final stage known as the Neolithic era. [1]"
    document.getElementById("intro").style.background= "darkolivegreen";
    document.getElementById("paleolithic").style.background= "#8B4513";
    document.getElementById("mesolithic").style.background= "#8B4513";
    document.getElementById("neolithic").style.background= "#8B4513";
})

paleolithic.addEventListener('click',function(){
    console.log("paleolithic");
    document.body.classList.remove("intro");
    document.body.classList.remove("mesolithic");
    document.body.classList.remove("neolithic");
    document.body.classList.add('paleolithic');
    document.getElementById('main-image').src="images/Paleolithic.jpg";
	document.getElementById('main-image').alt="Paleolithic";
    document.getElementById("image-title").innerHTML="The Paleolithic Era";
    document.getElementById("image-description").innerHTML="The Paleolithic or Palaeolithic (c. 3.3 million – c. 11,700 BC) also called the Old Stone Age, is a period in human prehistory that is distinguished by the original development of stone tools, and which represents almost the entire period of human prehistoric technology. It extends from the earliest known use of stone tools by hominins, c. 3.3 million years ago, to the end of the Pleistocene, c. 11,650 cal BP. During the Paleolithic Age, hominins grouped together in small societies such as bands and subsisted by gathering plants, fishing, and hunting or scavenging wild animals. The Paleolithic Age is characterized by the use of knapped stone tools,[not verified in body] although at the time humans also used wood and bone tools. Other organic commodities were adapted for use as tools, including leather and vegetable fibers; however, due to rapid decomposition, these have not survived to any great degree. [2]"
    document.getElementById("paleolithic").style.background= "darkolivegreen";
    document.getElementById("intro").style.background= "#8B4513";
    document.getElementById("mesolithic").style.background= "#8B4513";
    document.getElementById("neolithic").style.background= "#8B4513";
})

mesolithic.addEventListener('click',function(){
    console.log("mesolithic");
    document.body.classList.remove("intro");
    document.body.classList.remove("paleolithic");
    document.body.classList.remove("neolithic");
    document.body.classList.add('mesolithic');
    document.getElementById('main-image').src="images/Mesolithic.jpg";
	document.getElementById('main-image').alt="Mesolithic";
    document.getElementById("image-title").innerHTML="The Mesolithic Era";
    document.getElementById("image-description").innerHTML="The Mesolithic or Middle Stone Age is the Old World archaeological period between the Upper Paleolithic and the Neolithic. The Mesolithic has different time spans in different parts of Eurasia. It refers to the final period of hunter-gatherer cultures in Europe and the Middle East, between the end of the Last Glacial Maximum and the Neolithic Revolution. In Europe it spans roughly 15,000 to 5,000 BP; in the Middle East (the Epipalaeolithic Near East) roughly 20,000 to 10,000 BP. The type of culture associated with the Mesolithic varies between areas, but it is associated with a decline in the group hunting of large animals in favour of a broader hunter-gatherer way of life, and the development of more sophisticated and typically smaller lithic tools and weapons than the heavy-chipped equivalents typical of the Paleolithic. [3]"
    document.getElementById("mesolithic").style.background= "darkolivegreen";
    document.getElementById("intro").style.background= "#8B4513";
    document.getElementById("paleolithic").style.background= "#8B4513";
    document.getElementById("neolithic").style.background= "#8B4513";
})

neolithic.addEventListener('click',function(){
    console.log("neolithic");
    document.body.classList.remove("intro");
    document.body.classList.remove("paleolithic");
    document.body.classList.remove("mesolithic");
    document.body.classList.add('neolithic');
    document.getElementById('main-image').src="images/Neolithic.jpg";
	document.getElementById('main-image').alt="Neolithic";
    document.getElementById("image-title").innerHTML="The Neolithic Era";
    document.getElementById("image-description").innerHTML="The Neolithic or New Stone Age is an archaeological period, the final division of the Stone Age in Europe, Asia, Mesopotamia and Africa (c. 10,000 BC to c. 2,000 BC). The Neolithic began about 12,000 years ago, when farming appeared in the Epipalaeolithic Near East and Mesopotamia, and later in other parts of the world. It lasted in the Near East until the transitional period of the Chalcolithic (Copper Age) from about 6,500 years ago (4500 BC), marked by the development of metallurgy, leading up to the Bronze Age and Iron Age. In other places, the Neolithic followed the Mesolithic (Middle Stone Age) and then lasted until later. In Ancient Egypt, the Neolithic lasted until the Protodynastic period, c. 3150 BC. In China, it lasted until circa 2000 BC with the rise of the pre-Shang Erlitou culture, as it did in Scandinavia.[4]"
    document.getElementById("neolithic").style.background= "darkolivegreen";
    document.getElementById("intro").style.background= "#8B4513";
    document.getElementById("paleolithic").style.background= "#8B4513";
    document.getElementById("mesolithic").style.background= "#8B4513";
})