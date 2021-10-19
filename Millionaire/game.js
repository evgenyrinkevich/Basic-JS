let game = {
    run() {
        while (true) {
            let correctAnswerCount = 0;
            for (let question of questions) {
                let userAnswer = parseInt(prompt(question.text + '\nДля выхода нажмите 0'));
                if (userAnswer === 0) {
                    return;
                }
                if (userAnswer === question.correctAnswerNumber) {
                    correctAnswerCount++;
                };
            };

            switch (correctAnswerCount) {
                case 0:
                case 1:
                case 5:
                    alert(`Вы ответили правильно ${correctAnswerCount} раз`);
                    break;
                case 2:
                case 3:
                case 4:
                    alert(`Вы ответили правильно ${correctAnswerCount} раза`);
                    break;
            }

            let playAgain = prompt('Сыграть еще раз? (да/нет)');
            if (playAgain !== 'да') {
                return;
            }
        }
    },

    init() {
        console.log('Игра "Кто хочет стать миллионером"');
        console.log('Чтобы начать игру наберите game.run() и нажмите Enter');
    }
};

game.init();