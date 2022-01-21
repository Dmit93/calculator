function addition_percent(number, percent) {
    let tempoary_number = (number / 100) * percent;
    return +(tempoary_number + number).toFixed(1);
}

document.querySelector('.calculator_frame__submit').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.fly_result').style.display = 'block';
    let ploshad = document.querySelector('div[data-rass="ploshad"] input').value !== '' ? document.querySelector('div[data-rass="ploshad"] input').value : 'no';
    let tolshina = document.querySelector('div[data-rass="tolshina"] p').dataset.result ? document.querySelector('div[data-rass="tolshina"] p').dataset.result : 'no';
    let kirpich = document.querySelector('div[data-rass="kirpich"] p').dataset.result ? document.querySelector('div[data-rass="kirpich"] p').dataset.result : 'no';
    let uteplitel = document.querySelector('div[data-rass="uteplitel"] p').dataset.result ? document.querySelector('div[data-rass="uteplitel"] p').dataset.result : 'no';
    let ploshad_steny = document.querySelector('div[data-rass="ploshad_steny"] input').value ? document.querySelector('div[data-rass="ploshad_steny"] input').value : 'no';
    let tolshina_steny = document.querySelector('div[data-rass="tolshina_steny"] p').dataset.result ? document.querySelector('div[data-rass="tolshina_steny"] p').dataset.result : 'no';
    let ploshad_steny_2 = document.querySelector('div[data-rass="ploshad_steny_2"] input').value ? document.querySelector('div[data-rass="ploshad_steny_2"] input').value : 'no';
    let tolshina_steny_2 = document.querySelector('div[data-rass="tolshina_steny_2"] p').dataset.result ? document.querySelector('div[data-rass="tolshina_steny_2"] p').dataset.result : 'no';
    let dlina_sten_cokol = document.querySelector('div[data-rass="dlina_sten_cokol"] input').value ? document.querySelector('div[data-rass="dlina_sten_cokol"] input').value : 'no';
    let tolshina_sten_cokol = document.querySelector('div[data-rass="tolshina_steny_cokol"] p').dataset.result ? document.querySelector('div[data-rass="tolshina_steny_cokol"] p').dataset.result : 'no';
    let vysota_cokolya = document.querySelector('div[data-rass="vysota_cokolya"] input').value ? document.querySelector('div[data-rass="vysota_cokolya"] input').value : 'no';
    let vnut_dlina_steny_cokol = document.querySelector('div[data-rass="vnut_dlina_steny_cokol"] input').value ? document.querySelector('div[data-rass="vnut_dlina_steny_cokol"] input').value : 'no';
    let vnut_tolshina_steny_cokol = document.querySelector('div[data-rass="vnut_tolshina_steny_cokol"] p').dataset.result ? document.querySelector('div[data-rass="vnut_tolshina_steny_cokol"] p').dataset.result : 'no';

    let col_iteration = 11;
    for (let i = 1; i <= col_iteration; i++) {
        switch (i) {
            case 1:
                if (!isNaN(addition_percent(ploshad * kirpich, 5))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad * kirpich, 5) + ' шт<p> (с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = ploshad;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 2:
                if (!isNaN(addition_percent(ploshad * tolshina, 5))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad * tolshina, 5) + ' м³<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = tolshina + ' мм.';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 3:
                if (!isNaN(addition_percent(ploshad_steny * tolshina_steny, 5))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad_steny * tolshina_steny, 5) + ' м³<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = ploshad + ' м²';;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 4:
                if (!isNaN(addition_percent(ploshad_steny_2 * tolshina_steny_2, 5))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad_steny_2 * tolshina_steny_2, 5) + ' м³<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = tolshina + ' мм.';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 5:
                if (!isNaN(addition_percent(ploshad * uteplitel, 15))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad * uteplitel, 15) + ' м³<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = ploshad;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 6:
                let objem_bloka = parseFloat(document.querySelector('.fly_result__line span[data-num="2"]').innerText);
                if (!isNaN(objem_bloka) && objem_bloka !== '') {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = +((objem_bloka * 30) / 25).toFixed(1) + ' упаковок по 25 кг<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = objem_bloka + ' м²';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 7:
                let obj_bloka_2 = parseFloat(document.querySelector('.fly_result__line span[data-num="3"]').innerText);
                let obj_bloka_3 = parseFloat(document.querySelector('.fly_result__line span[data-num="4"]').innerText);
                if ((!isNaN(obj_bloka_2) && !isNaN(obj_bloka_3)) && (obj_bloka_2 !== '' && obj_bloka_3 !== '')) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = +(((Number(obj_bloka_2) + Number(obj_bloka_3)) * 30) / 25).toFixed(1) + ' упаковок по 25 кг<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = Number(obj_bloka_2) + Number(obj_bloka_3) + ' м²';;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 8:
                if (kirpich !== 'none' && kirpich !== '' && kirpich !== 'no') {
                    let cement = 0,
                        pesok = 0;

                    switch (kirpich) {
                        case '62':
                            cement = 13.5;
                            pesok = 53;
                            break;
                        case '52':
                            cement = 12;
                            pesok = 48;
                            break;
                        case '40':
                            cement = 10.5;
                            pesok = 42;
                            break;
                        case '26':
                            cement = 8.5;
                            pesok = 35;
                            break;
                        default:
                            break;
                    }
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-cement').innerHTML = +(addition_percent(ploshad * cement, 5)) + ' кг. цемента<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-pesok').innerHTML = +(addition_percent(ploshad * pesok, 5)) + ' кг. песка<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 9:
                if (!isNaN(dlina_sten_cokol) && !isNaN(tolshina_sten_cokol) && !isNaN(vysota_cokolya)) {
                    let sum_cube = dlina_sten_cokol * tolshina_sten_cokol * vysota_cokolya;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-1').innerHTML = sum_cube.toFixed(1);
                    // document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-2').innerHTML = (sum_cube / 394).toFixed(1);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 10:
                if (!isNaN(dlina_sten_cokol) && !isNaN(tolshina_sten_cokol) && !isNaN(vysota_cokolya) && !isNaN(vnut_dlina_steny_cokol) && !isNaN(vnut_tolshina_steny_cokol)) {
                    let sum_cube_vnut = (dlina_sten_cokol * tolshina_sten_cokol * vysota_cokolya) + (vnut_tolshina_steny_cokol * vnut_dlina_steny_cokol * vysota_cokolya);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerHTML = sum_cube_vnut.toFixed(1);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            case 11:
                if (!isNaN(dlina_sten_cokol) && !isNaN(tolshina_sten_cokol) && !isNaN(vysota_cokolya) && !isNaN(vnut_dlina_steny_cokol) && !isNaN(vnut_tolshina_steny_cokol)) {
                    let sum_cube_vnut_r = (dlina_sten_cokol * tolshina_sten_cokol * vysota_cokolya) + (vnut_tolshina_steny_cokol * vnut_dlina_steny_cokol * vysota_cokolya);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('p ins').innerHTML = sum_cube_vnut_r.toFixed(1);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-cement').innerHTML = +(addition_percent(sum_cube_vnut_r * 100, 5)) + ' кг. цемента<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-pesok').innerHTML = +(addition_percent(sum_cube_vnut_r * 400, 5)) + ' кг. песка<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'block';
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').parentElement.style.display = 'none';
                }
                break;
            default:
                break;
        }
    }

});



document.querySelector('.calculator_frame').addEventListener('click', function(e) {
    if (e.target.classList.contains('calculator_frame__select')) {
        e.target.querySelector('ul').classList.toggle('active');
    } else if (e.target.tagName === 'P') {
        e.target.closest('.calculator_frame__select').querySelector('ul').classList.toggle('active');
    }

    if (e.target.tagName === 'LI' && e.target.closest('ul')) {
        e.target.closest('ul').querySelectorAll('li').forEach(i => i.classList.remove('active'))
        e.target.classList.add('active');
        e.target.closest('.calculator_frame__select').querySelector('p').innerText = e.target.innerText;
        e.target.closest('.calculator_frame__select').querySelector('p').setAttribute('data-result', e.target.getAttribute('data-calc'));
        e.target.closest('ul').classList.remove('active');

    }
});


document.querySelector('.calculator_frame').addEventListener('change', function(e) {
    if (e.target.classList.contains('radio_anon')) {
        switch (e.target.value) {
            case 'yes':
                e.target.closest('.calculator_frame__checkbox').nextElementSibling.classList.add('active_box');
                break;
            case 'no':
                e.target.closest('.calculator_frame__checkbox').nextElementSibling.classList.remove('active_box');
                break;
            default:
                break;
        }
    }

});

let path = 'img/';
document.querySelector('.calculator_frame form').addEventListener('mouseover', function(e) {
    // if (e.target.tagName === 'DIV' && e.target.getAttribute('data-mouse-picture') && !e.target.closest('.next_block_checkbox') ||
    //     e.target.tagName === 'SPAN' && e.target.closest('.calculator_frame__select-box') && !e.target.closest('.next_block_checkbox') ||
    //     e.target.classList.contains('calculator_frame__select') && !e.target.closest('.next_block_checkbox') ||
    //     e.target.tagName === 'INPUT' && !e.target.closest('.next_block_checkbox') ||
    //     e.target.tagName === 'LABEL' && !e.target.closest('.next_block_checkbox')) {

    if ((e.target.tagName === 'DIV' && e.target.getAttribute('data-mouse-picture') ||
            e.target.classList.contains('calculator_frame__select-box') ||
            e.target.classList.contains('calculator_frame__input_text') ||
            e.target.classList.contains('calculator_frame__label') ||
            e.target.classList.contains('calculator_frame__checkbox') ||
            (e.target.tagName === 'LABEL' && !e.target.closest('.calculator_frame__checkbox')) ||
            e.target.tagName === 'SPAN') && !e.target.closest('.next_block_checkbox')) {
        document.querySelectorAll('.calculator_frame form > div').forEach(i => i.classList.remove('active'));
        e.target.classList.add('active')
        let src = (e.target.tagName === 'SPAN' && e.target.closest('.calculator_frame__select-box') || e.target.tagName === 'LABEL' || e.target.tagName === 'INPUT' || e.target.classList.contains('calculator_frame__select')) ? e.target.parentNode.getAttribute('data-mouse-picture') : e.target.getAttribute('data-mouse-picture');
        (e.target.tagName === 'SPAN' && e.target.closest('.calculator_frame__select-box') || e.target.tagName === 'LABEL' || e.target.tagName === 'INPUT' || e.target.classList.contains('calculator_frame__select')) ? e.target.parentNode.classList.add('active'): e.target.classList.add('active');
        document.querySelector('.calculator_frame__parentImg').setAttribute('src', `${path + src + '.jpg'}`);
    }

});