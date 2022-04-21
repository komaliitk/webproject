const toggle = (elem) => {
    const content = (elem.innerHTML === 'Know More..') ? 'Hide' : 'Know More..';
    const disp = (elem.innerHTML === 'Know More..') ? 'block' : 'none';

    elem.innerHTML = content;
    switch (elem.id) {
        case 'know-btn-1':
            document.getElementById('exp-1').style.display = disp;
            break;
        case 'know-btn-2':
            document.getElementById('exp-2').style.display = disp;
            break;
        case 'know-btn-3':
            document.getElementById('exp-3').style.display = disp;
            break;
        case 'know-btn-4':
            document.getElementById('exp-4').style.display = disp;
            break;
        case 'know-btn-5':
            document.getElementById('exp-5').style.display = disp;
            break;
        case 'know-btn-6':
            document.getElementById('exp-6').style.display = disp;
            break;
    }
}