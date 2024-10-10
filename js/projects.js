function openModal(name, description, website, github) {
    $("#website-link").text(website).attr("href", website);
    $("#name").text(name);
    $("#github-link").text(github).attr("href", github);
    $("#description").text(description);
    $("#modal").removeClass("hidden");
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
        'https://github.com/saminajib/Contact-Manager');
}

function exitModal(){
    $("#modal").addClass("hidden");
}

