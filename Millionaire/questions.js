class Question {
    constructor(text, correctAnswerNumber) {
        this.text = text;
        this.correctAnswerNumber = correctAnswerNumber;
    }

    // edit(someText) {
    //     this.text = someText;
    // }
}

const questions = [
    new Question('Сколько букв в слове "привет":\n1. Пять.\n2. Шесть.\n3. Семь.\n4. Куда я попал?', 2),
    new Question('Кто автор «Сказки о попе и работнике его Балде»?\n1. Пушкин.\n2. Лермонтов.\n3. Крылов.\n4. Моргенштерн', 1),
    new Question('В каком году Россия объявила дефолт?\n1. 1991.\n2. 2008.\n3. 2000.\n4. 1998', 4),
    new Question('Где, если верить пословице, любопытной Варваре нос оторвали?\n1. На базаре.\n2. На фонтане.\n3. На лавке.\n4. На печке', 1),
    new Question('Кто стал героиней песни Максима Леонидова?\n1. Девочка-виденье.\n2. Девочка-мираж.\n3. Девочка-приведенье.\n4. Девочка-галлюцинация', 1)
]