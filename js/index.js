function openModal(name, description, website, github) {
    $("#website-link").text(website).attr("href", website);
    $("#name").text(name);
    $("#github-link").text(github).attr("href", github);
    $("#description").text(description);
    $("#modal").removeClass("hidden");
}

function exitModal(){
    $("#modal").addClass("hidden");
}

