const moment = require('moment')
const simpleGit = require('simple-git')

// const Date = moment().subtract(1, 'd').format()
// const filePath = './helo.js'
// simpleGit().add([filePath]).commit(Date, {'heloo': Date}).push()

const formattedDate = moment().subtract(15, 'd').format(); // Use a different variable name to avoid conflict with the Date object
const filePath = './1624.ts';
const commitMessage = 'Solution for problem number-1624';

// simpleGit()
//   .add([filePath])
//   .commit({ '--date': formattedDate, '-m': commitMessage })
//   .push();

  const git = simpleGit();

git.add([filePath])
  .commit(commitMessage, { '--date': formattedDate }, (err, result) => {
    if (err) {
      console.error('Error committing changes:', err);
    } else {
      console.log('Changes committed successfully:', result);
      git.push((err, result) => {
        if (err) {
          console.error('Error pushing changes:', err);
        } else {
          console.log('Changes pushed successfully:', result);
        }
      });
    }
  });