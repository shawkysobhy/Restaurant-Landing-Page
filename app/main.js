let r = parseFloat(readLine());
const PI = Math.PI;
function main() {

    console.log(PI * r * r);

    // Print the perimeter of the circle:
    console.log(PI * 2 * r);
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let r = 0;
  let area = 0;
  let die = 0;
  const PI = Math.PI;
  rl.question('', (answer) => {
    r = answer;
    area = PI * r * r;
    die = 2 * PI * r;
    rl.close();
  });
  console.log(area);
  console.log(die);
}
main();
