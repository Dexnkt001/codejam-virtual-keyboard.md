var keyboard = {
    line1: {
        'Backquote': { ru: ['ё', 'Ё'], en: ['`', '~'] },
        'Digit1': { ru: ['1', '!'], en: ['1', '!'] },
        'Digit2': { ru: ['2', '"'], en: ['2', '@'] },
        'Digit3': { ru: ['3', '№'], en: ['3', '#'] },
        'Digit4': { ru: ['4', ';'], en: ['4', '$'] },
        'Digit5': { ru: ['5', '%'], en: ['5', '%'] },
        'Digit6': { ru: ['6', ':'], en: ['6', '^'] },
        'Digit7': { ru: ['7', '?'], en: ['7', '&'] },
        'Digit8': { ru: ['8', '*'], en: ['8', '*'] },
        'Digit9': { ru: ['9', '('], en: ['9', '('] },
        'Digit0': { ru: ['0', ')'], en: ['0', ')'] },
        'Minus': { ru: ['-', '_'], en: ['-', '_'] },
        'Equal': { ru: ['=', '+'], en: ['=', '+'] },
        'Backspace': { ru: ['Backspace', 'Backspace'], en: ['Backspace', 'Backspace'] }
    },

    line2: {
        'Tab': { ru: ['TAB', 'TAB'], en: ['TAB', 'TAB'] },
        'KeyQ': { ru: ['й', 'Й'], en: ['q', 'Q'] },
        'KeyW': { ru: ['ц', 'Ц'], en: ['w', 'W'] },
        'KeyE': { ru: ['у', 'У'], en: ['e', 'E'] },
        'KeyR': { ru: ['к', 'К'], en: ['r', 'R'] },
        'KeyT': { ru: ['е', 'Е'], en: ['t', 'T'] },
        'KeyY': { ru: ['н', 'Н'], en: ['y', 'Y'] },
        'KeyU': { ru: ['г', 'Г'], en: ['u', 'U'] },
        'KeyI': { ru: ['ш', 'Ш'], en: ['i', 'I'] },
        'KeyO': { ru: ['щ', 'Щ'], en: ['o', 'O'] },
        'KeyP': { ru: ['з', 'З'], en: ['p', 'P'] },
        'BracketLeft': { ru: ['х', 'Х'], en: ['[', '{'] },
        'BracketRight': { ru: ['ъ', 'Ъ'], en: [']', '}'] },
        'Backslash': { ru: ['\\', '|'], en: ['\\', '|'] },
        'Delete': { ru: ['DEL ', 'DEL'], en: ['DEL', 'DEL'] }
    },
    line3: {
        'CapsLock': { ru: ['Caps lock', 'Caps lock'], en: ['Caps lock', 'Caps lock'] },
        'KeyA': { ru: ['ф', 'Ф'], en: ['a', 'A'] },
        'KeyS': { ru: ['ы', 'Ы'], en: ['s', 'S'] },
        'KeyD': { ru: ['в', 'В'], en: ['d', 'D'] },
        'KeyF': { ru: ['а', 'А'], en: ['f', 'F'] },
        'KeyG': { ru: ['п', 'П'], en: ['g', 'G'] },
        'KeyH': { ru: ['р', 'Р'], en: ['h', 'H'] },
        'KeyJ': { ru: ['о', 'О'], en: ['j', 'J'] },
        'KeyK': { ru: ['л', 'Л'], en: ['k', 'K'] },
        'KeyL': { ru: ['д', 'Д'], en: ['l', 'L'] },
        'Semicolon': { ru: ['ж', 'Ж'], en: [';', ';'] },
        'Quote': { ru: ['э', 'Э'], en: ["'", "'"] },
        'Enter': { ru: ['Enter', 'Enter'], en: ['Enter', 'Enter'] },
    },

    line4: {
        'ShiftLeft': { ru: ['Shift', 'Shift'], en: ['Shift', 'Shift'] },
        'KeyZ': { ru: ['я', 'Я'], en: ['z', 'Z'] },
        'KeyX': { ru: ['ч', 'Ч'], en: ['x', 'X'] },
        'KeyC': { ru: ['с', 'С'], en: ['c', 'C'] },
        'keyV': { ru: ['м', 'М'], en: ['v', 'V'] },
        'KeyB': { ru: ['и', 'И'], en: ['b', 'B'] },
        'KeyN': { ru: ['т', 'Т'], en: ['n', 'N'] },
        'KeyM': { ru: ['ь', 'Ь'], en: ['m', 'M'] },
        'Comma': { ru: ['б', 'Б'], en: ['.', '.'] },
        'Period': { ru: ['ю', 'Ю'], en: [',', ','] },
        'Slash': { ru: ['/', '.'], en: ['/', '/'] },
        'ArrowUp': { ru: ['▲', '▲'], en: ['▲', '▲'] },
        'ShiftRight': { ru: ['Shift', 'Shift'], en: ['Shift', 'Shift'] }
    },

    line5: {
        'ControlLeft': { ru: ['Ctrl', 'Ctrl'], en: ['Ctrl', 'Ctrl'] },
        'MetaLeft': { ru: ['Win', 'Win'], en: ['Win', 'Win'] },
        'AltLeft': { ru: ['Alt', 'Alt'], en: ['Alt', 'Alt'] },
        'Space': { ru: ['', ''], en: ['', ''] },
        'AltRight': { ru: ['Alt', 'Alt'], en: ['Alt', 'Alt'] },
        'ArrowLeft': { ru: ['◄', '◄'], en: ['◄', '◄'] },
        'ArrowDown': { ru: ['▼', '▼'], en: ['▼', '▼'] },
        'ArrowRight': { ru: ['►', '►'], en: ['►', '►'] },
        'ControlRight': { ru: ['Ctrl', 'Ctrl'], en: ['Ctrl', 'Ctrl'] }

    }
}

