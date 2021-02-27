function redirect() {
        var tag = new URL(window.location.href).searchParams.get("tag");
        var post = "https://script.google.com/macros/s/AKfycbyxUhUuSDlhW3j7SBfknwb6L7t_6Z-GhpACJ5yCoG2_nVZ8oXE/exec?tag=" + tag;

        fetch(post).then(function(response) {
        return response.text();
        }).then(function(data) {
        window.location = data;
        }).catch(function() {console.warn("Failed to request")});
}
