document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    if (form) {
        document.querySelectorAll('button, a').forEach(element => {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                form.scrollIntoView({ behavior: 'smooth' });
            });
        });
    } else {
        console.log("form not found");
    }
});