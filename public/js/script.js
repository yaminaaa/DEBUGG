'use strict';

document.addEventListener('DOMContentLoaded', _ => {
    document.querySelectorAll('[data-cocktail-id]').forEach(node => {
        node.addEventListener('click', event => {
            const cocktailId = event.currentTarget.getAttribute('data-cocktail-id');
            location.href = '/cocktail/' + cocktailId + location.search;
        });
    });

    document.getElementById('drink-search-field').addEventListener('keydown', event => {
        if (event.code == 'Enter') {
            location.href = location.pathname + '?s=' + event.currentTarget.value().toLowerCase()
        }
    });
});