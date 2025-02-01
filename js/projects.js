function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openModal(name, description, website, github) {
    $("#website-link").text(website).attr("href", website);
    $("#name").text(name);
    $("#github-link").text(github).attr("href", github);
    $("#description").text(description);
    $("#modal").removeClass("hidden");
}

async function loadingBar() {
    $("#load").removeClass("hidden");
    await delay(1500);
    $("#load").addClass("hidden");
}

function website(){
    openModal('My Website',
        'In case you are interested in the source code of this website.',
        'https://saminajib.github.io/my-website/',
        'https://github.com/saminajib/my-website');
}

function studyFlash(){
    openModal('Study Flash',
        'A website to make studying as efficient as possible by saving time with advanced ai study material generation.',
        'https://studyflash.study',
        'https://github.com/seb1124/studyFlash');
}

function pl0Compiler(){
    openModal('PL/0 Compiler',
        'Compiler for PL/0 language using top down parser descent. Guarantees adherence to language EBNF and generates corresponding machine code if no grammar or syntax errors exist. Repo also contains virtual machine to test machine code and simulate stack.',
        '',
        'https://github.com/saminajib/pl0-compiler');
}

function contactManager() {
    openModal('Contact Manager',
        'A basic contact manager using LAMP stack which contains a user database as well as corresponding contacts.',
        '',
        'https://github.com/dewlb/LP1');
}

function gamePlan() {
    openModal('GamePlan',
        'A tournament manager with social features made for friends who wanted an easier way to organize tournaments or join them.',
        '',
        'https://github.com/dewlb/LP1');
}

function dragonfly() {
    openModal('Dragonfly Titan',
        'Developing a simulation of NASA\'s Dragonfly mission to explore Titan, Saturn\'s moon. It replicates realistic flight dynamics, atmospheric conditions, and terrain mapping. The project aims to create an engaging and scientifically accurate experience.',
        '',
        '');
}

function exitModal(){
    $("#modal").addClass("hidden");
}

