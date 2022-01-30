function addition_percent(number, percent, numberInFixed) {
    let tempoary_number = (number / 100) * percent;
    let number_param = numberInFixed !== undefined ? numberInFixed : 1;
    return +(tempoary_number + number).toFixed(number_param);
}


function delimiter_number(number) {
    //return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return (parseInt(number) * 1).toLocaleString('ru-RU');
}



function getOffset(el) {
    el = document.querySelector(el).getBoundingClientRect();
    return el.top + window.scrollY;
}

let price_material = [],
    price_jobs = [];

function receiving_price() {
    price_material.length = 0;
    price_jobs.length = 0;
    [...document.querySelectorAll('.input-1-material .fly_result__line-input-price span')].filter(i => {
        if (i.innerText !== '') {
            price_material.push(Number(i.innerText.replace(/\s/g, '')));
        }
    });

    [...document.querySelectorAll('.input-1-jobs .fly_result__line-input-price span')].filter(i => {
        if (i.innerText !== '') {
            price_jobs.push(Number(i.innerText.replace(/\s/g, '')));
        }
    });

    let result_material = price_material.reduce((sum, current) => sum + current, 0);
    let result_jobs = price_jobs.reduce((sum, current) => sum + current, 0);
    document.querySelector('.result_total-all__materialgs').innerText = delimiter_number(result_material);
    document.querySelector('.result_total-jobs span').innerText = delimiter_number(result_jobs);
    document.querySelector('.result_total-all__jobs').innerText = delimiter_number(result_jobs + result_material);
}
document.querySelector('.fly_result').addEventListener('input', function(e) {
    if (e.target.tagName === 'INPUT') {
        if (!flag_total) flag_total = true;
        let value = e.target.getAttribute('data-value');
        if (e.target.closest('.input-section-parent:not(.fl-section-input)')) {
            e.target.closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(value * e.target.value);
            if (!e.target.closest('.input-section-parent').querySelector('.fly_result__line-input-price').getAttribute('style')) {
                e.target.closest('.input-section-parent').querySelector('.fly_result__line-input-price').style.display = 'flex';
                document.querySelector('.result_total').style.display = 'grid';
            }
        } else {
            e.target.closest('.input-section-box').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(value * e.target.value);
            if (!e.target.closest('.input-section-box').querySelector('.fly_result__line-input-price').getAttribute('style')) {
                e.target.closest('.input-section-box').querySelector('.fly_result__line-input-price').style.display = 'flex'
            }
        }
        receiving_price();
    }
});