var board = document.createElement('div');
board.className = 'keyboard';
document.body.appendChild(board);
let Capslock = false,
    shift = false,
    alt = false,
    shift_alt = false,
    spec_button = ['ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight', 'ArrowLeft',
        'ArrowDown', 'ArrowRight', 'ArrowUp', 'Delete'],
    spec_100 = ['Backspace', 'ShiftLeft', 'CapsLock'];
spec_80 = ['ShiftRight', 'Enter'],
    elements = {},
    block = [],
    step_capse = 0,
    s_a_s = 0,
    str='';

    if (localStorage == undefined){
        localStorage('shift_alt', false);
    } 

function capse_s() {
    let l_step = 0;
    for (line in keyboard) {
        let step = 0
        for (key in keyboard[line]) {
            if (document.querySelectorAll('.line')[l_step] != undefined) {
                let but = document.querySelectorAll('.line')[l_step].children[step];
                if (but != undefined) {
                    if (localStorage.shift_alt == 'false' && !Capslock) {
                        but.innerHTML = keyboard[line][key].ru[0];
                    }
                    else if (localStorage.shift_alt == 'false' && Capslock) {
                        but.innerHTML = keyboard[line][key].ru[1];
                    }
                    else if (localStorage.shift_alt=='true' && !Capslock) {
                        but.innerHTML = keyboard[line][key].en[0];
                    }
                    else if (localStorage.shift_alt=='true' && Capslock) {
                        but.innerHTML = keyboard[line][key].en[1];
                    }
                }
            }
            step++;
        }
        l_step++;
    }
}
function shift_s() {
    console.log(shift_alt, Capslock, shift)
    let l_step = 0;
    for (line in keyboard) {
        let step = 0
        for (key in keyboard[line]) {
            if (document.querySelectorAll('.line')[l_step] != undefined) {
                let but = document.querySelectorAll('.line')[l_step].children[step];
                if (but != undefined) {
                    if (localStorage.shift_alt=='true' && Capslock && shift) {
                        but.innerHTML = keyboard[line][key].en[0];
                    }
                    else if (localStorage.shift_alt=='true' && !Capslock && shift) {
                        but.innerHTML = keyboard[line][key].en[1];
                    }
                    else if (localStorage.shift_alt == 'false' && Capslock && shift) {
                        but.innerHTML = keyboard[line][key].ru[0];
                    }
                    else if (localStorage.shift_alt == 'false' && !Capslock && shift) {
                        but.innerHTML = keyboard[line][key].ru[1];
                    }
                    else if (localStorage.shift_alt=='true' && Capslock && !shift) {
                        but.innerHTML = keyboard[line][key].en[1];
                    }
                    else if (localStorage.shift_alt == 'false' && !Capslock && shift) {
                        but.innerHTML = keyboard[line][key].ru[1];
                    }
                    else if (localStorage.shift_alt == 'false' && !Capslock && !shift) {
                        but.innerHTML = keyboard[line][key].ru[0];
                    }
                    else if (localStorage.shift_alt == 'false'&& Capslock && !shift) {
                        but.innerHTML = keyboard[line][key].ru[1];
                    }
                    else if (localStorage.shift_alt=='true' && !Capslock && !shift) {
                        but.innerHTML = keyboard[line][key].en[0];
                    }
                }
            }
            step++;
        }
        l_step++;
    }
}

function switch_language() {
    let l_step = 0;
    for (line in keyboard) {
        let step = 0
        for (key in keyboard[line]) {
            if (document.querySelectorAll('.line')[l_step] != undefined) {
                let but = document.querySelectorAll('.line')[l_step].children[step];
                if (but != undefined) {
                    if (localStorage.shift_alt=='true' && Capslock && shift) {
                        but.innerHTML = keyboard[line][key].en[0];
                    }
                    else if (localStorage.shift_alt == 'false' && !Capslock && shift) {
                        but.innerHTML = keyboard[line][key].ru[0];
                    }
                    else if (localStorage.shift_alt == 'false' && !shift) {
                        but.innerHTML = keyboard[line][key].ru[0];
                    }
                    else if (localStorage.shift_alt == 'false' && shift) {
                        but.innerHTML = keyboard[line][key].ru[1];
                    }
                    else if (localStorage.shift_alt=='true' && !shift) {
                        but.innerHTML = keyboard[line][key].en[0];
                    }
                    else if (localStorage.shift_alt=='true' && shift) {
                        but.innerHTML = keyboard[line][key].en[1];
                    }
                    else if (localStorage.shift_alt == 'false' && !Capslock) {
                        but.innerHTML = keyboard[line][key].ru[0];
                    }
                    else if (localStorage.shift_alt == 'false' && Capslock) {
                        but.innerHTML = keyboard[line][key].ru[1];
                    }
                    else if (localStorage.shift_alt=='true' && !Capslock) {
                        but.innerHTML = keyboard[line][key].en[0];
                    }
                    else if (localStorage.shift_alt=='true' && Capslock) {
                        but.innerHTML = keyboard[line][key].en[1];
                    }
                }
            }
            step++;
        }
        l_step++;
    }
}

