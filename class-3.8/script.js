/*
৩.৮ - ব্রাউজারের কিছু মজার বিল্ট ইন এপিআই
*/

let vid = document.querySelector(".myvid");

function success(stream) {
	let vid_url = URL.createObjectURL(stream);
	vid.src = vid_url;
	vid.play();
}

function fail(err) {
	console.log(err.message);
}

navigator.mediaDevices
	.getUserMedia({
		video: true,
		audio: true
	})
	.then(success)
	.catch(fail);