let coord_total = '';
console.log(coord_total);
let flag_total = false;
document.addEventListener('scroll', function(e) {
    let btn = getOffset('.calculator_frame__submit') + document.querySelector('.calculator_frame__submit').offsetHeight;
    let img = getOffset('.calculator_frame__parentImg') + document.querySelector('.calculator_frame__parentImg').offsetHeight;

    if (btn <= img) {
        document.querySelector('.calculator_frame__parentImg').style.cssText = `
            position:relative;
            top: ${(getOffset('.calculator_frame__submit') - document.querySelector('.calculator_frame__parentImg').offsetHeight) / 2}px
        `;
    } else {
        document.querySelector('.calculator_frame__parentImg').style = null;
    }
    if (document.querySelector('.calculator_frame__submit').getBoundingClientRect().top / 2 > window.scrollY) {
        document.querySelector('.calculator_frame__parentImg').style = null;
    }

    if (flag_total) {
        if (coord_total > window.innerHeight + window.scrollY) {
            document.querySelector('.result_total').classList.add('active');
        } else {
            document.querySelector('.result_total').classList.remove('active');
        }
    }
});

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
    let vysota_cokolya = document.querySelector('div[data-rass="vysota_cokolya"] p').dataset.result ? document.querySelector('div[data-rass="vysota_cokolya"] p').dataset.result : 'no';
    let vnut_dlina_steny_cokol = document.querySelector('div[data-rass="vnut_dlina_steny_cokol"] input').value ? document.querySelector('div[data-rass="vnut_dlina_steny_cokol"] input').value : 'no';
    let vnut_tolshina_steny_cokol = document.querySelector('div[data-rass="vnut_tolshina_steny_cokol"] p').dataset.result ? document.querySelector('div[data-rass="vnut_tolshina_steny_cokol"] p').dataset.result : 'no';

    let col_iteration = 11;
    for (let i = 1; i <= col_iteration; i++) {
        switch (i) {
            case 1:
                if (!isNaN(addition_percent(ploshad * kirpich, 5))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad * kirpich, 5) + ' шт<p> (с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = ploshad;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', addition_percent(ploshad * kirpich, 5));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number(ploshad));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 2:
                if (!isNaN(addition_percent(ploshad * tolshina, 5))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad * tolshina, 5) + ' м³<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = (tolshina * 1000) + ' мм.';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', addition_percent(ploshad * tolshina, 5));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number(ploshad * tolshina));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 3:
                if (!isNaN(addition_percent(ploshad_steny * tolshina_steny, 5))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad_steny * tolshina_steny, 5) + ' м³<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = (tolshina_steny * 1000) + ' мм';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', addition_percent(ploshad_steny * tolshina_steny, 5));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number(ploshad_steny * tolshina_steny));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 4:
                if (!isNaN(addition_percent(ploshad_steny_2 * tolshina_steny_2, 5))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad_steny_2 * tolshina_steny_2, 5) + ' м³<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = (tolshina_steny_2 * 1000) + ' мм.';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', addition_percent(ploshad_steny_2 * tolshina_steny_2, 5));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number(ploshad_steny_2 * tolshina_steny_2));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 5:
                if (!isNaN(addition_percent(ploshad * uteplitel, 15))) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = addition_percent(ploshad * uteplitel, 15) + ' м³<p>(с учетом запаса 15%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = ploshad;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', addition_percent(ploshad * uteplitel, 15));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number(ploshad * uteplitel));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 6:
                let objem_bloka = parseFloat(document.querySelector('.fly_result__line span[data-num="2"]').innerText);
                if (!isNaN(objem_bloka) && objem_bloka !== '') {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = +((objem_bloka * 30) / 25).toFixed(1) + ' упаковок по 25 кг<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = objem_bloka + ' м³';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', +((objem_bloka * 30) / 25).toFixed(1));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 7:
                let obj_bloka_2 = parseFloat(document.querySelector('.fly_result__line span[data-num="3"]').innerText);
                let obj_bloka_3 = parseFloat(document.querySelector('.fly_result__line span[data-num="4"]').innerText);
                if ((!isNaN(obj_bloka_2) && !isNaN(obj_bloka_3)) && (obj_bloka_2 !== '' && obj_bloka_3 !== '')) {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').innerHTML = +(((Number(obj_bloka_2) + Number(obj_bloka_3)) * 30) / 25).toFixed(1) + ' упаковок по 25 кг<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('ins').innerText = Number(obj_bloka_2) + Number(obj_bloka_3) + ' м³';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', +(((Number(obj_bloka_2) + Number(obj_bloka_3)) * 30) / 25).toFixed(1));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
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
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('p ins').innerText = ploshad;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', Number(+(addition_percent(ploshad * cement, 5))) / 50);
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number(+(addition_percent(ploshad * cement, 5))) / 1000);
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-box').querySelector('.fly_result__line-input-price span').innerText = Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value);
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-box').querySelector('.fly_result__line-input-price span').innerText = Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value);
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 9:
                if (!isNaN(dlina_sten_cokol) && !isNaN(tolshina_sten_cokol) && !isNaN(vysota_cokolya)) {
                    let sum_cube = dlina_sten_cokol * tolshina_sten_cokol * vysota_cokolya;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-1').innerHTML = sum_cube.toFixed(1);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-2').innerHTML = addition_percent(sum_cube * 394, 5, 0) + ' шт.';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', addition_percent(sum_cube * 394, 5, 0));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number(sum_cube.toFixed(1)));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 10:
                if (!isNaN(dlina_sten_cokol) && !isNaN(tolshina_sten_cokol) && !isNaN(vysota_cokolya) && !isNaN(vnut_dlina_steny_cokol) && !isNaN(vnut_tolshina_steny_cokol)) {
                    let sum_cube_vnut = vnut_tolshina_steny_cokol * vnut_dlina_steny_cokol * vysota_cokolya;
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-1').innerHTML = sum_cube_vnut.toFixed(1);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-2').innerHTML = addition_percent(sum_cube_vnut * 394, 5, 0) + ' шт.';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', addition_percent(sum_cube_vnut * 394, 5, 0));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number(sum_cube_vnut.toFixed(1)));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value));
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-parent').querySelector('.fly_result__line-input-price span').innerText = delimiter_number(parseInt(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value));
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            case 11:
                if (!isNaN(dlina_sten_cokol) && !isNaN(tolshina_sten_cokol) && !isNaN(vysota_cokolya) && !isNaN(vnut_dlina_steny_cokol) && !isNaN(vnut_tolshina_steny_cokol)) {
                    let sum_cube_vnut_r = (dlina_sten_cokol * tolshina_sten_cokol * vysota_cokolya) + (vnut_tolshina_steny_cokol * vnut_dlina_steny_cokol * vysota_cokolya);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('p ins').innerHTML = sum_cube_vnut_r.toFixed(1);
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-cement').innerHTML = +(addition_percent(sum_cube_vnut_r * 100, 5)) + ' кг. цемента<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').querySelector('.fly_result__line-pesok').innerHTML = +(addition_percent(sum_cube_vnut_r * 400, 5)) + ' кг. песка<p>(с учетом запаса 5%)</p>';
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'flex';
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').setAttribute('data-value', Number((addition_percent(sum_cube_vnut_r * 100, 5))) / 50);
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').setAttribute('data-value', Number((addition_percent(sum_cube_vnut_r * 500, 5))) / 1000);
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').closest('.input-section-box').querySelector('.fly_result__line-input-price span').innerText = Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-material"]').dataset.value);
                    document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').closest('.input-section-box').querySelector('.fly_result__line-input-price span').innerText = Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').value) * Number(document.querySelector('.fly_result__line-input input[name="input-' + i + '-jobs"]').dataset.value);
                } else {
                    document.querySelector('.fly_result__line span[data-num="' + i + '"]').closest('.fly_result__line').style.display = 'none';
                }
                break;
            default:
                break;
        }
    }
    receiving_price();
    coord_total = document.querySelector('.calculator_frame').offsetHeight;
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

    if (e.target.classList.contains('fly_result__line-input__mobile-header-img')) {
        e.target.nextElementSibling.classList.toggle('active');
    }

    if (e.target.classList.contains('result_total-img-popap') || e.target.closest('.result_total-img-popap')) {
        e.target.closest('.result_total').classList.toggle('active_section');
    }
});


