var paper = document.getElementById('paper');
var rock = document.getElementById('rock');
var siccors = document.getElementById('scissors');
var playbutton = document.getElementById('play-button');

var insert_img = document.getElementById('image');
var insert_img_one = document.getElementById('imageone');

var updatePlayer = document.getElementById('player');
var updateComputer = document.getElementById('computer');

var input_computer;
var input_player;
var player_score = 0;
var computer_score = 0;

paper.addEventListener('click', function(){
    insert_img.innerHTML = `<img class="insert-img" src="./assets/paper-hand.png">`;
    input_player = 'paper';
    ran_image();
    score();
    updateComputer.textContent = computer_score;
    updatePlayer.textContent = player_score;
    finalscore();
});

rock.addEventListener('click', function(){
    insert_img.innerHTML = `<img class="insert-img" src="./assets/rock-hand.png">`;
    input_player = 'rock';
    ran_image();
    score();
    updateComputer.textContent = computer_score;
    updatePlayer.textContent = player_score;
    finalscore();
});

siccors.addEventListener('click', function(){
    insert_img.innerHTML = `<img class="insert-img" src="./assets/scissors-hand.png">`;
    input_player = 'scissors';
    ran_image();
    score();
    updateComputer.textContent = computer_score;
    updatePlayer.textContent = player_score;
    finalscore();
});

function ran_image(){
    var list_img = ['./assets/paper-hand.png', './assets/rock-hand.png', './assets/scissors-hand.png'];
    var list_item = ['paper', 'rock', 'scissors'];
    var ran_num = Math.floor(Math.random()*3);
    insert_img_one.innerHTML = `<img class="insert-img" src="${list_img[ran_num]}">`;
    input_computer = list_item[ran_num];
};

function score(){
    if (input_player == 'paper'){
        if(input_computer == 'scissors'){
            computer_score++
        }else if(input_computer == 'rock'){
            player_score++;
        }
    }else if(input_player == 'rock'){
        if(input_computer == 'scissors'){
            player_score++;
        }else if(input_computer == 'paper'){
            computer_score++;
        }
    }else if(input_player == 'scissors'){
        if(input_computer == 'paper'){
            player_score++;
        }else if(input_computer == 'rock'){
            computer_score++;
        }
    }
};

function finalscore(){
    if(player_score>=5 || computer_score>=5){
        paper.style.display = 'none';
        rock.style.display = 'none';
        siccors.style.display = 'none';
        playbutton.style.display = 'inherit';
        if(player_score > computer_score){
            document.getElementById('won').textContent = `You  Won!!!`
        }else{
            document.getElementById('won').textContent = `Computer won!!!`
        }
    };
}

playbutton.addEventListener('click', function(){
    location.reload();
})