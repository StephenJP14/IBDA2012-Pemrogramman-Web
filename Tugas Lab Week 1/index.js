let tries = 0;
const number = 1 + Math.floor(Math.random() * 100);
const answer = document.getElementById('answer');
const button = document.getElementById('button');
console.log(number)

const allowedAttemp = 10

button.addEventListener('click', ()=>{
    console.log(answer.value)
    tries++

    if(tries === allowedAttemp){
        alert("Anda GAGAL !!!!")
        answer.disabled = true
    }else{
        if (parseInt(answer.value) === number){
            alert('Selamat')
        }else{
            if(number > parseInt(answer.value)){
                console.log('Angka Anda Terlalu Kecil')
            }
            else{
                console.log('Angka Anda Terlalu Besar')
            }
        }
    }
})
