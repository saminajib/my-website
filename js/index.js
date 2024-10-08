function toggleModal(name, description, website, github) {
    if(website === "none"){
        $("#website-title").text("");
        $("#website-link").text("").attr("href", "");
    }
    else {
        $("#website-link").text(website).attr("href", website);
    }
    $("#name").text(name);
    $("#github-link").text(github).attr("href", github);
    $("#description").text(description);
    $("#modal").toggleClass("hidden");
}

