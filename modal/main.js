//select
const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
		contenidoSelect.innerHTML = e.currentTarget.innerHTML;
		select.classList.toggle('active');
		opciones.classList.toggle('active');
		hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
	});
});

select.addEventListener('click', () => {
	select.classList.toggle('active');
	opciones.classList.toggle('active');
});






/*open modal*/
function mostrar_modal_t1e1() {
  modal_t1e1.style.display = "flex";
  iframe_t1e1.src = "https://api.cuevana3.io/ir/goto_ddh.php?h=cHdlSGU2VjczUUVPODNNUXI0UWVpTEk3SGFLbjZaWUNQdStvVGEzUGc4N2JVR0hidXVrWWdnNmVMZldPZnBuOVVsZ3NtN09XdFdBaDZGT1BWZ3lTdGUwUHNLZzk1a3g2Z3JyVjBsbTJHMmVSK0Z4QTB3Nk41Ti9qeHMyRkNHcklsc2ZJdjdKZlptODFyWmR5SXFWZW9RPT0";
  body.style.overflow = "hidden";
}
function mostrar_modal_t1e2() {
  modal_t1e2.style.display = "flex";
  iframe_t1e2.src = "https://uqload.com/embed-xa61dn1kp45u.html";
  body.style.overflow = "hidden";
}
function mostrar_modal_t1e3() {
  modal_t1e3.style.display = "flex";
  iframe_t1e3.src = "https://uqload.com/embed-xa61dn1kp45u.html";
  body.style.overflow = "hidden";
}
function mostrar_modal_t1e4() {
  modal_t1e4.style.display = "flex";
  iframe_t1e4.src = "https://uqload.com/embed-xa61dn1kp45u.html";
  body.style.overflow = "hidden";
}
function mostrar_modal_t1e5() {
  modal_t1e5.style.display = "flex";
  iframe_t1e5.src = "https://uqload.com/embed-xa61dn1kp45u.html";
  body.style.overflow = "hidden";
}
function mostrar_modal_t1e6() {
  modal_t1e6.style.display = "flex";
  iframe_t1e6.src = "https://uqload.com/embed-xa61dn1kp45u.html";
  body.style.overflow = "hidden";
}


/*close modal*/
function close_t1e1() {
  modal_t1e1.style.display = "none";
  iframe_t1e1.src = "";
  body.style.overflow = "auto";
}
function close_t1e2() {
  modal_t1e2.style.display = "none";
  iframe_t1e2.src = "";
  body.style.overflow = "auto";
}
function close_t1e3() {
  modal_t1e3.style.display = "none";
  iframe_t1e3.src = "";
  body.style.overflow = "auto";
}
function close_t1e4() {
  modal_t1e4.style.display = "none";
  iframe_t1e4.src = "";
  body.style.overflow = "auto";
}
function close_t1e5() {
  modal_t1e5.style.display = "none";
  iframe_t1e5.src = "";
  body.style.overflow = "auto";
}
function close_t1e6() {
  modal_t1e6.style.display = "none";
  iframe_t1e6.src = "";
  body.style.overflow = "auto";
}

document.getElementById("btn-t1e1").addEventListener("click", mostrar_modal_t1e1);
document.getElementById("btn-t1e2").addEventListener("click", mostrar_modal_t1e2);
document.getElementById("btn-t1e3").addEventListener("click", mostrar_modal_t1e3);
document.getElementById("btn-t1e4").addEventListener("click", mostrar_modal_t1e4);
document.getElementById("btn-t1e5").addEventListener("click", mostrar_modal_t1e5);
document.getElementById("btn-t1e6").addEventListener("click", mostrar_modal_t1e6);


document.getElementById("close-t1e1").addEventListener("click", close_t1e1);
document.getElementById("close-t1e2").addEventListener("click", close_t1e2);
document.getElementById("close-t1e3").addEventListener("click", close_t1e3);
document.getElementById("close-t1e4").addEventListener("click", close_t1e4);
document.getElementById("close-t1e5").addEventListener("click", close_t1e5);
document.getElementById("close-t1e6").addEventListener("click", close_t1e6);
