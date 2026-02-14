// 5. Slot Machine
class SlotMachine {
  coins: number = 0;
  fruits: string[] = ["🍎", "🍋", "🍒", "💎"];
  numSlots: number;

  constructor() {
    this.numSlots = 4;
  }

  play() {
    this.coins++;

    const results: string[] = [];

    for (let i = 0; i < this.numSlots; i++) {
      const fruitIndex = Math.floor(Math.random() * this.fruits.length);

      results.push(this.fruits[fruitIndex]);
    }

    console.log(`[${results.join(" | ")}]`);

    let isWinner = true;
    const firstFruit = results[0];

    for (let i = 1; i < results.length; i++) {
      if (results[i] !== firstFruit) {
        isWinner = false;
        break;
      }
    }

    if (isWinner) {
      console.log(`Congratulations!!! You won ${this.coins} coins!!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time");
    }
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