document.querySelector('.calculator_frame').addEventListener('change', function(e) {
    if (e.target.classList.contains('radio_anon')) {
        switch (e.target.value) {
            case 'yes':
                e.target.closest('.calculator_frame__checkbox').nextElementSibling.classList.add('active_box');
                coord_total = document.querySelector('.calculator_frame').offsetHeight;
                break;
            case 'no':
                e.target.closest('.calculator_frame__checkbox').nextElementSibling.classList.remove('active_box');
                coord_total = document.querySelector('.calculator_frame').offsetHeight;
                break;
            default:
                break;
        }
    }

});

let path = 'img/';


document.querySelectorAll('.calculator_frame form div[data-mouse-picture]').forEach(i => {
    i.addEventListener('mouseover', function(e) {
        document.querySelectorAll('.calculator_frame form div').forEach(i => i.classList.remove('active'));
        i.classList.add('active');
        let src = i.getAttribute('data-mouse-picture');
        document.querySelector('.calculator_frame__parentImg').setAttribute('src', `${path + src + '.jpg'}`);
    });
});

// document.querySelector('.calculator_frame form').addEventListener('mouseover', function(e) {
//     // if (e.target.tagName === 'DIV' && e.target.getAttribute('data-mouse-picture') && !e.target.closest('.next_block_checkbox') ||
//     //     e.target.tagName === 'SPAN' && e.target.closest('.calculator_frame__select-box') && !e.target.closest('.next_block_checkbox') ||
//     //     e.target.classList.contains('calculator_frame__select') && !e.target.closest('.next_block_checkbox') ||
//     //     e.target.tagName === 'INPUT' && !e.target.closest('.next_block_checkbox') ||
//     //     e.target.tagName === 'LABEL' && !e.target.closest('.next_block_checkbox')) {

//     if ((e.target.tagName === 'DIV' && e.target.getAttribute('data-mouse-picture') ||
//             e.target.classList.contains('calculator_frame__select-box') ||
//             e.target.classList.contains('calculator_frame__input_text') ||
//             e.target.classList.contains('calculator_frame__label') ||
//             e.target.classList.contains('calculator_frame__checkbox') ||
//             (e.target.tagName === 'LABEL' && !e.target.closest('.calculator_frame__checkbox')) ||
//             e.target.tagName === 'SPAN') && !e.target.closest('.next_block_checkbox') || (e.target.closest('.next_block_checkbox') && e.target.closest('.next_block_checkbox').getAttribute('data-mouse'))) {
//         document.querySelectorAll('.calculator_frame form div').forEach(i => i.classList.remove('active'));
//         e.target.classList.add('active')
//         let src = (e.target.tagName === 'SPAN' && e.target.closest('.calculator_frame__select-box') || e.target.tagName === 'LABEL' || e.target.tagName === 'INPUT' || e.target.classList.contains('calculator_frame__select')) ? e.target.parentNode.getAttribute('data-mouse-picture') : e.target.getAttribute('data-mouse-picture');
//         (e.target.tagName === 'SPAN' && e.target.closest('.calculator_frame__select-box') || e.target.tagName === 'LABEL' || e.target.tagName === 'INPUT' || e.target.classList.contains('calculator_frame__select')) ? e.target.parentNode.classList.add('active'): e.target.classList.add('active');
//         document.querySelector('.calculator_frame__parentImg').setAttribute('src', `${path + src + '.jpg'}`);
//     }

// });
