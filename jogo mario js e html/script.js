const mario = document.querySelector('.mario');
const jump = () =>{
     mario.classlist.add('jump');


    setTimeout(() => {
     mario.classlist.remove('jump');


    } , 500);

}

document.addEventListener('keydown',jump);