function creat_board(board, keyboard) {
    for (line in keyboard) {
        let lines = document.createElement('div');
        lines.className = 'line';
        board.appendChild(lines);
        for (key in keyboard[line]) {
            let but = document.createElement('div')
            if (localStorage.shift_alt == 'false' && !Capslock) {
                but.innerHTML = keyboard[line][key].ru[0];
            }
            else if (localStorage.shift_alt == 'true' && !Capslock) {
                but.innerHTML = keyboard[line][key].en[0];
            }
            if (spec_button.indexOf(key) != -1) {
                but.className = 'spec';
            }
            else if (spec_80.indexOf(key) != -1) {
                but.className = 'spec_80';
            }
            else if (spec_100.indexOf(key) != -1) {
                but.className = 'spec_100';
            }
            else if (key == 'Space') {
                but.className = 'Space';
            }
            else if (key == 'Tab') {
                but.className = 'Tab';
            }
            else but.className = 'btn';
            lines.appendChild(but);
        }
        block.push(lines);
    }
}

creat_board(board, keyboard);

const keyswitch = (e) => {
    if (e.code == 'ShiftLeft') {
        shift = true;
        shift_s()
    }
    if (e.code == 'AltLeft') {
        alt = true;
    }
    if (e.code == 'CapsLock') {
        step_capse++
        if (step_capse % 2 == 1) {
            Capslock = true;
        } else Capslock = false;
        console.log('shoode be rev')
        capse_s()
    }
    if (e.code == 'ShiftRight') {
        shift = true;
        shift_s()
    }
    if (shift && alt) {
        s_a_s++
        if (s_a_s % 2 == 0) {
            localStorage.shift_alt = 'false';
            switch_language();
        }
        else {
            localStorage.shift_alt = 'true';
            switch_language()
        }
    }
}
console.log(typeof(localStorage.shift_alt))

const shiftup = (e) => {
    if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
        shift = false;
        shift_s()
    }
    else if (e.code == 'AltLeft' || e.code == 'AltRight') {
        alt = false;
    }
}

function addAnimation(e) {
    let step_pos_l = 0
    for (line in keyboard) {
        let step = 0
        for (key in keyboard[line]) {
            if (key == e.code) {
                if (document.querySelectorAll('.line')[step_pos_l] != undefined) {
                    let but = document.querySelectorAll('.line')[step_pos_l].children[step];
                    if (but != undefined) {
                        but.classList.add('animation')
                    }
                }
            } else step++;
        }
        step_pos_l++;
    }
}

function remAnimation(e) {
    let step_pos_l = 0
    for (line in keyboard) {
        let step = 0
        for (key in keyboard[line]) {
            if (key == e.code) {
                if (document.querySelectorAll('.line')[step_pos_l] != undefined) {
                    let but = document.querySelectorAll('.line')[step_pos_l].children[step];
                    if (but != undefined) {
                        but.classList.remove('animation')
                    }
                }
            } else step++;
        }
        step_pos_l++;
    }
}
function remAnimation(e) {
    let step_pos_l = 0
    for (line in keyboard) {
        let step = 0
        for (key in keyboard[line]) {
            if (key == e.code) {
                if (document.querySelectorAll('.line')[step_pos_l] != undefined) {
                    let but = document.querySelectorAll('.line')[step_pos_l].children[step];
                    if (but != undefined) {
                        but.classList.remove('animation')
                        
                    }
                }
            } else step++;
        }
        step_pos_l++;
    }
}

function addAnimationformouse(event) {
    let target
    target = event.target
    let bool = true;
    let res = document.getElementById('text')
    document.querySelectorAll('.line').forEach(function (element) {
        if (element == target) {
            bool = false;
        }
        return bool;
    });
    if (bool) {
        target.classList.add('animationmouse')
        str = str + target.innerHTML;
        res.value= str;
    }
}

function removeAnimationformouse(event) {
    let tar;
    tar = event.target;
    tar.classList.remove('animationmouse')
}



document.addEventListener('keydown', keyswitch);
document.addEventListener('keyup', shiftup);
document.addEventListener('keydown', addAnimation);
document.addEventListener('keyup', remAnimation);
document.querySelector('.keyboard').addEventListener('mousedown', addAnimationformouse);
document.querySelector('.keyboard').addEventListener('mouseup', removeAnimationformouse);
document.querySelector('.keyboard').addEventListener('mouseleave', removeAnimationformouse);

