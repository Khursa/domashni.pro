;(() => {
    function useIsotope(event) {
        let grid = document.querySelector('.ba-grid');
        let iso = new Isotope( grid, {
            itemSelector: '.ba-grid-item',

            masonry: {
                columnWidth: 30.5,
                gutter: 10,
                horizontalOrder: true,
                fitWidth: true
            }
        });

        let applyFilterFromLink = (linkObject) => {
            let filterValue = linkObject.dataset.filter;
            iso.arrange({ filter: filterValue });
        };

        let filterGrid = function( event ) {

            applyFilterFromLink(this);

            let activeBtn = document.querySelector('.ba-portfolio__item--active');
            if (activeBtn) {
                activeBtn.classList.remove('ba-portfolio__item--active');
            }
            this.classList.add('ba-portfolio__item--active');
        };



        let resizeItem = function (event) {

            this.classList.add('ba-grid-item--gigante');
            iso.layout();
            setTimeout(normalItem, 1000, this);
        };

        let normalItem = function (image) {
            image.classList.remove('ba-grid-item--gigante');
        };

        document.querySelectorAll('.ba-grid-item').forEach(item => {
            item.addEventListener('click', resizeItem);
        });


        document.querySelectorAll('.ba-activities__item').forEach(filterBtn => {
            filterBtn.addEventListener( 'click', filterGrid);
        });

        let activeBtn = document.querySelector('.ba-activities__item--active');

        applyFilterFromLink(activeBtn);

    }




    document.addEventListener('DOMContentLoaded', useIsotope);
})();
