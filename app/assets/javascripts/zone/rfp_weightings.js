document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById("rfp_quality_weighting_form") !== null) {
        let visible_main_content_div = '1';
        document.getElementById('main-content-2').classList.add('ccs-dynaform-hidden');
        document.getElementById('main-content-3').classList.add('ccs-dynaform-hidden');
        const left_links = document.querySelectorAll('li.title');
        
        left_links.forEach((title) => {           
            title.addEventListener('click', (e) => {
                e.preventDefault();
            let id_clicked = e.target.value;
            document.getElementById('main-content-'+ id_clicked).classList.remove('ccs-dynaform-hidden');
             for(i = 1; i <= left_links.length; i++) {
                if(i != id_clicked) {
                    document.getElementById('main-content-'+ i).classList.add('ccs-dynaform-hidden');
                }
             }               
            });
        });

    }

});