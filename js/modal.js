function Modal() {

	const bgModal = document.querySelector('#modal-bg')

	let modalFunc = {
		closeModal: () => {
			let closeBtn = document.querySelector('.modal-close')
			closeBtn.addEventListener('click', function () {

				bgModal.classList.remove("bg-active");
				bgModal.classList.add("bg-inactive");

			})
			bgModal.addEventListener('click', () => {
				bgModal.classList.remove("bg-active");
				bgModal.classList.add("bg-inactive");
			})

		},
		ableModal: () => {

			const imgs = document.querySelectorAll('.poster img')

			imgs.forEach(img => {
				img.addEventListener('click', () => {
					bgModal.classList.remove("bg-inactive");
					bgModal.classList.add("bg-active");
					let image = document.querySelector(".mymodal img")
					let imgAttr = img.getAttribute('src')

					image.src = imgAttr

				})

			});


		}
	}

	modalFunc.ableModal()
	modalFunc.closeModal()

}
Modal()
