document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("ccs_procurement_lead") !== null) {
        document.getElementById('procurement_lead').addEventListener('change', function (event) {
            event.preventDefault();
            $.ajax({
                url: "/rfi/set-procurement-lead?id="+event.target.value,
                type: "POST",
                contentType: "application/json",
            }).done(function (result) {
                setUserDetails(result);
            });
        });
        const setUserDetails = (user) => {
            let div_email = document.getElementById('lead-email');
            div_email.innerText = user.email;
            let div_tel = document.getElementById('lead-telephone');
            div_tel.innerText = user.telephone;
        };
    }
});