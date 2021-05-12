console.log("Tut64");

const box = document.querySelectorAll('.box')
const imgbox = document.querySelector('.imgbox')

imgbox.addEventListener('dragstart', () => {
    // console.log('Start');
    imgbox.classList.add('hold')
})

imgbox.addEventListener('dragend', (e) => {
    // console.log('End');
    // e.target.className = 'imgbox'
    imgbox.classList.remove('hold')
})

for (x of box) {
    x.addEventListener('dragover', (e) => {
        // console.log("Over");
        e.preventDefault();
    })

    x.addEventListener('dragenter', (e) => {
        // console.log('Enter');
        e.target.classList.add('dash');
    })

    x.addEventListener('dragleave', (e) => {
        // console.log('Leave');
        e.target.classList.remove('dash')
    })
    
    x.addEventListener('drop', (e) => {
        // console.log('Drop');
        e.target.classList.remove('dash')
        e.target.append(imgbox)
    })
}
