const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profileData = {};
rl.question('What\'s your name?', (answer) => {
    profileData.name = answer;
  rl.question('what\'s an activity you like doing?', (ans) => {
    profileData.activity = ans;

    rl.question('what do you listen to while doing that?', (ans) => {
      profileData.music = ans;

      rl.question('which meal is your favourite (eg:dinner,brunch, etc.)', (ans) => {
        profileData.favMeal = ans;

        rl.question('What\'s your favourite thing to eat for that meal?', (ans) => {
          profileData.dessert = ans;

          rl.question('Which sport is your absolute favourite?', (ans) => {
            profileData.favSport = ans;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (ans) => {
              profileData.superPower = ans;
              console.log(`My name is ${profileData.name},\n\rand I like ${profileData.activity} while lisenting to ${profileData.music}.\n\rMy favourite meal is ${profileData.favMeal}, followed by a ${profileData.dessert} as dessert.\n\r${profileData.favSport} is my favourite sport.My super power is ${profileData.superPower}`);

              rl.close();
            });
          });
        });

      });
    });
  });

  
});



