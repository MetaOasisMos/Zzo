import "./style.scss";

const list = [
  `1. There are 5 rounds to reveal Zzoopers Genesis.`,
  `2. At each round of reveal, 2 out of the 10 animal characters will go
  live. You can choose to claim, or wait. Better be in a hurry when it's
  your favorite character's turn.`,
  `3. Follow up the full reveal schedule and you can join either round to
  redeem your Zzoopers Genesis.`,
  `July 25th - Fox & Unicorn`,
  `July 29th - Tiger & Elephant`,
  `August 2rd - Cheetah & Rabbit`,
  `August 6th - Deer & Monkey`,
  `August 10th - Penguin & Panda`,
];

export default () => {
  return (
    <div className="rules">
      <div className="container">
        <div className="title">Reveal rules & schedule</div>
        <div className="desc">
          {list.map((item, index) => (
            <div className="desc-item" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
