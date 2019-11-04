let readLine = require('readline-sync');
let term = require('terminal-kit').terminal;
term.clear();

const menuTitle = () => {
  term.blue();
  console.log('    ___  ___   __    __   __  ___  ___');  
  console.log('   (  _)(  ,) /  \\  / _) / _)(  _)(  ,)'); 
  console.log('   ) _) )   \\( () )( (/\\( (/\\ ) _) )  \\'); 
  console.log('   (_)  (_)\\_)\\__/  \\__/ \\__/(___)(_)\\_)');
  term.nextLine(2);
};

const menuFrog = () => {
  term.green();
  console.log('               ___      ___ ');
  console.log('              /   \\----/   \\ ');
  console.log('             |-----|  |-----| ');
  console.log('             /\\_0_/    \\_0_/\\ ');
  console.log('           -|      o  o      |-');
  console.log('          /  \\______________/  \\ ');
  console.log('          \\ \\ |   |    |   | / / ');
  console.log('           ww ooooo----ooooo ww ');
};
menuTitle();
menuFrog();
term.blue();
const menuArray = ['START', 'BEST SCORES', 'INSTRUCTIONS', 'ESCAPE'];
const menuOptions = {
  y: 20,
  extraLines: 2,
  cancelable: true
};

term.singleColumnMenu(menuArray, menuOptions, function(error, response) {
  canceled: true,
  term( '\n' ).eraseLineAfter.green(
		response.selectedIndex ,
		response.selectedText ,
  ) ;
	process.exit() ;
} ) ;